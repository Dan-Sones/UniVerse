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
                "messageId", new AttributeValue(message.messageId),
                "conversationId", new AttributeValue(message.conversationId),
                "senderId", new AttributeValue().withN(String.valueOf(message.senderId)),
                "receiverId", new AttributeValue().withN(String.valueOf(message.receiverId)),
                "timestamp", new AttributeValue(message.timestamp),
                "content", new AttributeValue(message.content),
                "messageType", new AttributeValue(message.messageType.toString()),
                "status", new AttributeValue(message.status.toString())
        );

        if (message.status == MessageStatus.PREEMPTIVE) {
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

        } else if (message.status == MessageStatus.DELIVERED) {
            Map<String, AttributeValue> key = Map.of(
                    "messageId", new AttributeValue(message.messageId),
                    "conversationId", new AttributeValue(message.conversationId)
            );

            Map<String, AttributeValueUpdate> updates = Map.of("status", new AttributeValueUpdate()
                    .withValue(new AttributeValue()
                            .withS(message.status.toString()))
                    .withAction(AttributeAction.PUT));

            UpdateItemRequest request = new UpdateItemRequest()
                    .withTableName("messages")
                    .withKey(key)
                    .withAttributeUpdates(updates);


            dynamoDBClient.updateItemAsync(request, new AsyncHandler<UpdateItemRequest, UpdateItemResult>() {
                @Override
                public void onError(Exception e) {
                    resultFuture.completeExceptionally(e);
                }

                @Override
                public void onSuccess(UpdateItemRequest request, UpdateItemResult updateItemResult) {
                    resultFuture.complete(Collections.singleton(null));
                }
            });

        }


    }

    @Override
    public void timeout(Message input, ResultFuture<Void> resultFuture) throws Exception {
        resultFuture.completeExceptionally(new TimeoutException("Write timed out for messageId=" + input.messageId));
    }
}