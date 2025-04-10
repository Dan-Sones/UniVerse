package com.universe.flink.inbound.models;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum MessageError {
    NONE,
    CLIENT_BUFFER_FULL,
    CLIENT_NOT_CONNECTED;

    @JsonCreator
    public static MessageError fromString(String key) {
        if (key == null || key.trim().isEmpty()) {
            return NONE;
        }
        try {
            return MessageError.valueOf(key.toUpperCase());
        } catch (IllegalArgumentException e) {
            return NONE;
        }
    }

}


