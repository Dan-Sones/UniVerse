package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
)

type routes struct {
	Logger *zerolog.Logger
}

type Routes interface {
	InitializeRoutes(router *gin.Engine)
}

func NewRoutes(logger *zerolog.Logger) Routes {
	return &routes{
		Logger: logger,
	}
}

func (r *routes) InitializeRoutes(router *gin.Engine) {
	public := router.Group("/api")
	{
		public.GET("/ping", func(c *gin.Context) {
			c.JSON(200, gin.H{"message": "pong"})
		})
	}
}
