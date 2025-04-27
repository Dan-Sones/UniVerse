package internal

import (
	"load-testing/internal/models"
	"math/rand"
	"time"
)

func SplitUsers1To1(users []*models.User) ([]*models.User, []*models.User) {
	rand.Seed(time.Now().Unix())

	rand.Shuffle(len(users), func(i, j int) {
		users[i], users[j] = users[j], users[i]
	})

	mid := len(users) / 2

	return users[:mid], users[mid:]
}
