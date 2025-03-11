package dynamo

import (
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/rs/zerolog"
)

type Dynamo struct {
	Logger *zerolog.Logger
	Client *dynamodb.Client
}

type ClientOptions func(*dynamodb.Options)

func GetLocalConfiguration(endpoint string) ClientOptions {
	return func(options *dynamodb.Options) {
		options.Region = "us-east-1"
		options.Credentials = credentials.NewStaticCredentialsProvider("local", "local", "local")
		options.BaseEndpoint = aws.String(endpoint)
	}
}

func GetProdConfigutration() ClientOptions {
	return func(options *dynamodb.Options) {}
}

func (d *Dynamo) NewDynamoDBClient(opts ...ClientOptions) error {
	d.Logger.Info().Msg("Connecting To Dynamo!")
	cfg, err := config.LoadDefaultConfig(context.Background())
	if err != nil {
		return fmt.Errorf("failed to create aws config: %w", err)
	}

	d.Client = dynamodb.NewFromConfig(cfg, func(options *dynamodb.Options) {
		for _, fn := range opts {
			fn(options)
		}
	})
	return nil
}
