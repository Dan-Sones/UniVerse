package controllers

import (
	"backend/internal/dtos"
	appErr "backend/internal/errors"
	"backend/internal/infrastructure"
	"backend/internal/services"
	"backend/internal/utils"
	"context"
	"errors"
	"fmt"
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
	userService := services.NewUserService(ctx, db, logger)
	return &UserController{service: userService, ctx: ctx, Logger: logger}
}

func (uc *UserController) CreateUser(c *gin.Context) {
	var request dtos.CreateUserRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		uc.Logger.Error().Err(err).Msg("Failed to bind body")
		c.JSON(http.StatusBadRequest, dtos.ErrorResponse{Error: "Failed to bind body"})
		return
	}

	if request.Password != request.ConfirmPassword {
		c.JSON(http.StatusBadRequest, dtos.ErrorResponse{Error: "Invalid request"})
	}

	_, err := uc.service.CreateUser(c.Request.Context(), request)

	if errors.Is(err, appErr.ErrConflict) {
		c.JSON(http.StatusConflict, dtos.ErrorResponse{Error: "Username or email already in use"})
		return
	}

	if err != nil {
		uc.Logger.Error().Err(err).Msg("Failed to create user")
		c.JSON(http.StatusInternalServerError, dtos.ErrorResponse{Error: "Failed to create user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{})
}

func (uc *UserController) Login(c *gin.Context) {
	var request dtos.LoginDTO
	if err := c.ShouldBindJSON(&request); err != nil {
		uc.Logger.Error().Err(err).Msg("Failed to bind body")
		c.JSON(http.StatusBadRequest, dtos.ErrorResponse{Error: "Invalid request body"})
		return
	}

	token, err := uc.service.Login(c.Request.Context(), request)
	if errors.Is(err, appErr.ErrInvalidCredentials) {
		c.JSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid email or password"})
		return
	}

	if err != nil {
		uc.Logger.Error().Err(err).Msg("Failed to login")
		c.JSON(http.StatusInternalServerError, dtos.ErrorResponse{Error: "Failed to login"})
		return
	}

	c.Writer.Header().Set("Access-Control-Allow-Origin", infrastructure.GetURL())
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.SetCookie("token", token, 3600*24, "/", "", true, true)
	c.Writer.Header().Set("Set-Cookie", fmt.Sprintf("token=%s; Path=/; Max-Age=%d; HttpOnly; Secure; SameSite=None", token, 3600*24))
	c.JSON(http.StatusOK, gin.H{"message:": "login successful"})
}

func (uc *UserController) Logout(c *gin.Context) {
	c.SetCookie("token", "", -1, "/", "", true, true) // Secure: true, HttpOnly: true
	c.Writer.Header().Set("Set-Cookie", "token=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=None")
	c.JSON(http.StatusOK, gin.H{})
}
func (uc *UserController) GetProfile(c *gin.Context) {
	userID, exists := c.Get("user_id")
	if !exists {
		c.JSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "No user found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user_id": userID, "message": "Welcome to my page, look around... learn something your government doesn't want you to "})
}

func (uc *UserController) Me(c *gin.Context) {
	tokenString, err := c.Cookie("token")
	if err != nil {
		c.JSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Unauthorised"})
		return
	}

	token, claims, err := utils.ValidateToken(tokenString)
	if err != nil || !token.Valid {
		c.JSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid token"})
	}

	userID, ok := claims["user_id"].(float64)
	if !ok {
		c.JSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid token claims bruhh"})
		c.Abort()
		return
	}

	me, err := uc.service.Me(c.Request.Context(), userID)
	if errors.Is(err, appErr.ErrNotFound) {
		c.JSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "User not found"})
		return
	}
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, dtos.ErrorResponse{Error: "Failed to get me"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user": me})
}

func (uc *UserController) SearchUsers(c *gin.Context) {
	searchTerm := c.Query("q")

	users, err := uc.service.SearchUsers(c.Request.Context(), searchTerm)
	if err != nil {
		c.JSON(http.StatusInternalServerError, dtos.ErrorResponse{Error: "Failed to search users"})
		return
	}

	c.JSON(http.StatusOK, users)

}
