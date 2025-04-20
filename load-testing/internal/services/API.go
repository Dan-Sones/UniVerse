package services

import (
	"fmt"
	"github.com/go-resty/resty/v2"
	"load-testing/internal/models"
	"log"
	"sync"
)

const BASE_URL = "localhost:80"
const MAX_CONCURRENT_REQUESTS = 10

//
//func getTokens(users []models.UserCredentials) []models.UserCredentials {
//
//}

func CreateUsers(credentials []models.UserCredentials) []*models.User {
	fmt.Println("---- Registering Users ----")
	var users []*models.User
	var wg sync.WaitGroup
	var mu sync.Mutex

	semaphore := make(chan struct{}, MAX_CONCURRENT_REQUESTS)

	for _, credentials := range credentials {
		semaphore <- struct{}{}
		wg.Add(1)

		go func(credentials models.UserCredentials) {
			defer wg.Done()
			defer func() { <-semaphore }()

			user := models.User{
				Credentials: credentials,
				ApiClient:   resty.New(),
			}

			registerResponse, err := user.ApiClient.NewRequest().SetHeader("Content-Type", "application/json").
				SetBody(&credentials).Post(fmt.Sprintf("http://%s/api/users/signup", BASE_URL))
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
			users = append(users, &user)
			mu.Unlock()
			fmt.Println("REGISTERED user: " + credentials.EmailAddress)
		}(credentials)

	}

	wg.Wait()
	return users
}

func LoginAndRetrieveToken(users []*models.User) {
	fmt.Println("---- RETRIEVING TOKENS ----")
	var wg sync.WaitGroup

	for _, user := range users {
		wg.Add(1)

		go func(user *models.User) {
			defer wg.Done()
			login(user)
			validateAccess(user)
		}(user)
	}

	wg.Wait()
}

func login(user *models.User) {

	LoginBody := struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}{
		Email:    user.Credentials.EmailAddress,
		Password: user.Credentials.Password,
	}

	loginResponse, err := user.ApiClient.NewRequest().
		SetHeader("Content-Type", "application/json").
		SetBody(&LoginBody).Post(fmt.Sprintf("http://%s/api/users/login", BASE_URL))

	if err != nil {
		fmt.Printf("Error logging in user %s: %v\n", user.Credentials.EmailAddress, err)
		return
	}

	if !loginResponse.IsSuccess() {
		fmt.Printf("Login failed for user %s: %s\n", user.Credentials.EmailAddress, loginResponse.String())
		return
	}

	// Store the cookie so we can do requests later
	cookie := loginResponse.Header().Get("Set-Cookie")
	user.Token = cookie
	user.ApiClient.SetHeader("Cookie", user.Token)

	fmt.Println("LOGGED IN user " + user.Credentials.Username)

}

func validateAccess(user *models.User) {

	meResponseBody := struct {
		Username string `json:"username"`
		Email    string `json:"email"`
		Id       int64  `json:"id"`
	}{}

	meResponse, err := user.ApiClient.NewRequest().
		SetResult(&meResponseBody).
		Get(fmt.Sprintf("http://%s/api/users/me", BASE_URL))

	if err != nil {
		fmt.Printf("Error validating token for user %s: %v\n", user.Credentials.EmailAddress, err)
		return
	}

	if !meResponse.IsSuccess() {
		fmt.Printf("Unable to validate token for user %s: %s\n", user.Credentials.EmailAddress, meResponse.String())
		return
	}

	user.UserID = meResponseBody.Id

	fmt.Printf("VALID token for user : %s\n", user.Credentials.Username)
}
