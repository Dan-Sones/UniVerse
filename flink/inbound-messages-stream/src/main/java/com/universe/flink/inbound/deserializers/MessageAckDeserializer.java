package com.universe.flink.inbound.deserializers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.universe.flink.inbound.models.MessageAck;
import org.apache.flink.api.common.serialization.DeserializationSchema;
import org.apache.flink.api.common.typeinfo.TypeInformation;


public class MessageAckDeserializer implements DeserializationSchema<MessageAck> {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public MessageAck deserialize(byte[] bytes)  {
        String json = new String(bytes);
        try {
            return objectMapper.readValue(json, MessageAck.class);
        } catch (Exception e) {
            System.err.println("[Deserializer] Failed to parse: " + json);
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean isEndOfStream(MessageAck nextElement) {
        return false;
    }

    @Override
    public TypeInformation<MessageAck> getProducedType() {
        return TypeInformation.of(MessageAck.class);
    }


}
