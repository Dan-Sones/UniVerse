package services

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/websocket"
	"load-testing/internal/models"
	"log"
	"sync"
	"time"
)

const (
	MESSAGES_PER_CONVERSATION = 200
)

func PerformTests(conversations []*models.Conversation) {
	fmt.Println("---- Performing Tests ----")

	var wg sync.WaitGroup
	latencyReports := make(chan int64, len(conversations)*MESSAGES_PER_CONVERSATION)
	delay := time.Duration(10 * time.Second / time.Duration(len(conversations)*MESSAGES_PER_CONVERSATION))
	for _, conv := range conversations {
		wg.Add(1)
		go func(conv *models.Conversation, latencyReports chan int64) {
			defer wg.Done()
			for i := 0; i < MESSAGES_PER_CONVERSATION; i++ {
				PerformTestForConversation(conv, latencyReports)
			}
		}(conv, latencyReports)
		time.Sleep(delay)
	}

	wg.Wait()
	close(latencyReports)
	fmt.Println("---- Finished Tests ----")

	unsuccessfulTests := 0
	totalLatency := int64(0)
	latencyCount := 0
	shortestLatency := int64(0)
	longestLatency := int64(0)

	for latency := range latencyReports {
		if latency == -1 {
			unsuccessfulTests++
		} else {
			if shortestLatency == 0 || latency < shortestLatency {
				shortestLatency = latency
			}
			if latency > longestLatency {
				longestLatency = latency
			}
			totalLatency += latency
			latencyCount++
		}
	}

	averageLatency := totalLatency / int64(latencyCount)

	fmt.Println("---- Test Results ----")
	fmt.Printf("Total Messages sent across 5 Second Period: %d\n", len(conversations)*MESSAGES_PER_CONVERSATION)
	fmt.Printf("Total Connections: %d\n", len(conversations)*2)
	fmt.Printf("Average Latency: %d ms\n", averageLatency)
	fmt.Printf("Shortest Latency: %d ms\n", shortestLatency)
	fmt.Printf("Longest Latency: %d ms\n", longestLatency)
	fmt.Printf("Unsuccessful Tests (No Delivery): %d\n", unsuccessfulTests)
}

func PerformTestForConversation(conversation *models.Conversation, latencyReports chan int64) {
	messageToSend := models.InboundMessage{
		Type:    "chat",
		From:    conversation.Sender.UserID,
		To:      conversation.Receiver.UserID,
		Content: "Hello", // TODO MAKE BODY RANDOM?
	}

	messagetoSendJson, err := json.Marshal(messageToSend)
	if err != nil {
		log.Println("Error marshalling message:", err)
		latencyReports <- -1
		return
	}

	var timeSent, timeDelivered int64
	var mu sync.Mutex
	done := make(chan struct{})

	go func() {
		defer close(done) // Ensure the channel is closed
		for {
			_, _, err := conversation.Receiver.WsConnection.ReadMessage()
			if err != nil {
				log.Println("read:", err)
				return
			}
			mu.Lock()
			timeDelivered = time.Now().UnixMilli()
			mu.Unlock()
			return
		}
	}()

	mu.Lock()
	timeSent = time.Now().UnixMilli()
	mu.Unlock()
	err = conversation.Sender.WsConnection.WriteMessage(websocket.TextMessage, messagetoSendJson)
	if err != nil {
		log.Println("write:", err)
		latencyReports <- -1
		return
	}

	select {
	case <-done:
		mu.Lock()
		latency := timeDelivered - timeSent
		mu.Unlock()
		latencyReports <- latency
	case <-time.After(5 * time.Second):
		latencyReports <- -1
	}
}
