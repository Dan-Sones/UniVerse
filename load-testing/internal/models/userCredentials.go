package models

type UserCredentials struct {
	Username        string `json:"username"`
	EmailAddress    string `json:"email"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirmPassword"`
}
