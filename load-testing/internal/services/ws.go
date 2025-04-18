package services

import (
	"fmt"
	"github.com/gorilla/websocket"
	"load-testing/internal/models"
	"log"
	"net/http"
	"net/url"
	"sync"
)

func PerformTests(conversations []*models.Conversation) {
	var wg sync.WaitGroup

	semaphore := make(chan struct{}, MAX_CONCURRENT_REQUESTS)

	for _, conv := range conversations {
		semaphore <- struct{}{}
		wg.Add(1)

		go func(conv *models.Conversation) {
			defer wg.Done()
			defer func() { <-semaphore }()

			createWSConnectionsForConversation(conv)

		}(conv)

	}

	wg.Wait()

}

func createWSConnectionsForConversation(conv *models.Conversation) {
	conv.Sender.WsConnection = createWS(conv.Sender.Token)
	conv.Receiver.WsConnection = createWS(conv.Sender.Token)
	fmt.Println("Established WS Connections for conversation ")
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
