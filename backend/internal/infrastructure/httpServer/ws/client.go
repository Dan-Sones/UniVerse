package ws

import (
	"encoding/json"
	"github.com/gorilla/websocket"
	"log"
)

type InboundMessage struct {
	Type    string `json:"type"`
	From    int64  `json:"from"`
	To      int64  `json:"to"`
	Content string `json:"content"`
}

type Client struct {
	Conn   *websocket.Conn
	UserID int64
	Send   chan []byte
	Hub    *Hub
}

func (c *Client) ReadMessages() {
	defer func() {
		c.Hub.Unregister <- c
		c.Conn.Close()
	}()
	for {
		_, message, err := c.Conn.ReadMessage()
		if err != nil {
			//TODO: Handle error
			break
		}

		var messageStruct InboundMessage
		err = json.Unmarshal(message, &messageStruct)
		if err != nil {
			log.Println("Error marshalling message!")
			break
		}

		c.Hub.Broadcast <- messageStruct
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
