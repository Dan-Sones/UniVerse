package com.universe.flink.inbound.functions;

import com.universe.flink.inbound.models.DeliveryStatus;
import com.universe.flink.inbound.models.Message;
import org.apache.flink.api.common.state.ValueState;
import org.apache.flink.api.common.state.ValueStateDescriptor;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.streaming.api.functions.KeyedProcessFunction;
import org.apache.flink.util.Collector;

import java.time.Instant;

// Keyed by strings, takes in Message, emits Message
public class DeliveryStateFunction extends KeyedProcessFunction<String, Message, Message> {

    // Stores the info for the current key
    private  transient ValueState<DeliveryStatus> deliveryState;

    // Almost like a constructor? allows us to creaate a new record to track delivery state
    @Override
    public void open(Configuration parameters) {
        ValueStateDescriptor<DeliveryStatus> descriptor = new ValueStateDescriptor<>("deliveryStatus", DeliveryStatus.class);
        deliveryState = getRuntimeContext().getState(descriptor);
    }

    @Override
    public void processElement(Message msg, KeyedProcessFunction<String, Message, Message>.Context ctx, Collector<Message> out) throws Exception {
        DeliveryStatus currentDeliveryStatus = deliveryState.value();

        if (currentDeliveryStatus == null) {
            currentDeliveryStatus = new DeliveryStatus();
        }

        currentDeliveryStatus.deliveryAttempts += 1;
        currentDeliveryStatus.lastDeliveryAttemptTime = Instant.now();

        deliveryState.update(currentDeliveryStatus);

        System.out.printf("[State] MessageID=%s => %s%n", msg.messageId, currentDeliveryStatus);

        out.collect(msg);
    }
}
