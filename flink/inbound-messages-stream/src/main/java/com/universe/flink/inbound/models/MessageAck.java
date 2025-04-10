package com.universe.flink.inbound.models;

public class MessageAck {
    private String messageId;
    private boolean delivered;
    private String timestamp;
    private MessageError error;
    private String senderId;
    private String receiverId;

    public String getMessageId() {
        return messageId;
    }

    public boolean isDelivered() {
        return delivered;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public MessageError getError() {
        return error;
    }

    public String getSenderId() {
        return senderId;
    }

    public String getReceiverId() {
        return receiverId;
    }

    public MessageAck() {}
}


