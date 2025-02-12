package main

import (
	"backend/internal/infrastructure/db"
	routes2 "backend/internal/infrastructure/httpServer/api/routes"
	"context"
	"fmt"
	"github.com/joho/godotenv"
	"github.com/rs/zerolog"
	"log"
	"os"
)

func loadEnv() {
	env := os.Getenv("GO_ENV")

	var envFile string
	switch env {
	case "production":
		envFile = ".env.prod"
	default:
		envFile = ".env.dev"
	}

	if err := godotenv.Load(envFile); err != nil {
		log.Fatalf("Error loading %s file: %v", envFile, err)
	}

	fmt.Println("✅ Loaded environment:", envFile)
	fmt.Println("DB_HOST:", os.Getenv("DB_HOST"))
	fmt.Println("DB_USER:", os.Getenv("DB_USER"))
	fmt.Println("DB_NAME:", os.Getenv("DB_NAME"))
}

func main() {
	ctx := context.Background()

	loadEnv()

	logger := zerolog.New(os.Stdout)

	_ = godotenv.Load()
	pool, err := db.NewDBPOOL()
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer pool.Close()

	router := routes2.NewRouter()
	routing := routes2.NewRoutes(&logger)
	routing.InitializeRoutes(ctx, router, pool)

	err = router.Run(":8080")
	if err != nil {
		logger.Fatal().Err(err).Msg("failed to start server")
	}

}
