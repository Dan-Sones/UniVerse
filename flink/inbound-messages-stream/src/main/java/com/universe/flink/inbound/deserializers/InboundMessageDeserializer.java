package com.universe.flink.inbound.deserializers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.universe.flink.inbound.models.InboundMessage;
import org.apache.flink.api.common.serialization.DeserializationSchema;
import org.apache.flink.api.common.typeinfo.TypeInformation;

import java.io.IOException;

public class InboundMessageDeserializer implements DeserializationSchema<InboundMessage> {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public InboundMessage deserialize(byte[] bytes)  {
            String json = new String(bytes);
            try {
                return objectMapper.readValue(json, InboundMessage.class);
            } catch (Exception e) {
                System.err.println("[Deserializer] Failed to parse: " + json);
                e.printStackTrace();
                return null;
            }
    }

    @Override
    public boolean isEndOfStream(InboundMessage nextElement) {
        return false;
    }

    @Override
    public TypeInformation<InboundMessage> getProducedType() {
        return TypeInformation.of(InboundMessage.class);
    }


}
