package com.universe.flink.inbound.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Session {
    @JsonProperty("sessionId")
    private String sessionId;

    @JsonProperty("userId")
    private Long userId;

    @JsonProperty("sessionEvent")
    private SessionEvent sessionEvent;

    public String getSessionId() {
        return sessionId;
    }

    public Long getUserId() {
        return userId;
    }

    public SessionEvent getSessionEvent() {
        return sessionEvent;
    }
}