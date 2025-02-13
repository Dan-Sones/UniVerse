package dtos

type Me struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Id       int64  `json:"id"`
	// ADD PFP here
}
