package chat

type MessageAck struct {
	MessageId  string `json:"messageId"`
	Delivered  bool   `json:"delivered"`
	SenderId   int64  `json:"senderId"`
	ReceiverId int64  `json:"receiverId"`
	Error      string `json:"error"`
	Timestamp  string `json:"timestamp"`
}
