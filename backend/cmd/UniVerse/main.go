package main

import (
	"backend/internal/infrastructure/db"
	routes2 "backend/internal/infrastructure/httpServer/api/routes"
	"context"
	_ "embed"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
	"github.com/rs/zerolog"
	"log"
	"os"
)

//go:embed users-db-init.sql
var initSQL string

func runInitScript(db *pgxpool.Pool) error {
	ctx := context.Background()
	_, err := db.Exec(ctx, initSQL)
	return err
}

//func loadEnv() {
//	env := os.Getenv("GO_ENV")
//
//	var envFile string
//	switch env {
//	case "dev":
//		envFile = ".env.dev"
//	default:
//		envFile = ".env.prod"
//	}
//
//	if err := godotenv.Load(envFile); err != nil {
//		log.Fatalf("Error loading %s file: %v", envFile, err)
//	}
//}

func main() {

	logger := zerolog.New(os.Stdout)

	_ = godotenv.Load()
	pool, err := db.NewDBPOOL()
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer pool.Close()

	endpoint := os.Getenv("DYNAMO_ENDPOINT")

	if endpoint == "" {
		endpoint = "http://localhost:8000"
	}

	dynamoClient, err := db.NewDynamoDBClient(db.GetLocalConfiguration(endpoint))

	if err != nil {
		log.Fatalf("Failed to connect to DynamoDB: %v", err)
	}

	err = runInitScript(pool)
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}

	router := routes2.NewRouter()
	routing := routes2.NewRoutes(&logger)
	routing.InitializeRoutes(router, pool, dynamoClient)

	err = router.Run(":80")
	if err != nil {
		logger.Fatal().Err(err).Msg("failed to start server")
	}

}
