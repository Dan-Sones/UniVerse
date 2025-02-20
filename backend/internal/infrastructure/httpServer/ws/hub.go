package ws

import (
	"encoding/json"
	"log"
	"sync"
	"time"
)

type Hub struct {
	Clients    map[int64]*Client
	Broadcast  chan InboundMessage
	Register   chan *Client
	Unregister chan *Client
	mu         sync.Mutex
}

type OutboundMessage struct {
	Type    string `json:"type"`
	From    int64  `json:"from"`
	To      int64  `json:"to"`
	Content string `json:"content"`
	Time    string `json:"time"`
}

func NewHub() *Hub {
	return &Hub{
		Clients:    make(map[int64]*Client),
		Broadcast:  make(chan InboundMessage),
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
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
				outboundMessage := OutboundMessage{
					Type:    message.Type,
					From:    message.From,
					To:      message.To,
					Content: message.Content,
					Time:    time.Now().String(),
				}
				outboundJson, err := json.Marshal(outboundMessage)
				if err != nil {
					log.Println(err)
					return
				}
				client.Send <- outboundJson
			}

		}
	}
}
