package com.universe.flink.inbound.deserializers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.universe.flink.inbound.models.Message;
import org.apache.flink.api.common.serialization.DeserializationSchema;
import org.apache.flink.api.common.typeinfo.TypeInformation;

public class InboundMessageDeserializer implements DeserializationSchema<Message> {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public Message deserialize(byte[] bytes)  {
            String json = new String(bytes);
            try {
                return objectMapper.readValue(json, Message.class);
            } catch (Exception e) {
                System.err.println("[Deserializer] Failed to parse: " + json);
                e.printStackTrace();
                return null;
            }
    }

    @Override
    public boolean isEndOfStream(Message nextElement) {
        return false;
    }

    @Override
    public TypeInformation<Message> getProducedType() {
        return TypeInformation.of(Message.class);
    }


}
