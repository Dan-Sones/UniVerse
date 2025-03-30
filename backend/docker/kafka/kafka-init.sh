#!/bin/bash

kafka-topics --bootstrap-server localhost:9092 \
  --create --if-not-exists \
  --topic inbound-messages \
  --replication-factor 1 \
  --partitions 1

echo "Kafka topic 'inbound-messages' created."