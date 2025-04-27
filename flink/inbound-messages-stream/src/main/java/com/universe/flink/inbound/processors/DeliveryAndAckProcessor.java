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

    private static final long INITIAL_BACKOFF_DELAY = 2000L;
    private static final long MAX_BACKOFF_DELAY = 5000L;
    private static final int MAX_DELIVERY_ATTEMPTS = 10;

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
        System.out.printf("[Element1] Received MessageID=%s%n", inboundMessage.getMessageId());
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

        System.out.println("DeliveryState updated in processElement1: " + deliveryState.value());

        //        System.out.printf("[State] MessageID=%s => %s%n", inboundMessage.getMessageId(), currentDeliveryStatus);
        // collecting with PREMPTIVE Status - will send to ws but NOT write to db
        collector.collect(inboundMessage);

        // Start the on timer with a wait so in the event we don't get an acknowledgement through in process 2
        // ... we can assume something went very wrong and we should trigger the retry logic manually

        long timerTimestamp = context.timerService().currentProcessingTime() + INITIAL_BACKOFF_DELAY;
        System.out.printf("[Element1] Timer registered for MessageID=%s at %d%n", inboundMessage.getMessageId(), timerTimestamp);
        context.timerService().registerProcessingTimeTimer(timerTimestamp);

        System.out.printf("[Trace] MessageID=%s state set? deliveryState=%s, messageState=%s%n",
                inboundMessage.getMessageId(),
                deliveryState.value() != null,
                messageState.value() != null
        );

    }

    @Override
    public void processElement2(MessageAck messageAck, CoProcessFunction<Message, MessageAck, Message>.Context context, Collector<Message> collector) throws Exception {
        System.out.printf("[Element2] Received ACK MessageID=%s%n", messageAck.getMessageId());

        DeliveryStatus status = deliveryState.value();
        if (status == null) {
            status = new DeliveryStatus();
        }

        // Update the state to confirm we received an ack - This will then be used in the onTimer
        status.acknowledged = true;
        deliveryState.update(status);

        if (messageAck.isDelivered()) { // It was delievered!! - Do a bunch of clean up to get us out of here

            Message currentMessage = messageState.value();
            if (currentMessage != null) {
                currentMessage.setStatus(MessageStatus.DELIVERED);
                // collecting with DELIEVERED status = will send to db
                collector.collect(currentMessage);
                System.out.printf("[Element2] MessageID=%s marked as DELIVERED and collected%n", currentMessage.getMessageId());
            } else {
                System.out.printf("[Element2] ACK received for MessageID=%s, but messageState was null%n", messageAck.getMessageId());
            }

            // Clear all state after collection
            status.delivered = true;
            deliveryState.update(status);  // Update status before clearing - IDK if this is needed but though it might be good practice

            System.out.printf("[Element2] Clearing state for MessageID=%s%n", messageAck.getMessageId());
            clearAllStates();
        } else {
            System.out.println("[State] MessageID=" + messageAck.getMessageId() + " ERROR: " + messageAck.getError());
            long backOffDelay = calculateBackOffDelay();
            backOffTimeState.update(backOffDelay);
            deliveryState.update(status);
            context.timerService().registerProcessingTimeTimer(context.timerService().currentProcessingTime() + backOffDelay);
        }
    }

    @Override
    public void onTimer(long timestamp, CoProcessFunction<Message, MessageAck, Message>.OnTimerContext ctx, Collector<Message> out) throws Exception {
        System.out.println("[State] Timer called " + Instant.now().toString());
        DeliveryStatus status = deliveryState.value();
        Message currentMessage = messageState.value();

        if (status == null || currentMessage == null) {
            String msgId = (messageState.value() != null) ? messageState.value().getMessageId() : "UNKNOWN";
            System.out.printf("[Timer] Missing state for MessageID=%s%n", msgId);
            return;
        }

        System.out.println("[State] Timer called two");

        // something went wrong, we didn't recieve an acknowledgement to say it failed, we just got nothing
        // This will then make it follow the standard delivery retry logic
        if (!status.acknowledged && !status.failedToBeAcknowledgedWithinAcceptableTime) {
            System.out.println("[NO-ACK] MessageID=" + currentMessage.getMessageId() + " did not receive a message ack, kicking off retry logic manually");
            status.failedToBeAcknowledgedWithinAcceptableTime = true;
            deliveryState.update(status);
            retryDelivery(ctx, out, status, currentMessage);
            return;
        }

        if (status.deliveryAttempts > MAX_DELIVERY_ATTEMPTS) {
            // If we tried to deliver 10 times and failed, stop trying
            // it will be stored in the db anyway
            System.out.println("[State] MessageID=" + currentMessage.getMessageId() + " Max delivery attempts reached: aborting retries and writing to db");
            currentMessage.setStatus(MessageStatus.FAILED);
            out.collect(currentMessage);
            clearAllStates();
        } else { // we can retry again
            retryDelivery(ctx, out, status, currentMessage);
        }
    }

    private void retryDelivery(OnTimerContext ctx, Collector<Message> out, DeliveryStatus status, Message currentMessage) throws Exception {
        status.deliveryAttempts++;
        status.lastDeliveryAttemptTime = Instant.now();
        deliveryState.update(status);

        long backOffDelay = calculateBackOffDelay();
        backOffTimeState.update(backOffDelay);

        ctx.timerService().registerProcessingTimeTimer(ctx.timerService().currentProcessingTime() + backOffDelay);
        System.out.printf("[Retry] Retrying MessageID=%s — attempt #%d with delay=%dms%n",
                currentMessage.getMessageId(), status.deliveryAttempts, backOffDelay);
        

        out.collect(currentMessage);
    }

    private long calculateBackOffDelay() throws Exception {
        long backOffDelay = backOffTimeState.value() != null ? backOffTimeState.value() : INITIAL_BACKOFF_DELAY;
        return Math.min(backOffDelay * 2, MAX_BACKOFF_DELAY);
    }

    private void clearAllStates() throws Exception {
        Message message = messageState.value();
        String msgId = (message != null) ? message.getMessageId() : "UNKNOWN";
        System.out.printf("Clearing all states for %s%n", msgId);

        if (deliveryState != null && deliveryState.value() != null) {
            deliveryState.clear();
        }
        if (messageState != null && messageState.value() != null) {
            messageState.clear();
        }
        if (backOffTimeState != null && backOffTimeState.value() != null) {
            backOffTimeState.clear();
        }
    }
}