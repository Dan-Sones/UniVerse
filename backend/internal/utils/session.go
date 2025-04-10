package utils

import uuid "github.com/satori/go.uuid"

func GenerateSessionID() (sessionId string) {
	return uuid.NewV4().String()
}
