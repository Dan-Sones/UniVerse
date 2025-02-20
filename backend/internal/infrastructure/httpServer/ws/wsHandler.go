package ws

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func ServeWS(hub *Hub, c *gin.Context) {
	// Upgrade the Connection to a WS connection that is maintained
	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		log.Println(err)
		return
	}

	context := c.Request.Context()

	userID := context.Value("user_id")

	// Create a client and store it in the 'hub'
	client := &Client{
		UserID: fmt.Sprintf("%d", userID),
		Conn:   conn,
		Send:   make(chan []byte, 256),
		Hub:    hub,
	}

	hub.Register <- client

	go client.ReadMessages()
	go client.WriteMessages()
}
