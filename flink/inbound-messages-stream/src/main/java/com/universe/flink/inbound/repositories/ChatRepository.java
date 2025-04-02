package com.universe.flink.inbound.repositories;


import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.PutItemRequest;
import com.universe.flink.inbound.models.Message;

import java.util.Map;

public class ChatRepository {

    private final AmazonDynamoDB client;

    public ChatRepository(AmazonDynamoDB dynamoDB) {
        this.client = dynamoDB;
    }

    public void saveMessage(Message message) {

        Map<String, AttributeValue> messageItem = Map.of(
                "messageId", new AttributeValue(message.messageId),
                "conversationId", new AttributeValue(message.conversationId),
                "senderId", new AttributeValue().withN(String.valueOf(message.senderId)),
                "receiverId", new AttributeValue().withN(String.valueOf(message.receiverId)),
                "timestamp", new AttributeValue(message.timestamp),
                "content", new AttributeValue(message.content),
                "messageType", new AttributeValue(message.messageType.toString()),
                "status", new AttributeValue(message.status.toString())
        );

        PutItemRequest putItemRequest = new PutItemRequest()
                .withTableName("messages")
                .withItem(messageItem);

        client.putItem(putItemRequest);
    }


}
