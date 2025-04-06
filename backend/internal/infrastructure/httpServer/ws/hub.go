package ws

import (
	"backend/internal/models/chat"
	"github.com/rs/zerolog"
	"github.com/segmentio/kafka-go"
	"sync"
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
	sessionStateWriter       *kafka.Writer
}

func NewHub(inboundMessagesWriter *kafka.Writer, messageAckWriter *kafka.Writer, sessionStateWriter *kafka.Writer, clients *map[int64]*Client, incomingFromKafka chan chat.Message, logger *zerolog.Logger) *Hub {
	return &Hub{
		Clients:                  clients,
		IncomingFromClientDevice: make(chan chat.InboundMessage),
		IncomingFromKafka:        incomingFromKafka,
		Register:                 make(chan *Client),
		Unregister:               make(chan *Client),
		logger:                   logger,
		inboundMessagesWriter:    inboundMessagesWriter,
		messageAckWriter:         messageAckWriter,
		sessionStateWriter:       sessionStateWriter,
	}
}

func (h *Hub) Run() {
	for {
		select {
		case client := <-h.Register:
			h.handleConnect(client)
		case client := <-h.Unregister:
			h.handleDisconnect(client)
		case message := <-h.IncomingFromClientDevice:
			go h.handleIncomingFromClient(&message)
		case message := <-h.IncomingFromKafka:
			go h.sendMessageToClient(message)
		}
	}
}
