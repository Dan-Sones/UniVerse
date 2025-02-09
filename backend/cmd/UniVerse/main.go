package main

import (
	"backend/internal/models/infrastructure/httpServer/api/routes"
	"github.com/rs/zerolog"
	"os"
)

func main() {

	logger := zerolog.New(os.Stdout)

	router := routes.NewRouter()
	routing := routes.NewRoutes(&logger)
	routing.InitializeRoutes(router)

	err := router.Run(":8080")
	if err != nil {
		logger.Fatal().Err(err).Msg("failed to start server")
	}

}
