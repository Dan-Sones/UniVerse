package ws

import (
	"backend/internal/models/chat"
	"backend/internal/services"
	"encoding/json"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/rs/zerolog"
	"github.com/segmentio/kafka-go"
	"sync"
	"time"
)

type Hub struct {
	Clients             map[int64]*Client
	Broadcast           chan chat.InboundMessage
	Register            chan *Client
	Unregister          chan *Client
	mu                  sync.Mutex
	service             *services.ChatService
	logger              *zerolog.Logger
	inboundMessagesConn *kafka.Conn
}

func NewHub(db *dynamodb.Client, inboundMessagesConn *kafka.Conn, logger *zerolog.Logger) *Hub {
	chatService := services.NewChatService(db, logger)
	return &Hub{
		Clients:             make(map[int64]*Client),
		Broadcast:           make(chan chat.InboundMessage),
		Register:            make(chan *Client),
		Unregister:          make(chan *Client),
		service:             chatService,
		logger:              logger,
		inboundMessagesConn: inboundMessagesConn,
	}
}

func (h *Hub) Run() {
	for {
		select {
		case client := <-h.Register:
			h.logger.Info().Msg(fmt.Sprintf("Registering client with userId %d", client.UserID))
			h.mu.Lock()
			h.Clients[client.UserID] = client
			h.mu.Unlock()
		case client := <-h.Unregister:
			h.mu.Lock()
			if _, exists := h.Clients[client.UserID]; exists {
				h.logger.Info().Msg(fmt.Sprintf("closing connection on client with userId %d", client.UserID))

				delete(h.Clients, client.UserID)
				close(client.Send)
			}
			h.mu.Unlock()
		case message := <-h.Broadcast:

			messageId := services.GenerateMessageID(time.Now())

			sentTime := time.Now()
			outboundMessage := chat.OutboundMessage{
				Type:      message.Type,
				From:      message.From,
				To:        message.To,
				Content:   message.Content,
				MessageId: messageId,
				Time:      sentTime.Format(time.RFC3339),
			}

			outboundMessageJSON, err := json.Marshal(outboundMessage)
			if err != nil {
				// TODO: Handle Internal Retry logic OR send failed message to client device via WS
				h.logger.Error().Err(err).Msg("failed to marshal outbound message")
			}

			_, err = h.inboundMessagesConn.WriteMessages(kafka.Message{
				Key:   []byte(services.GenerateConversationID(outboundMessage.From, message.To)),
				Value: outboundMessageJSON,
			})
			if err != nil {
				// TODO: Handle Internal Retry logic OR send failed message to client device via WS
				h.logger.Error().Err(err).Msg("failed to write message to inbound")
			}

			//if client, exists := h.Clients[message.To]; exists {
			//
			//	outboundJson, err := json.Marshal(outboundMessage)
			//	if err != nil {
			//		h.logger.Error().Err(err).Msg("failed to marshal outbound message")
			//		return
			//	}
			//
			//	client.Send <- outboundJson
			//} else {
			//	// TODO: Push to pub sub stack with ttl
			//}
			//
			//err := h.service.StoreMessage(context.Background(), &outboundMessage, sentTime)
			//if err != nil {
			//	return
			//}

		}
	}
}
