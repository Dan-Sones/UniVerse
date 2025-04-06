#!/bin/bash

SHORT_RETENTION_MS=15000

create_topic() {
  local topic=$1
  kafka-topics --bootstrap-server localhost:9092 \
    --create --if-not-exists \
    --topic "$topic" \
    --replication-factor 1 \
    --partitions 1 \
    --config retention.ms=$SHORT_RETENTION_MS

  echo "Kafka topic '$topic' created with ${SHORT_RETENTION_MS}ms retention."
}

create_topic inbound-messages
create_topic outbound-messages
create_topic message-ack
create_topic session-state