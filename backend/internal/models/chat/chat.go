package chat

import "encoding/json"

type MessageStatus int

const (
	StateDelivered MessageStatus = iota
	StateRead
)

var messageStateMap = map[MessageStatus]string{
	StateRead:      "READ",
	StateDelivered: "DELIVERED",
}

func (ms MessageStatus) String() string {
	return messageStateMap[ms]
}

type MessageType int

const (
	TypeText MessageType = iota
	TypeImage
)

var messageTypeMap = map[MessageType]string{
	TypeText:  "TEXT",
	TypeImage: "IMAGE",
}

func (mt MessageType) String() string {
	return messageTypeMap[mt]
}

func (mt MessageType) MarshalJSON() ([]byte, error) {
	return json.Marshal(mt.String())
}

type Message struct {
	ConversationId string        `json:"conversationId" dynamodbav:"conversationId"`
	Timestamp      string        `json:"timestamp" dynamodbav:"timestamp"`
	MessageId      string        `json:"messageId" dynamodbav:"messageId"`
	SenderId       int64         `json:"senderId" dynamodbav:"senderId"`
	ReceiverId     int64         `json:"receiverId" dynamodbav:"receiverId"`
	Content        string        `json:"content" dynamodbav:"content"`
	MessageType    MessageType   `json:"messageType" dynamodbav:"messageType"`
	Status         MessageStatus `json:"status" dynamodbav:"status"`
}

type OutboundMessage struct {
	MessageId string `json:"messageId"`
	Type      string `json:"type"`
	From      int64  `json:"from"`
	To        int64  `json:"to"`
	Content   string `json:"content"`
	Time      string `json:"time"`
}

type InboundMessage struct {
	Type    string `json:"type"`
	From    int64  `json:"from"`
	To      int64  `json:"to"`
	Content string `json:"content"`
}
