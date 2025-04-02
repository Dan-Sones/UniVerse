package com.universe.flink.inbound.processors;

import com.universe.flink.inbound.clients.DynamoDB;
import com.universe.flink.inbound.models.Message;
import com.universe.flink.inbound.repositories.ChatRepository;
import org.apache.flink.streaming.api.functions.ProcessFunction;
import org.apache.flink.util.Collector;

public class DynamoWriter extends ProcessFunction<Message, Message> {

    private transient ChatRepository chatRepository;

    @Override
    public void processElement(Message message, ProcessFunction<Message, Message>.Context context, Collector<Message> collector) throws Exception {

        if (chatRepository == null) {
            chatRepository = new ChatRepository(DynamoDB.getDynamoDBClient());
        }

        System.out.println("[DynamoWriter] Writing message to DynamoDB: " + message);
        chatRepository.saveMessage(message);

        collector.collect(message);

    }
}
