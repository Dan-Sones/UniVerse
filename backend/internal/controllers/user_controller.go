package controllers

import (
	"backend/internal/dtos"
	"backend/internal/services"
	"context"
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
	if err != nil {
		uc.Logger.Error().Err(err).Msg("Failed to create user")
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{})
}
