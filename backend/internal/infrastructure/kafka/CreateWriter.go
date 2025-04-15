package kafka

import (
	"github.com/segmentio/kafka-go"
	"log"
	"os"
	"strings"
	"time"
)

func GetKafkaBrokers() []string {
	brokersEnv := os.Getenv("KAFKA_BROKERS")
	if brokersEnv == "" {
		log.Fatal("Missing required kafka environment variables")
	}
	return strings.Split(brokersEnv, ",")
}

func CreateInboundMessagesWriter() *kafka.Writer {

	writer := &kafka.Writer{
		Addr:         kafka.TCP(GetKafkaBrokers()...),
		Topic:        "inbound-messages",
		Balancer:     &kafka.LeastBytes{},
		BatchTimeout: 10 * time.Millisecond,
	}
	return writer
}

func CreateMessageAckWriter() *kafka.Writer {
	writer := &kafka.Writer{
		Addr:         kafka.TCP(GetKafkaBrokers()...),
		Topic:        "message-ack",
		Balancer:     &kafka.LeastBytes{},
		BatchTimeout: 10 * time.Millisecond,
	}
	return writer
}

func CreateSessionStateWriter() *kafka.Writer {
	writer := &kafka.Writer{
		Addr:         kafka.TCP(GetKafkaBrokers()...),
		Topic:        "session-state",
		Balancer:     &kafka.LeastBytes{},
		BatchTimeout: 10 * time.Millisecond,
	}
	return writer
}

func CreateOutboundMessagesReader() *kafka.Reader {
	return kafka.NewReader(kafka.ReaderConfig{
		Brokers:  GetKafkaBrokers(),
		Topic:    "outbound-messages",
		MinBytes: 1,
		MaxBytes: 57671680,
	})
}
