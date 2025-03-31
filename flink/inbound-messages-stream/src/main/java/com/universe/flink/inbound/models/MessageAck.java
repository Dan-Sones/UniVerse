package com.universe.flink.inbound.models;

public class MessageAck {
    public String messageId;
    public boolean delivered;
    public String timestamp;
    public MessageError error;
    public String senderId;
    public String receiverId;



    public MessageAck() {}
}


