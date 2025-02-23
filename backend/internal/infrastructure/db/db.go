package db

import (
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/jackc/pgx/v5/pgxpool"
	"log"
	"os"
)

func NewDBPOOL() (*pgxpool.Pool, error) {
	host := os.Getenv("POSTGRES_HOST")
	port := os.Getenv("POSTGRES_PORT")
	user := os.Getenv("POSTGRES_USER")
	password := os.Getenv("POSTGRES_PASSWORD")
	dbName := os.Getenv("POSTGRES_DB")

	if host == "" || user == "" || password == "" || dbName == "" || port == "" {
		log.Fatal("Missing required database environment variables")
	}

	fmt.Println(host, port, user, password, dbName)

	dsn := fmt.Sprintf("postgres://%s:%s@%s:%s/%s",
		user, password, host, port, dbName)

	config, err := pgxpool.ParseConfig(dsn)
	if err != nil {
		return nil, fmt.Errorf("failed to parse database config: %w", err)
	}

	pool, err := pgxpool.NewWithConfig(context.Background(), config)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to database and create connection pool: %w", err)
	}

	return pool, nil
}

type clientOptions func(*dynamodb.Options)

func GetLocalConfiguration(endpoint string) clientOptions {
	return func(options *dynamodb.Options) {
		options.Region = "us-west-2"
		options.Credentials = credentials.NewStaticCredentialsProvider("local", "local", "local")
		options.BaseEndpoint = aws.String(endpoint)
	}
}

func NewDynamoDBClient(opts ...clientOptions) (*dynamodb.Client, error) {

	// Load the Shared AWS Configuration (~/.aws/config)
	cfg, err := config.LoadDefaultConfig(context.Background())
	if err != nil {
		return nil, fmt.Errorf("failed to create aws config: %w", err)
	}

	client := dynamodb.NewFromConfig(cfg, func(options *dynamodb.Options) {
		// Apply supplied options
		for _, fn := range opts {
			fn(options)
		}
	})

	return client, nil
}
