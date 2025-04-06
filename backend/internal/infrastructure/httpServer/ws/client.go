package ws

import (
	"backend/internal/models/chat"
	"encoding/json"
	"github.com/gorilla/websocket"
	"log"
)

type Client struct {
	Conn      *websocket.Conn
	SessionId string
	UserID    int64
	Send      chan []byte
	Hub       *Hub
}

func (c *Client) ReadMessages() {
	defer func() {
		c.Hub.Unregister <- c
		c.Conn.Close()
	}()
	for {
		_, message, err := c.Conn.ReadMessage()
		if err != nil {
			log.Println("Oh poop!:", err)
			break
		}

		var messageStruct chat.InboundMessage
		err = json.Unmarshal(message, &messageStruct)
		if err != nil {
			log.Println("Error marshalling message!")
			break
		}

		log.Println(messageStruct)

		c.Hub.IncomingFromClientDevice <- messageStruct
	}
}

func (c *Client) WriteMessages() {
	defer c.Conn.Close()
	for msg := range c.Send {
		err := c.Conn.WriteMessage(websocket.TextMessage, msg)
		if err != nil {
			log.Println("write:", err)
			break
		}
	}
}
