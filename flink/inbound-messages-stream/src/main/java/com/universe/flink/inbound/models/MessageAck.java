package com.universe.flink.inbound.models;

public class MessageAck {
    public String messageId;
    public boolean success;
    public String time;

    public MessageAck() {}
}
