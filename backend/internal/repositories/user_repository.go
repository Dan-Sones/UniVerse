package repositories

import (
	"backend/internal/dtos"
	appErr "backend/internal/errors"
	"backend/internal/models/users"
	"context"
	"errors"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/jackc/pgx/v5/pgxpool"
)

type UserRepository interface {
	CreateUser(ctx context.Context, request dtos.CreateUserRequest) (*users.User, error)
}

type UserRepositoryPGImpl struct {
	db *pgxpool.Pool
}

func NewUserRepository(db *pgxpool.Pool) UserRepository {
	return &UserRepositoryPGImpl{db: db}
}

func (r *UserRepositoryPGImpl) CreateUser(ctx context.Context, request dtos.CreateUserRequest) (*users.User, error) {
	user := users.User{
		Username: "",
		Email:    "",
		Password: "",
	}

	query := `INSERT INTO auth.users (username, email, password) VALUES ($1, $2, $3) RETURNING id`
	err := r.db.QueryRow(ctx, query, request.Username, request.Email, request.Password).Scan(&user.ID)

	var pgErr *pgconn.PgError
	if errors.As(err, &pgErr) && pgErr.Code == "23505" {
		return nil, appErr.ErrConflict
	}

	if err != nil {
		return nil, err
	}

	return &user, nil
}
