package com.universe.flink.inbound.processors;

import com.universe.flink.inbound.models.DeliveryStatus;
import com.universe.flink.inbound.models.Message;
import com.universe.flink.inbound.models.MessageAck;
import com.universe.flink.inbound.models.MessageStatus;
import org.apache.flink.api.common.state.ValueState;
import org.apache.flink.api.common.state.ValueStateDescriptor;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.streaming.api.functions.co.CoProcessFunction;
import org.apache.flink.util.Collector;

import java.time.Instant;

public class DeliveryAndAckProcessor extends CoProcessFunction<Message, MessageAck, Message> {
    private transient ValueState<DeliveryStatus> deliveryState;
    private transient ValueState<Message> messageState;
    private transient ValueState<Long> backOffTimeState;

    @Override
    public void open(Configuration parameters) {
        ValueStateDescriptor<DeliveryStatus> descriptor = new ValueStateDescriptor<>("deliveryStatus", DeliveryStatus.class);
        deliveryState = getRuntimeContext().getState(descriptor);

        ValueStateDescriptor<Message> messageDescriptor = new ValueStateDescriptor<>("message", Message.class);
        messageState = getRuntimeContext().getState(messageDescriptor);

        ValueStateDescriptor<Long> backOffDescriptor = new ValueStateDescriptor<>("backOffTime", Long.class);
        backOffTimeState = getRuntimeContext().getState(backOffDescriptor);
    }


    @Override
    public void processElement1(Message inboundMessage, CoProcessFunction<Message, MessageAck, Message>.Context context, Collector<Message> collector) throws Exception {
        DeliveryStatus currentDeliveryStatus = deliveryState.value();
        if (currentDeliveryStatus == null) {
            currentDeliveryStatus = new DeliveryStatus();
        }

        // We need to store the message in state so we can use it for retry attempts later
        Message CurrentMessage = messageState.value();
        if (CurrentMessage == null) {
            CurrentMessage = inboundMessage;
            messageState.update(CurrentMessage);
        }

        currentDeliveryStatus.deliveryAttempts += 1;
        currentDeliveryStatus.lastDeliveryAttemptTime = Instant.now();

        deliveryState.update(currentDeliveryStatus);


        System.out.printf("[State] MessageID=%s => %s%n", inboundMessage.getMessageId(), currentDeliveryStatus);
        // collecting with PREMPTIVE Status - will send to ws but NOT write to db
        collector.collect(inboundMessage);
    }

    @Override
    public void processElement2(MessageAck messageAck, CoProcessFunction<Message, MessageAck, Message>.Context context, Collector<Message> collector) throws Exception {
        DeliveryStatus status = deliveryState.value();
        Long backOffDelay = backOffTimeState.value();

        if (status == null) {
            status = new DeliveryStatus();
        }

        if (backOffDelay == null) {
            backOffDelay = 1000L;
        }

        if (messageAck.isDelivered()) {
            System.out.println("[State] MessageID=" + messageAck.getMessageId() + " delivered!");

            Message currentMessage = messageState.value();
            if (currentMessage != null) {
                currentMessage.setStatus(MessageStatus.DELIVERED);
                // collecting with DELIEVERED status = will send to db
                collector.collect(currentMessage);
            }

            // Clear all state after collection
            status.delivered = true;
            deliveryState.update(status);  // Update status before clearing

            // Clear all states at once
            deliveryState.clear();
            backOffTimeState.clear();
            messageState.clear();
        } else {
            System.out.println("[State] MessageID=" + messageAck.getMessageId() + " ERROR: " + messageAck.getError());
            backOffDelay = Math.min(backOffDelay * 2, 60000L);
            backOffTimeState.update(backOffDelay);
            deliveryState.update(status);  // Update status before registering timer
            context.timerService().registerProcessingTimeTimer(context.timerService().currentProcessingTime() + backOffDelay);
        }
    }

    @Override
    public void onTimer(long timestamp, CoProcessFunction<Message, MessageAck, Message>.OnTimerContext ctx, Collector<Message> out) throws Exception {
        DeliveryStatus status = deliveryState.value();
        Message CurrentMessage = messageState.value();
        if (status != null && !status.delivered) {

            if (status.deliveryAttempts > 10) {
                // If we tried to deliver 10 times and failed, stop trying
                // it will be stored in the db anyway
                System.out.println("[State] MessageID=" + CurrentMessage.getMessageId() + " ERROR: Max delivery attempts reached.");
                CurrentMessage.setStatus(MessageStatus.FAILED);

                messageState.update(CurrentMessage);

                out.collect(messageState.value());

                deliveryState.clear();
                messageState.clear();
                return;
            }

            System.out.printf("[State] Resending MessageID=%s => %s%n", CurrentMessage.getMessageId(), status);
            status.deliveryAttempts += 1;
            status.lastDeliveryAttemptTime = Instant.now();
            out.collect(CurrentMessage);
        }
    }
}
