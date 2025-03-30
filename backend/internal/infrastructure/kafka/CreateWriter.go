package kafka

import (
	"github.com/segmentio/kafka-go"
)

func CreateInboundMessagesWriter() *kafka.Writer {
	//conn, err := kafka.DialLeader(context.Background(), "tcp", "localhost:9092", "inbound-messages", 0)
	//if err != nil {
	//	log.Fatal("failed to dial leader:", err)
	//}
	writer := &kafka.Writer{
		Addr:     kafka.TCP("localhost:9092"),
		Topic:    "inbound-messages",
		Balancer: &kafka.LeastBytes{},
	}

	return writer
}
