package repositories

import (
	"backend/internal/dtos"
	"backend/internal/models/users"
	"context"
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
	if err != nil {
		return nil, err
	}

	return &user, nil
}
