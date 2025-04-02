package ws

import (
	"backend/internal/models/chat"
	"backend/internal/utils"
	"context"
	"encoding/json"
	"fmt"
	"github.com/rs/zerolog"
	"github.com/segmentio/kafka-go"
	"sync"
	"time"
)

type Hub struct {
	Clients                  *map[int64]*Client
	IncomingFromClientDevice chan chat.InboundMessage
	IncomingFromKafka        chan chat.Message
	Register                 chan *Client
	Unregister               chan *Client
	mu                       sync.RWMutex
	logger                   *zerolog.Logger
	inboundMessagesWriter    *kafka.Writer
	messageAckWriter         *kafka.Writer
}

func NewHub(inboundMessagesWriter *kafka.Writer, messageAckWriter *kafka.Writer, clients *map[int64]*Client, incomingFromKafka chan chat.Message, logger *zerolog.Logger) *Hub {
	return &Hub{
		Clients:                  clients,
		IncomingFromClientDevice: make(chan chat.InboundMessage),
		IncomingFromKafka:        incomingFromKafka,
		Register:                 make(chan *Client),
		Unregister:               make(chan *Client),
		logger:                   logger,
		inboundMessagesWriter:    inboundMessagesWriter,
		messageAckWriter:         messageAckWriter,
	}
}

func (h *Hub) Run() {
	for {
		select {
		case client := <-h.Register:
			h.logger.Info().Msg(fmt.Sprintf("Registering client with userId %d", client.UserID))
			h.mu.Lock()
			(*h.Clients)[client.UserID] = client
			h.mu.Unlock()
		case client := <-h.Unregister:
			h.mu.Lock()
			if _, exists := (*h.Clients)[client.UserID]; exists {
				h.logger.Info().Msg(fmt.Sprintf("closing connection on client with userId %d", client.UserID))
				delete(*h.Clients, client.UserID)
				close(client.Send)
			}
			h.mu.Unlock()
		case message := <-h.IncomingFromClientDevice:
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
				Key:   []byte(conversationId),
				Value: outboundMessageJSON,
			})
			if err != nil {
				h.logger.Error().Err(err).Msg("failed to write message to inbound")
			}

			h.logger.Info().Msg("Sent Messsage to flink!")
		case message := <-h.IncomingFromKafka:
			go h.sendMessageToClient(message)
		}
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
