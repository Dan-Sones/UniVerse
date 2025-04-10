package com.universe.flink.inbound.deserializers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.universe.flink.inbound.models.Session;
import org.apache.flink.api.common.serialization.DeserializationSchema;
import org.apache.flink.api.common.typeinfo.TypeInformation;

import java.io.IOException;

public class SessionDeserializer implements DeserializationSchema<Session> {
    private static final ObjectMapper mapper = new ObjectMapper();

    @Override
    public Session deserialize(byte[] bytes) throws IOException {
        String json = new String(bytes);
        try {
            return mapper.readValue(json, Session.class);
        } catch (Exception e) {
            System.out.println("[DeserializationSchema] Error while deserializing session]");
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean isEndOfStream(Session session) {
        return false;
    }


    @Override
    public TypeInformation<Session> getProducedType() {
        return TypeInformation.of(Session.class);
    }
}
