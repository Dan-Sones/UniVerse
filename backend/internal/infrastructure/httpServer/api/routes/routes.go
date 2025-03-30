package routes

import (
	"backend/internal/controllers"
	"backend/internal/infrastructure/httpServer/api/middleware"
	"backend/internal/infrastructure/httpServer/ws"
	"backend/internal/infrastructure/kafka"
	"backend/internal/models/chat"
	"backend/internal/services"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/rs/zerolog"
	kafka2 "github.com/segmentio/kafka-go"
)

type routes struct {
	Logger *zerolog.Logger
}

type Routes interface {
	InitializeRoutes(router *gin.Engine, pgPool *pgxpool.Pool, dynamoClient *dynamodb.Client)
}

func NewRoutes(logger *zerolog.Logger) Routes {
	return &routes{
		Logger: logger,
	}
}

func (r *routes) InitializeRoutes(router *gin.Engine, pgPool *pgxpool.Pool, dynamoClient *dynamodb.Client) {

	inboundKafkaConn := kafka.CreateInboundMessagesWriter()

	reader := kafka2.NewReader(kafka2.ReaderConfig{
		Brokers:  []string{"localhost:9092"},
		Topic:    "outbound-messages",
		MinBytes: 1,
		MaxBytes: 57671680,
	})

	outboundMessaageService := services.NewKafkaService(reader, r.Logger)

	clients := make(map[int64]*ws.Client)

	outboundMessages := make(chan chat.OutboundMessage, 10000)

	hub := ws.NewHub(inboundKafkaConn, &clients, outboundMessages, r.Logger)
	go hub.Run()

	go outboundMessaageService.ListenForOutboundMessages(&clients, outboundMessages)

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
