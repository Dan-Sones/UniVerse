package kafka

import (
	"context"
	"github.com/segmentio/kafka-go"
	"log"
)

func CreateInboundMessagesWriter() *kafka.Conn {
	conn, err := kafka.DialLeader(context.Background(), "tcp", "localhost:9092", "inbound-messages", 0)
	if err != nil {
		log.Fatal("failed to dial leader:", err)
	}
	return conn
}
