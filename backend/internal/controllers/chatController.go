package controllers

import (
	"backend/internal/dtos"
	"backend/internal/services"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
	"net/http"
	"strconv"
)

type ChatController struct {
	Logger  *zerolog.Logger
	service *services.ChatService
}

func NewChatController(db *dynamodb.Client, logger *zerolog.Logger) *ChatController {
	chatService := services.NewChatService(db, logger)
	return &ChatController{
		Logger:  logger,
		service: chatService,
	}
}

func (cc *ChatController) GetChatHistoryFor(c *gin.Context) {
	ctx := c.Request.Context()

	fromId, ok := ctx.Value("user_id").(int64)
	if !ok {
		c.JSON(http.StatusInternalServerError, dtos.ErrorResponse{Error: "Failed to fetch chat history"})
	}

	toId, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusInternalServerError, dtos.ErrorResponse{Error: "Failed to fetch chat history"})
	}

	messages, err := cc.service.GetHistoryFor(ctx, fromId, toId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, dtos.ErrorResponse{Error: "Failed to fetch chat history"})
	}

	c.JSON(http.StatusOK, messages)

}
