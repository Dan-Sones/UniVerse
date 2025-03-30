package utils

import (
	"fmt"
	"github.com/oklog/ulid/v2"
	"math/rand"
	"time"
)

func GenerateMessageID(timestamp time.Time) string {
	entropy := rand.New(rand.NewSource(timestamp.UnixNano()))
	return ulid.MustNew(ulid.Timestamp(timestamp), entropy).String()
}

func GenerateConversationID(from, to int64) string {
	if from < to {
		return fmt.Sprintf("%d#%d", from, to)
	}
	return fmt.Sprintf("%d#%d", to, from)
}
