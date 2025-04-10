package com.universe.flink.inbound.models;

import java.util.List;

public class SessionState {
    private Long userId;
    private List<String> sessionIds;

    public SessionState() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<String> getSessionIds() {
        return sessionIds;
    }

    public void setSessionIds(List<String> sessionIds) {
        this.sessionIds = sessionIds;
    }
}