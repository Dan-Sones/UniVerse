package ws

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{
	EnableCompression: true,
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
	hub.logger.Info().Msg(fmt.Sprintf("websocket upgrade connected to %s", c.Request.RemoteAddr))

	context := c.Request.Context()

	userID := context.Value("user_id").(int64)

	// Create a client and store it in the 'hub'
	client := &Client{
		UserID: userID,
		Conn:   conn,
		Send:   make(chan []byte, 1024),
		Hub:    hub,
	}

	hub.Register <- client

	go client.ReadMessages()
	go client.WriteMessages()
}
