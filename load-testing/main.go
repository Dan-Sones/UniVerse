package main

import (
	"fmt"
	"load-testing/internal/services"
)

//TIP To run your code, right-click the code and select <b>Run</b>. Alternatively, click
// the <icon src="AllIcons.Actions.Execute"/> icon in the gutter and select the <b>Run</b> menu item from here.

func main() {
	// Prompt the user for the number of users to creqte - x (MUST BE EVEN)
	// Generate x sets of credentials
	// Login with each pair of credentials - taking note of set cookie header
	// hit /me endpoint to get user id
	// push userID into list
	// randomly allocate users 1:1
	// Store in some struct
	// Send message from user A to user B
	// Take note of sent time and compare to delivery time
	// Push result to channel
	// Calculate average delivery time and other fancy stats
	var desiredNumberOfUsers int

	fmt.Println(`
▗▖ ▗▖▗▖  ▗▖▗▄▄▄▖▗▖  ▗▖▗▄▄▄▖▗▄▄▖  ▗▄▄▖▗▄▄▄▖    ▗▖    ▗▄▖  ▗▄▖ ▗▄▄▄     ▗▄▄▄▖▗▄▄▄▖ ▗▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▖ 
▐▌ ▐▌▐▛▚▖▐▌  █  ▐▌  ▐▌▐▌   ▐▌ ▐▌▐▌   ▐▌       ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █      █  ▐▌   ▐▌     █  ▐▌   ▐▌ ▐▌
▐▌ ▐▌▐▌ ▝▜▌  █  ▐▌  ▐▌▐▛▀▀▘▐▛▀▚▖ ▝▀▚▖▐▛▀▀▘    ▐▌   ▐▌ ▐▌▐▛▀▜▌▐▌  █      █  ▐▛▀▀▘ ▝▀▚▖  █  ▐▛▀▀▘▐▛▀▚▖
▝▚▄▞▘▐▌  ▐▌▗▄█▄▖ ▝▚▞▘ ▐▙▄▄▖▐▌ ▐▌▗▄▄▞▘▐▙▄▄▖    ▐▙▄▄▖▝▚▄▞▘▐▌ ▐▌▐▙▄▄▀      █  ▐▙▄▄▖▗▄▄▞▘  █  ▐▙▄▄▖▐▌ ▐▌
`)

	for {
		fmt.Println("")
		fmt.Println("Please input your desired number of connections (even amounts only)")
		_, err := fmt.Scan(&desiredNumberOfUsers)
		if err != nil {
			return
		}

		if desiredNumberOfUsers%2 == 0 {
			break
		}

		fmt.Println("EVEN numbers only")
	}

	randomUsers := services.GenerateRandomUsers(desiredNumberOfUsers)
	users := services.CreateUsers(randomUsers)
	services.LoginAndRetrieveToken(users)

	conversations := services.AllocateConversations(users)
	services.PerformTests(conversations)

}
