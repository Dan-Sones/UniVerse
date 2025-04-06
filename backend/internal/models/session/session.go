package session

type Event string

const (
	DeviceConnected    Event = "DEVICE_CONNECTED"
	DeviceDisconnected Event = "DEVICE_DISCONNECTED"
)

type Session struct {
	SessionID string `json:"sessionId"`
	UserID    int64  `json:"userId"`
	Event     Event  `json:"sessionEvent"`
}
