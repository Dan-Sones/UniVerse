package services

import (
	"backend/internal/infrastructure/httpServer/ws"
	"backend/internal/models/chat"
	"context"
	"encoding/json"
	"github.com/rs/zerolog"
	"github.com/segmentio/kafka-go"
)

type OutboundMessagesService struct {
	Logger      *zerolog.Logger
	KafkaReader *kafka.Reader
}

func NewKafkaService(reader *kafka.Reader, logger *zerolog.Logger) *OutboundMessagesService {
	return &OutboundMessagesService{
		KafkaReader: reader,
		Logger:      logger,
	}
}

func (ks *OutboundMessagesService) ListenForOutboundMessages(clients *map[int64]*ws.Client, messages chan chat.OutboundMessage) {

	defer ks.KafkaReader.Close()

	for {
		m, err := ks.KafkaReader.ReadMessage(context.Background())
		if err != nil {
			ks.Logger.Error().Err(err).Msg("error reading message")
		}

		var message chat.OutboundMessage
		err = json.Unmarshal(m.Value, &message)

		ks.Logger.Info().Str("message_id", message.MessageId).Msg("Received message from Kafka")
		
		if _, ok := (*clients)[message.To]; ok {
			messages <- message
		}
	}

}
