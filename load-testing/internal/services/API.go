package services

import (
	"fmt"
	"github.com/go-resty/resty/v2"
	"load-testing/internal/models"
	"log"
	"sync"
)

const BASE_URL = "http://localhost:80"

//
//func getTokens(users []models.UserCredentials) []models.UserCredentials {
//
//}

func CreateUsers(credentials []models.UserCredentials) []models.User {
	fmt.Println("REGISTERS users")
	var users []models.User
	var wg sync.WaitGroup
	var mu sync.Mutex

	// Create them their own resty client
	// hit register endpoint

	for _, credentials := range credentials {
		wg.Add(1)

		go func(credentials models.UserCredentials) {
			defer wg.Done()

			fmt.Println("REGISTERING user: " + credentials.EmailAddress)

			user := models.User{
				Credentials: credentials,
				ApiClient:   resty.New(),
			}

			fmt.Printf("Sending credentials: %+v\n", credentials)
			registerResponse, err := user.ApiClient.NewRequest().SetHeader("Content-Type", "application/json").
				SetBody(&credentials).Post(fmt.Sprintf("%s/api/users/signup", BASE_URL))
			if err != nil {
				fmt.Println(err)
				return
			}

			if !registerResponse.IsSuccess() {
				fmt.Println()
				log.Fatal(fmt.Sprintf("failed to create user: %s", credentials.EmailAddress))
				return
			}

			mu.Lock()
			users = append(users, user)
			mu.Unlock()
		}(credentials)

	}

	wg.Wait()
	return users
}
