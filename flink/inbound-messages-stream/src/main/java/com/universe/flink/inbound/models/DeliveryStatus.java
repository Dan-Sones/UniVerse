package com.universe.flink.inbound.models;

import java.time.Instant;

public class DeliveryStatus {
    public int deliveryAttempts = 0;
    public Instant lastDeliveryAttemptTime;
    public boolean delivered = false;
    public boolean acknowledged = false;
    public boolean failedToBeAcknowledgedWithinAcceptableTime = false;

    public DeliveryStatus() {}

    @Override
    public String toString() {
        return String.format(
                "Attempts=%d, Delivered=%s, Acked=%s, LastAttempt=%s",
                deliveryAttempts,
                delivered,
                acknowledged,
                lastDeliveryAttemptTime
        );
    }
}