package com.universe.flink.inbound.functions;

import com.universe.flink.inbound.models.DeliveryStatus;
import com.universe.flink.inbound.models.Message;
import com.universe.flink.inbound.models.MessageAck;
import org.apache.flink.api.common.state.ValueState;
import org.apache.flink.api.common.state.ValueStateDescriptor;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.streaming.api.functions.co.CoProcessFunction;
import org.apache.flink.util.Collector;

import java.time.Instant;

public class DeliveryAndAckProcessor extends CoProcessFunction<Message, MessageAck, Message> {
    private  transient ValueState<DeliveryStatus> deliveryState;

    @Override
    public void open(Configuration parameters)  {
        ValueStateDescriptor<DeliveryStatus> descriptor = new ValueStateDescriptor<>("deliveryStatus", DeliveryStatus.class);
        deliveryState = getRuntimeContext().getState(descriptor);
    }


    @Override
    public void processElement1(Message inboundMessage, CoProcessFunction<Message, MessageAck, Message>.Context context, Collector<Message> collector) throws Exception {
        DeliveryStatus currentDeliveryStatus = deliveryState.value();

        if (currentDeliveryStatus == null) {
            currentDeliveryStatus = new DeliveryStatus();
        }

        currentDeliveryStatus.deliveryAttempts += 1;
        currentDeliveryStatus.lastDeliveryAttemptTime = Instant.now();

        deliveryState.update(currentDeliveryStatus);

        System.out.printf("[State] MessageID=%s => %s%n", inboundMessage.messageId, currentDeliveryStatus);

        collector.collect(inboundMessage);

    }

    @Override
    public void processElement2(MessageAck messageAck, CoProcessFunction<Message, MessageAck, Message>.Context context, Collector<Message> collector) throws Exception {
        DeliveryStatus status = deliveryState.value();
        if (status != null && messageAck.success) {
            status.delivered = true;
            deliveryState.clear();
        } else {
            // Do something with retry logic
        }
    }
}
