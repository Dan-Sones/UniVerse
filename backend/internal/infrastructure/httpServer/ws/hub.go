package ws

import (
	"backend/internal/models/chat"
	"backend/internal/services"
	"context"
	"encoding/json"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/rs/zerolog"
	"sync"
	"time"
)

type Hub struct {
	Clients    map[int64]*Client
	Broadcast  chan InboundMessage
	Register   chan *Client
	Unregister chan *Client
	mu         sync.Mutex
	service    *services.ChatService
	logger     *zerolog.Logger
}

func NewHub(db *dynamodb.Client, logger *zerolog.Logger) *Hub {
	chatService := services.NewChatService(db, logger)
	return &Hub{
		Clients:    make(map[int64]*Client),
		Broadcast:  make(chan InboundMessage),
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		service:    chatService,
		logger:     logger,
	}
}

func (h *Hub) Run() {
	for {
		select {
		case client := <-h.Register:
			h.mu.Lock()
			h.Clients[client.UserID] = client
			h.mu.Unlock()
		case client := <-h.Unregister:
			h.mu.Lock()
			if _, exists := h.Clients[client.UserID]; exists {
				delete(h.Clients, client.UserID)
				close(client.Send)
			}
			h.mu.Unlock()
		case message := <-h.Broadcast:
			if client, exists := h.Clients[message.To]; exists {

				sentTime := time.Now()

				outboundMessage := chat.OutboundMessage{
					Type:    message.Type,
					From:    message.From,
					To:      message.To,
					Content: message.Content,
					Time:    sentTime.Format(time.RFC3339),
				}
				outboundJson, err := json.Marshal(outboundMessage)
				if err != nil {
					h.logger.Error().Err(err).Msg("failed to marshal outbound message")
					return
				}

				h.service.StoreMessage(context.Background(), &outboundMessage, sentTime)
				client.Send <- outboundJson
			}

		}
	}
}
