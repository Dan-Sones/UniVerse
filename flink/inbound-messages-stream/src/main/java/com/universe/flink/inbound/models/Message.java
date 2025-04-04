package com.universe.flink.inbound.models;

public class Message {
    private String conversationId;
    private String timestamp;
    private String messageId;
    private long senderId;
    private long  receiverId;
    private String content;
    private MessageType messageType;
    private MessageStatus status;

    public void setStatus(MessageStatus status) {
        this.status = status;
    }

    public String getConversationId() {
        return conversationId;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public String getMessageId() {
        return messageId;
    }

    public long getSenderId() {
        return senderId;
    }

    public long getReceiverId() {
        return receiverId;
    }

    public String getContent() {
        return content;
    }

    public MessageType getMessageType() {
        return messageType;
    }

    public MessageStatus getStatus() {
        return status;
    }

    @Override
    public String toString() {
        return "[" + messageType + "] From " + senderId + " to " + receiverId + ": " + content;
    }
}