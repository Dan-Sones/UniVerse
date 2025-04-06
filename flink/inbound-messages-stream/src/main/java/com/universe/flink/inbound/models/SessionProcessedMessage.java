package com.universe.flink.inbound.models;

public class SessionProcessedMessage {
    private final Message message;
    private final boolean attemptDelivery;

    public SessionProcessedMessage(Message message, boolean attemptDelivery) {
        this.message = message;
        this.attemptDelivery = attemptDelivery;
    }

    public Message getMessage() {
        return message;
    }

    public boolean AttemptDelivery() {
        return attemptDelivery;
    }

}
