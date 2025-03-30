package routes

import (
	"backend/internal/controllers"
	"backend/internal/infrastructure/httpServer/api/middleware"
	"backend/internal/infrastructure/httpServer/ws"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/rs/zerolog"
	"github.com/segmentio/kafka-go"
)

type routes struct {
	Logger *zerolog.Logger
}

type Routes interface {
	InitializeRoutes(router *gin.Engine, pgPool *pgxpool.Pool, dynamoClient *dynamodb.Client, inBoundMessagesConn *kafka.Conn)
}

func NewRoutes(logger *zerolog.Logger) Routes {
	return &routes{
		Logger: logger,
	}
}

func (r *routes) InitializeRoutes(router *gin.Engine, pgPool *pgxpool.Pool, dynamoClient *dynamodb.Client, inBoundMessagesConn *kafka.Conn) {

	hub := ws.NewHub(dynamoClient, inBoundMessagesConn, r.Logger)
	go hub.Run()

	public := router.Group("/api")
	{
		public.GET("/ping", func(c *gin.Context) {
			c.JSON(200, gin.H{"message": "pong"})
		})
	}

	userController := controllers.NewUserController(pgPool, r.Logger)
	chatController := controllers.NewChatController(dynamoClient, r.Logger)

	// TODO: Secure somehow

	webSockets := router.Group("/ws")
	webSockets.Use(middleware.JWTMiddleware())
	{
		webSockets.GET("", func(c *gin.Context) {
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

	chat := public.Group("/chats")
	chat.Use(middleware.JWTMiddleware())
	{
		chat.GET("/:id/history", chatController.GetChatHistoryFor) // TODO: Paginate this
	}
}
