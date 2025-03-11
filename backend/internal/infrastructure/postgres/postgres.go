package postgres

import (
	"context"
	"fmt"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/rs/zerolog"
	"os"
)

type Postgres struct {
	Logger *zerolog.Logger
	Pool   *pgxpool.Pool
}

func (p *Postgres) NewDBPOOL() error {
	host := os.Getenv("POSTGRES_HOST")
	port := os.Getenv("POSTGRES_PORT")
	user := os.Getenv("POSTGRES_USER")
	password := os.Getenv("POSTGRES_PASSWORD")
	dbName := os.Getenv("POSTGRES_DB")

	if host == "" || user == "" || password == "" || dbName == "" || port == "" {
		return fmt.Errorf("invalid environment variables")
	}

	p.Logger.Info().Msg("Connecting to PostgreSQL")

	dsn := fmt.Sprintf("postgres://%s:%s@%s/%s",
		user, password, host, dbName)

	config, err := pgxpool.ParseConfig(dsn)
	if err != nil {
		return fmt.Errorf("failed to parse database config: %w", err)
	}

	p.Pool, err = pgxpool.NewWithConfig(context.Background(), config)
	if err != nil {
		return fmt.Errorf("failed to connect to database and create connection pool: %w", err)
	}

	return nil
}
