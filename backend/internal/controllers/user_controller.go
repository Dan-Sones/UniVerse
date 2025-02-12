package controllers

import (
	"backend/internal/dtos"
	appErr "backend/internal/errors"
	"backend/internal/services"
	"context"
	"errors"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/rs/zerolog"
	"net/http"
)

type UserController struct {
	ctx     context.Context
	Logger  *zerolog.Logger
	service *services.UserService
}

func NewUserController(ctx context.Context, db *pgxpool.Pool, logger *zerolog.Logger) *UserController {
	userService := services.NewUserService(ctx, db)
	return &UserController{service: userService, ctx: ctx, Logger: logger}
}

func (uc *UserController) CreateUser(c *gin.Context) {
	var request dtos.CreateUserRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		uc.Logger.Error().Err(err).Msg("Failed to bind body")
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	_, err := uc.service.CreateUser(c.Request.Context(), request)

	if errors.Is(err, appErr.ErrConflict) {
		c.JSON(http.StatusConflict, dtos.ErrorResponse{Error: "Username or email already in use"})
		return
	}

	if err != nil {
		uc.Logger.Error().Err(err).Msg("Failed to create user")
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{})
}

func (uc *UserController) Login(c *gin.Context) {
	var request dtos.LoginDTO
	if err := c.ShouldBindJSON(&request); err != nil {
		uc.Logger.Error().Err(err).Msg("Failed to bind body")
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
	}

	token, err := uc.service.Login(c.Request.Context(), request)
	if errors.Is(err, appErr.ErrInvalidCredentials) {
		c.JSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid email or password"})
	}

	if err != nil {
		uc.Logger.Error().Err(err).Msg("Failed to login")
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to login"})
	}

	c.JSON(http.StatusOK, gin.H{"token": token})

}
