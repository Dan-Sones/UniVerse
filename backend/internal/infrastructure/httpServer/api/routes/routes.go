package routes

import (
	"backend/internal/controllers"
	"backend/internal/infrastructure/httpServer/api/middleware"
	"backend/internal/infrastructure/httpServer/ws"
	"context"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/rs/zerolog"
)

type routes struct {
	Logger *zerolog.Logger
}

type Routes interface {
	InitializeRoutes(ctx context.Context, router *gin.Engine, db *pgxpool.Pool)
}

func NewRoutes(logger *zerolog.Logger) Routes {
	return &routes{
		Logger: logger,
	}
}

func (r *routes) InitializeRoutes(ctx context.Context, router *gin.Engine, db *pgxpool.Pool) {

	hub := ws.NewHub()
	go hub.Run()

	public := router.Group("/api")
	{
		public.GET("/ping", func(c *gin.Context) {
			c.JSON(200, gin.H{"message": "pong"})
		})
	}

	userController := controllers.NewUserController(ctx, db, r.Logger)

	// TODO: Secure somehow

	webSockets := router.Group("/ws")
	webSockets.Use(middleware.JWTMiddleware())
	{
		webSockets.GET("/", func(c *gin.Context) {
			ws.ServeWS(hub, c)
		})
	}

	publicUsers := public.Group("/users")
	{
		publicUsers.POST("/signup", userController.CreateUser)
		publicUsers.POST("/login", userController.Login)
		publicUsers.POST("/logout", userController.Logout)
	}

	privateUsers := public.Group("/users")
	privateUsers.Use(middleware.JWTMiddleware())
	{
		privateUsers.GET("/me", userController.Me)
		privateUsers.GET("/search", userController.SearchUsers)
	}
}
