package routes

import (
	"backend/internal/controllers"
	"backend/internal/infrastructure/httpServer/api/middleware"
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
	public := router.Group("/api")
	{
		public.GET("/ping", func(c *gin.Context) {
			c.JSON(200, gin.H{"message": "pong"})
		})
	}

	userController := controllers.NewUserController(ctx, db, r.Logger)

	users := public.Group("/users")
	{
		users.POST("/signup", userController.CreateUser)
		users.POST("/login", userController.Login)
		users.POST("/logout", userController.Logout)
		users.GET("/me", userController.Me)
	}

	protected := public.Group("/users")
	protected.Use(middleware.JWTMiddleware())
	{
		protected.GET("/profile", userController.GetProfile)
	}

}
