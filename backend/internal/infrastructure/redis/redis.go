package redis

import (
	"context"
	"fmt"
	"github.com/redis/go-redis/v9"
	"github.com/rs/zerolog"
	"os"
)

type Redis struct {
	Logger *zerolog.Logger
	Client *redis.Client
}

func (r *Redis) Connect(url string) error {

	password := os.Getenv("REDIS_PASSWORD")
	if password == "" {
		r.Logger.Fatal().Msg("REDIS_PASSWORD is not set")
		return fmt.Errorf("REDIS_PASSWORD is not set")
	}

	r.Client = redis.NewClient(&redis.Options{
		Addr:     url,
		Password: password,
		DB:       0,
	})

	if err := r.Client.Ping(context.Background()).Err(); err != nil {
		r.Logger.Fatal().Err(err).Msg("failed to connect to redis")
	}

	r.Logger.Info().Str("url", url).Msg("connected to redis")
	return nil
}

func (r *Redis) Close() {
	if r.Client != nil {
		if err := r.Client.Close(); err != nil {
			r.Logger.Error().Err(err).Msg("failed to close redis")
		} else {
			r.Logger.Info().Msg("closed redis")
		}
	}
}
