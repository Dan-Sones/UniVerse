package infrastructure

import (
	"os"
)

func GetURL() string {
	return os.Getenv("URL")
}
