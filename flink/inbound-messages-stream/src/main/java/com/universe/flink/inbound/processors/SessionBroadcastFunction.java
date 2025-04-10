package com.universe.flink.inbound.processors;

import com.universe.flink.inbound.models.Message;
import com.universe.flink.inbound.models.Session;
import com.universe.flink.inbound.models.SessionEvent;
import com.universe.flink.inbound.models.SessionProcessedMessage;
import org.apache.flink.api.common.state.BroadcastState;
import org.apache.flink.api.common.state.MapStateDescriptor;
import org.apache.flink.api.common.typeinfo.Types;
import org.apache.flink.streaming.api.functions.co.BroadcastProcessFunction;
import org.apache.flink.util.Collector;

import java.util.ArrayList;
import java.util.List;

public class SessionBroadcastFunction extends BroadcastProcessFunction<Message, Session, SessionProcessedMessage> {

    private final MapStateDescriptor<Long, List<String>> sessionStateDescriptor = new MapStateDescriptor<>(
            "sessionBroadcastState",
            Types.LONG,
            Types.LIST(Types.STRING)
    );


    @Override
    public void processElement(Message message, BroadcastProcessFunction<Message, Session, SessionProcessedMessage>.ReadOnlyContext readOnlyContext, Collector<SessionProcessedMessage> collector) throws Exception {
        List<String> sessionIds = readOnlyContext.getBroadcastState(sessionStateDescriptor).get(message.getReceiverId());

        System.out.println("Processing new message: " + message);

        if (sessionIds != null && sessionIds.size() >= 1) {
            System.out.println("The recipient is connected in at least one session so send it");
            collector.collect(new SessionProcessedMessage(message, true));
        } else {
            collector.collect(new SessionProcessedMessage(message, false));
            System.out.println("The recipient isn't connected to any session");
        }
    }

    @Override
    public void processBroadcastElement(Session session, BroadcastProcessFunction<Message, Session, SessionProcessedMessage>.Context context, Collector<SessionProcessedMessage> collector) throws Exception {
        BroadcastState<Long, List<String>> state = context.getBroadcastState(sessionStateDescriptor);

        System.out.println("Session Event recieved!: " + session.getSessionEvent().toString());


        if (session.getSessionEvent() == SessionEvent.DEVICE_CONNECTED) {
            System.out.println("[State] SessionID=" + session.getSessionId() + " is connected to the session");
            List<String> sessionIds = state.get(session.getUserId());

            if (sessionIds == null) {
                sessionIds = new ArrayList<>();
            }

            System.out.println("Session IDs: " + sessionIds);

            if (!sessionIds.contains(session.getSessionId())) {
                sessionIds.add(session.getSessionId());
                state.put(session.getUserId(), sessionIds);
            }

        } else if (session.getSessionEvent() == SessionEvent.DEVICE_DISCONNECTED) {
            List<String> sessionIds = state.get(session.getUserId());

            if (sessionIds == null) {
                sessionIds = new ArrayList<>();
            }

            System.out.println("Session Event disconnected: " + session.getSessionId());
            System.out.println(sessionIds);

            if (sessionIds.contains(session.getSessionId())) {
                sessionIds.remove(session.getSessionId());
                state.put(session.getUserId(), sessionIds);
            }

        }
    }
}
