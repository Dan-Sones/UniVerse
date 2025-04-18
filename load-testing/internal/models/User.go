package models

import "github.com/go-resty/resty/v2"

type User struct {
	Credentials UserCredentials
	ApiClient   *resty.Client
	Token       string
	// Eventually store WS connection in here?
}
