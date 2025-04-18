package services

import (
	"fmt"
	"github.com/google/uuid"
	"load-testing/internal/models"
)

func GenerateRandomUsers(numberToCreate int) []models.UserCredentials {
	fmt.Println("GENERATING credentials")
	var randomUsers []models.UserCredentials

	for i := 0; i < numberToCreate; i++ {

		id := uuid.New().String()

		user := models.UserCredentials{
			Username:        "user-" + id,
			EmailAddress:    "user" + id + "@gmail.com",
			Password:        "securePassword" + id,
			ConfirmPassword: "securePassword" + id,
		}
		randomUsers = append(randomUsers, user)
	}

	return randomUsers
}
