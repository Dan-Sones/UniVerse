package services

import (
	"github.com/gorilla/websocket"
	"load-testing/internal/models"
	"log"
	"net/http"
	"net/url"
	"time"
)

func CreateWsConnectionsForConversations(conversations []*models.Conversation, totalDuration time.Duration) {
	totalConnections := len(conversations) * 2
	delay := totalDuration / time.Duration(totalConnections)

	ticker := time.NewTicker(delay)
	defer ticker.Stop()

	for _, conv := range conversations {
		<-ticker.C
		go createWSConnectionsForConversation(conv)
	}
}

func createWSConnectionsForConversation(conv *models.Conversation) {
	conv.Sender.WsConnection = createWS(conv.Sender.Token)
	conv.Receiver.WsConnection = createWS(conv.Receiver.Token)
}

func createWS(token string) *websocket.Conn {
	u := url.URL{Scheme: "ws", Host: BASE_URL, Path: "/ws"}
	headers := http.Header{}
	headers.Set("Cookie", token) // Example header

	connection, _, err := websocket.DefaultDialer.Dial(u.String(), headers)
	if err != nil {
		log.Fatal("Failed to create WS Client:", err)
	}

	return connection
}
