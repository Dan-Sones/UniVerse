package com.universe.flink.inbound.models;

public class Message {
    public String conversationId;
    public String timestamp;
    public String messageId;
    public long senderId;
    public long  receiverId;
    public String content;
    public MessageType messageType;
    public MessageStatus status;

    @Override
    public String toString() {
        return "[" + messageType + "] From " + senderId + " to " + receiverId + ": " + content;
    }
}