package chat

type MessageType string
type MessageStatus string

const (
	TypeText         MessageType   = "TEXT"
	StatusPreEmptive MessageStatus = "PREEMPTIVE"
	StatusDelivered  MessageStatus = "DELIVERED"
	StatusSent       MessageStatus = "SENT"
	StatusRead       MessageStatus = "READ"
	StatusFailed     MessageStatus = "FAILED"
)

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

type InboundMessage struct {
	Type    string `json:"type"`
	From    int64  `json:"from"`
	To      int64  `json:"to"`
	Content string `json:"content"`
}
