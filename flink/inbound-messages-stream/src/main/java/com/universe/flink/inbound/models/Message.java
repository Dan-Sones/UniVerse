package com.universe.flink.inbound.models;


public class Message {
    public String messageId;
    public String type;
    public int from;
    public int to;
    public String content;
    public String time;

    @Override
    public String toString() {
        return "[" + type + "] From " + from + " to " + to + ": " + content;
    }
}