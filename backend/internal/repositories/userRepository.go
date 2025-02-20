package repositories

import (
	"backend/internal/dtos"
	appErr "backend/internal/errors"
	"backend/internal/models/users"
	"context"
	"database/sql"
	"errors"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/jackc/pgx/v5/pgxpool"
)

type UserRepository interface {
	CreateUser(ctx context.Context, request dtos.CreateUserRequest) (*users.User, error)
	GetUserByEmail(ctx context.Context, email string) (*users.User, error)
	GetUserByID(ctx context.Context, id int64) (*users.User, error)
	GetUsersBySearchQuery(ctx context.Context, queryString string) ([]*users.SearchUser, error)
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

func (r *UserRepositoryPGImpl) GetUserByEmail(ctx context.Context, email string) (*users.User, error) {
	var user users.User
	query := `SELECT * FROM auth.users WHERE email = $1`
	err := r.db.QueryRow(ctx, query, email).Scan(&user.ID, &user.Username, &user.Email, &user.Password)

	if errors.Is(err, sql.ErrNoRows) {
		return nil, appErr.ErrNotFound
	}

	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (r *UserRepositoryPGImpl) GetUserByID(ctx context.Context, id int64) (*users.User, error) {
	var user users.User
	query := `SELECT id, username, email FROM auth.users WHERE id = $1`

	err := r.db.QueryRow(ctx, query, id).Scan(&user.ID, &user.Username, &user.Email)

	if errors.Is(err, sql.ErrNoRows) {
		return nil, appErr.ErrNotFound
	}

	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *UserRepositoryPGImpl) GetUsersBySearchQuery(ctx context.Context, queryString string) ([]*users.SearchUser, error) {
	var results []*users.SearchUser

	userID := ctx.Value("user_id")

	searchPattern := "%" + queryString + "%"

	query := `SELECT id, username FROM auth.users WHERE username ILIKE $1 AND id != $2`

	rows, err := r.db.Query(ctx, query, searchPattern, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var user users.SearchUser
		if err := rows.Scan(&user.ID, &user.Username); err != nil {
			return nil, err
		}

		user.ProfilePictureUrl = "https://m.media-amazon.com/images/M/MV5BNTk1NDg4MDEtMzE4Yy00Y2M1LWE2NTAtNGU4NGQ3NjI0MDU3XkEyXkFqcGc@._V1_.jpg"

		results = append(results, &user)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return results, nil
}
