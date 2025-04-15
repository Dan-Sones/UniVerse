package com.universe.flink.inbound.sinks;

import com.universe.flink.inbound.clients.DynamoDB;
import com.universe.flink.inbound.models.Message;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.streaming.api.functions.async.ResultFuture;
import org.apache.flink.streaming.api.functions.async.RichAsyncFunction;
import software.amazon.awssdk.services.dynamodb.DynamoDbAsyncClient;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;
import software.amazon.awssdk.services.dynamodb.model.PutItemRequest;

import java.util.Collections;
import java.util.Map;
import java.util.concurrent.TimeoutException;

public class AsyncDynamoDBSink extends RichAsyncFunction<Message, Void> {

    private transient DynamoDbAsyncClient dynamoDBClient;

    @Override
    public void open(Configuration parameters) {
        this.dynamoDBClient = DynamoDB.getDynamoDBAsyncClient();
    }

    @Override
    public void asyncInvoke(Message message, ResultFuture<Void> resultFuture) throws Exception {
        Map<String, AttributeValue> messageItem = Map.of(
                "messageId", AttributeValue.builder().s(message.getMessageId()).build(),
                "conversationId", AttributeValue.builder().s(message.getConversationId()).build(),
                "senderId", AttributeValue.builder().n(String.valueOf(message.getSenderId())).build(),
                "receiverId", AttributeValue.builder().n(String.valueOf(message.getReceiverId())).build(),
                "timestamp", AttributeValue.builder().s(message.getTimestamp()).build(),
                "content", AttributeValue.builder().s(message.getContent()).build(),
                "messageType", AttributeValue.builder().s(message.getMessageType().toString()).build(),
                "status", AttributeValue.builder().s(message.getStatus().toString()).build()
        );

        PutItemRequest putItemRequest = PutItemRequest.builder()
                .tableName("messages")
                .item(messageItem)
                .build();

        dynamoDBClient.putItem(putItemRequest)
                .thenAccept(response -> resultFuture.complete(Collections.singleton(null)))
                .exceptionally(ex -> {
                    resultFuture.completeExceptionally(ex);
                    return null;
                });
    }

    @Override
    public void timeout(Message input, ResultFuture<Void> resultFuture) throws Exception {
        // Create a specific timeout exception with the message ID
        TimeoutException timeoutException = new TimeoutException("Write timed out for messageId=" + input.getMessageId() + "with status: " + input.getStatus());

        // Complete the future exceptionally with the timeout exception
        resultFuture.completeExceptionally(timeoutException);
    }
}