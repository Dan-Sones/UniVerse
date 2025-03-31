package kafka

import (
	"github.com/segmentio/kafka-go"
	"time"
)

func CreateInboundMessagesWriter() *kafka.Writer {
	writer := &kafka.Writer{
		Addr:         kafka.TCP("localhost:9092"),
		Topic:        "inbound-messages",
		Balancer:     &kafka.LeastBytes{},
		BatchTimeout: 10 * time.Millisecond,
	}
	return writer
}

func CreateMessageAckWriter() *kafka.Writer {
	writer := &kafka.Writer{
		Addr:         kafka.TCP("localhost:9092"),
		Topic:        "message-ack",
		Balancer:     &kafka.LeastBytes{},
		BatchTimeout: 10 * time.Millisecond,
	}
	return writer
}
