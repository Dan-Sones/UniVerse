package models

import (
	"github.com/go-resty/resty/v2"
	"github.com/gorilla/websocket"
)

type User struct {
	Credentials  UserCredentials
	ApiClient    *resty.Client
	Token        string
	WsConnection *websocket.Conn
	UserID       int64
	// Eventually store WS connection in here?
}
