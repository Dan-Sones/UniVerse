package services

import (
	"backend/internal/dtos"
	"backend/internal/models/users"
	"backend/internal/repositories"
	"context"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/rs/zerolog"
	"golang.org/x/crypto/bcrypt"
)

type UserService struct {
	repo   repositories.UserRepository
	ctx    context.Context
	logger *zerolog.Logger
}

func NewUserService(ctx context.Context, db *pgxpool.Pool) *UserService {
	userRepo := repositories.NewUserRepository(db)
	return &UserService{repo: userRepo, ctx: ctx}
}

func (s *UserService) CreateUser(ctx context.Context, request dtos.CreateUserRequest) (*users.User, error) {

	bytes, err := bcrypt.GenerateFromPassword([]byte(request.Password), 14)
	if err != nil {
		return nil, err
	}

	request.Password = string(bytes)

	return s.repo.CreateUser(ctx, request)
}
