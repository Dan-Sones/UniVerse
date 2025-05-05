package ws

import (
	"backend/internal/models/chat"
	"backend/internal/models/session"
	"backend/internal/utils"
	"context"
	"encoding/json"
	"fmt"
	"github.com/segmentio/kafka-go"
	"time"
)

func (h *Hub) handleConnect(client *Client) {
	h.logger.Info().Msg(fmt.Sprintf("Registering client with userId %d", client.UserID))
	h.mu.Lock()
	(*h.Clients)[client.UserID] = client
	h.mu.Unlock()

	h.publishSessionEvent(client.UserID, client.SessionId, session.DeviceConnected)
}

func (h *Hub) handleDisconnect(client *Client) {
	h.mu.Lock()
	if _, exists := (*h.Clients)[client.UserID]; exists {
		h.logger.Info().Msg(fmt.Sprintf("closing connection on client with userId %d", client.UserID))
		delete(*h.Clients, client.UserID)
		close(client.Send)
	}
	h.mu.Unlock()

	h.publishSessionEvent(client.UserID, client.SessionId, session.DeviceDisconnected)
}

func (h *Hub) handleIncomingFromClient(message *chat.InboundMessage) {
	messageId := utils.GenerateMessageID(time.Now())
	conversationId := utils.GenerateConversationID(message.From, message.To)
	sentTime := time.Now()

	outboundMessage := chat.Message{
		SenderId:       message.From,
		ReceiverId:     message.To,
		Content:        message.Content,
		MessageId:      messageId,
		Timestamp:      sentTime.Format(time.RFC3339),
		ConversationId: conversationId,
		MessageType:    "TEXT",
		Status:         chat.StatusPreEmptive,
	}

	outboundMessageJSON, err := json.Marshal(outboundMessage)
	if err != nil {
		h.logger.Error().Err(err).Msg("failed to marshal outbound message")
	}

	err = h.inboundMessagesWriter.WriteMessages(context.Background(), kafka.Message{
		Key:   []byte(messageId),
		Value: outboundMessageJSON,
	})
	if err != nil {
		h.logger.Error().Err(err).Msg("failed to write message to inbound")
	}

}

func (h *Hub) sendMessageToClient(message chat.Message) {
	t1, err := time.Parse(time.RFC3339, message.Timestamp)
	if err != nil {
		h.logger.Error().Err(err).Msg("Invalid time format in outbound message")
		return
	}

	diff := time.Since(t1)
	h.logger.Info().Str("message_id", message.MessageId).Dur("latency", diff).Msg("Outbound message latency")

	h.mu.RLock()
	client, ok := (*h.Clients)[message.ReceiverId]
	h.mu.RUnlock()

	msgJson, err := json.Marshal(message)
	if err != nil {
		h.logger.Error().Err(err)
	}

	messageAck := chat.MessageAck{
		MessageId:  message.MessageId,
		Delivered:  ok,
		SenderId:   message.SenderId,
		ReceiverId: message.ReceiverId,
		Timestamp:  message.Timestamp,
		Error:      "",
	}

	if ok {
		select {
		case client.Send <- msgJson:
		default:
			h.logger.Warn().Int64("user_id", message.ReceiverId).Msg("Client send buffer full. Dropping message.")
			messageAck.Delivered = false
			messageAck.Error = "CLIENT_BUFFER_FULL"
		}
	} else {
		h.logger.Warn().Int64("user_id", message.ReceiverId).Msg("Client not connected. Cannot deliver message.")
		messageAck.Delivered = false
		messageAck.Error = "CLIENT_NOT_CONNECTED"
	}

	messageAckJSON, err := json.Marshal(messageAck)
	if err != nil {
		h.logger.Error().Err(err).Msg("failed to marshal message ack")
	}

	err = h.messageAckWriter.WriteMessages(context.Background(), kafka.Message{
		Key:   []byte(message.MessageId),
		Value: messageAckJSON,
	})
}

func (h *Hub) publishSessionEvent(userId int64, sessionId string, eventType session.Event) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	sessionEvent := session.Session{
		UserID:    userId,
		Event:     eventType,
		SessionID: sessionId,
	}

	sessionJson, err := json.Marshal(sessionEvent)
	if err != nil {
		h.logger.Error().Err(err).Msg(fmt.Sprintf("failed to marshal %s event", sessionEvent.Event))
		return
	}
	fmt.Println(string(sessionJson))

	err = h.sessionStateWriter.WriteMessages(ctx, kafka.Message{
		Key:   []byte(fmt.Sprintf("%d", userId)),
		Value: sessionJson,
	})
	if err != nil {
		h.logger.Error().Err(err).Msg(fmt.Sprintf("failed to write %s event to kafka", sessionEvent.Event))
		return
	}
}
