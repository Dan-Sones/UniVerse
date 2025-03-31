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
    private transient ValueState<Message> messageState;
    private  transient ValueState<Long> backOffTimeState;

    @Override
    public void open(Configuration parameters)  {
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

        System.out.printf("[State] MessageID=%s => %s%n", inboundMessage.messageId, currentDeliveryStatus);

        collector.collect(inboundMessage);

    }

    @Override
    public void processElement2(MessageAck messageAck, CoProcessFunction<Message, MessageAck, Message>.Context context, Collector<Message> collector) throws Exception {    DeliveryStatus status = deliveryState.value();
        Long backOffDelay = backOffTimeState.value();

        if (status == null) {
            status = new DeliveryStatus();
        }

        if (backOffDelay == null) {
            backOffDelay = 1000L;
        }

        if (messageAck.delivered) {
            status.delivered = true;
            System.out.println("[State] MessageID=" + messageAck.messageId + " delivered!");
            deliveryState.clear();
            backOffTimeState.clear();
        } else {
            System.out.println("[State] MessageID=" + messageAck.messageId + " ERROR: " + messageAck.error);
            backOffDelay = Math.min(backOffDelay * 2, 60000L);
            backOffTimeState.update(backOffDelay);
            context.timerService().registerProcessingTimeTimer(context.timerService().currentProcessingTime() + backOffDelay);
        }

        deliveryState.update(status);
    }

    @Override
    public void onTimer(long timestamp, CoProcessFunction<Message, MessageAck, Message>.OnTimerContext ctx, Collector<Message> out) throws Exception {
        DeliveryStatus status = deliveryState.value();
        Message CurrentMessage = messageState.value();
        if (status != null && !status.delivered) {

            if(status.deliveryAttempts > 10) {
                // If we tried to deliver 10 times and failed, stop trying
                // it will be stored in the db anyway
                System.out.println("[State] MessageID=" + CurrentMessage.messageId + " ERROR: Max delivery attempts reached.");
                deliveryState.clear();
                messageState.clear();
                return;
            }

            System.out.printf("[State] Resending MessageID=%s => %s%n", CurrentMessage.messageId, status);
            status.deliveryAttempts += 1;
            status.lastDeliveryAttemptTime = Instant.now();
            out.collect(CurrentMessage);
        }
    }
}
