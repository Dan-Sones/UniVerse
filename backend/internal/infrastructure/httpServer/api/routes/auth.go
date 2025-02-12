package routes

import "github.com/gin-gonic/gin"

func SetupAuthRoutes(router *gin.Engine) {
	auth := router.Group("/auth")
	{
		auth.POST("/signup")
		auth.POST("/login")
	}
}

func Signup(c *gin.Context) {

}
