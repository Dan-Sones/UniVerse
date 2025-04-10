package com.universe.flink.inbound.sinks;

import com.amazonaws.handlers.AsyncHandler;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBAsync;
import com.amazonaws.services.dynamodbv2.model.*;
import com.universe.flink.inbound.clients.DynamoDB;
import com.universe.flink.inbound.models.Message;
import com.universe.flink.inbound.models.MessageStatus;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.streaming.api.functions.async.ResultFuture;
import org.apache.flink.streaming.api.functions.async.RichAsyncFunction;

import java.util.Collections;
import java.util.Map;
import java.util.concurrent.TimeoutException;

public class AsyncDynamoDBSink extends RichAsyncFunction<Message, Void> {

    private transient AmazonDynamoDBAsync dynamoDBClient;

    @Override
    public void open(Configuration parameters) {
        this.dynamoDBClient = DynamoDB.getDynamoDBAsyncClient();
    }


    @Override
    public void asyncInvoke(Message message, ResultFuture<Void> resultFuture) throws Exception {
        Map<String, AttributeValue> messageItem = Map.of(
                "messageId", new AttributeValue(message.getMessageId()),
                "conversationId", new AttributeValue(message.getConversationId()),
                "senderId", new AttributeValue().withN(String.valueOf(message.getSenderId())),
                "receiverId", new AttributeValue().withN(String.valueOf(message.getReceiverId())),
                "timestamp", new AttributeValue(message.getTimestamp()),
                "content", new AttributeValue(message.getContent()),
                "messageType", new AttributeValue(message.getMessageType().toString()),
                "status", new AttributeValue(message.getStatus().toString())
        );

        PutItemRequest putItemRequest = new PutItemRequest()
                .withTableName("messages")
                .withItem(messageItem);

        dynamoDBClient.putItemAsync(putItemRequest, new AsyncHandler<PutItemRequest, PutItemResult>() {
            @Override
            public void onError(Exception e) {
                resultFuture.completeExceptionally(e);
            }

            @Override
            public void onSuccess(PutItemRequest request, PutItemResult result) {
                resultFuture.complete(Collections.singleton(null));
            }
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