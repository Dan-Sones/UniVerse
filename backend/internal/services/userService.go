package services

import (
	"backend/internal/dtos"
	appErr "backend/internal/errors"
	"backend/internal/models/users"
	"backend/internal/repositories"
	"backend/internal/utils"
	"context"
	"errors"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/rs/zerolog"
)

type UserService struct {
	repo   repositories.UserRepository
	ctx    context.Context
	logger *zerolog.Logger
}

func NewUserService(ctx context.Context, db *pgxpool.Pool, logger *zerolog.Logger) *UserService {
	userRepo := repositories.NewUserRepository(db)
	return &UserService{repo: userRepo, ctx: ctx, logger: logger}
}

func (s *UserService) CreateUser(ctx context.Context, request dtos.CreateUserRequest) (*users.User, error) {

	hashedPassword, err := utils.HashPassword(request.Password)
	if err != nil {
		return nil, err
	}

	request.Password = hashedPassword

	createdUser, err := s.repo.CreateUser(ctx, request)

	if errors.Is(err, appErr.ErrConflict) {
		return nil, appErr.ErrConflict // Use standardized error
	}

	if err != nil {
		return nil, err
	}

	return createdUser, nil
}

func (s *UserService) Login(ctx context.Context, request dtos.LoginDTO) (string, error) {
	user, err := s.repo.GetUserByEmail(ctx, request.Email)

	if errors.Is(err, appErr.ErrNotFound) {
		return "", appErr.ErrNotFound
	}

	if err != nil {
		return "", err
	}

	if !utils.ComparePasswords(user.Password, request.Password) {
		return "", appErr.ErrInvalidCredentials
	}

	token, err := utils.GenerateToken(user.ID)
	if err != nil {
		return "", err
	}

	return token, nil
}

func (s *UserService) Me(ctx context.Context, userId int64) (*dtos.Me, error) {

	user, err := s.repo.GetUserByID(ctx, userId)
	if err != nil {
		return nil, err
	}

	return &dtos.Me{
		Username: user.Username,
		Email:    user.Email,
		Id:       user.ID,
	}, nil

}

func (s *UserService) SearchUsers(ctx context.Context, searchString string) ([]*users.SearchUser, error) {

	result, err := s.repo.GetUsersBySearchQuery(ctx, searchString)
	if err != nil {
		s.logger.Error().Err(err).Msg("uh oh")
		return nil, appErr.ErrInternal
	}

	return result, nil
}
