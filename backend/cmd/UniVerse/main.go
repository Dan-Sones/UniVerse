package main

import (
	"backend/internal/infrastructure/dynamo"
	routes2 "backend/internal/infrastructure/httpServer/api/routes"
	"backend/internal/infrastructure/postgres"
	"backend/internal/infrastructure/redis"
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

func loadEnv() {
	if err := godotenv.Load(".env.dev"); err != nil {
		log.Fatalf("Error loading %s file: %v", ".env.dev", err)
	}
}

func main() {

	if os.Getenv("GO_ENV") != "production" {
		loadEnv()
	}

	logger := zerolog.New(os.Stdout)

	pg := postgres.Postgres{
		Logger: &logger,
	}

	err := pg.NewDBPOOL()
	if err != nil {
		logger.Fatal().Err(err).Msg("failed to connect to postgres")
	} else {
		logger.Info().Msg("connected to users postgres database")
	}
	defer pg.Pool.Close()

	endpoint := os.Getenv("DYNAMO_ENDPOINT")

	if endpoint == "" {
		endpoint = "http://localhost:8000"
	}

	var dynamoOptions dynamo.ClientOptions
	if os.Getenv("GO_ENV") == "production" {
		dynamoOptions = dynamo.GetProdConfigutration()
	} else {
		dynamoOptions = dynamo.GetLocalConfiguration(endpoint)
	}

	dyn := &dynamo.Dynamo{
		Logger: &logger,
	}

	err = dyn.NewDynamoDBClient(dynamoOptions)
	if err != nil {
		logger.Fatal().Err(err).Msg("failed to connect to dynamo")
	} else {
		logger.Info().Msg("connected to DynamoDB")
	}

	red := &redis.Redis{
		Logger: &logger,
	}

	if err = red.Connect("localhost:6379"); err != nil {
		logger.Fatal().Err(err).Msg("failed to connect to Redis")
	}
	defer red.Close()

	err = runInitScript(pg.Pool)
	if err != nil {
		logger.Fatal().Err(err).Msg("Failed to run init script on postgres database")
	}

	router := routes2.NewRouter()
	routing := routes2.NewRoutes(&logger)
	routing.InitializeRoutes(router, pg.Pool, dyn.Client)

	err = router.Run(":80")
	if err != nil {
		logger.Fatal().Err(err).Msg("failed to start server")
	}

}
