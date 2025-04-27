package models

type Message struct {
	ConversationId string `json:"conversationId"`
	Timestamp      string `json:"timestamp"`
	MessageId      string `json:"messageId"`
	SenderId       int64  `json:"senderId"`
	ReceiverId     int64  `json:"receiverId"`
	Content        string `json:"content"`
}

type InboundMessage struct {
	Type    string `json:"type"`
	From    int64  `json:"from"`
	To      int64  `json:"to"`
	Content string `json:"content"`
}
