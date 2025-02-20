package users

type SearchUser struct {
	ID                int64  `json:"id"`
	Username          string `json:"username"`
	ProfilePictureUrl string `json:"profilePictureUrl"`
}
