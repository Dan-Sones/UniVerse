package middleware

import (
	"backend/internal/dtos"
	"backend/internal/utils"
	"github.com/gin-gonic/gin"
	"net/http"
	"strings"
)

func JWTMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.Request.Header.Get("Authorization")
		if authHeader == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Missing Authorization header"})
			c.Abort()
			return
		}

		tokenParts := strings.Split(authHeader, " ")
		if len(tokenParts) != 2 || tokenParts[0] != "Bearer" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid Authorization header format"})
			c.Abort()
			return
		}

		tokenString := tokenParts[1]

		token, claims, err := utils.ValidateToken(tokenString)
		if err != nil || !token.Valid {
			c.AbortWithStatusJSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid or expired token"})
			c.Abort()
			return
		}

		userID, ok := claims["user_id"].(float64)
		if !ok {
			c.JSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid token claims"})
			c.Abort()
			return
		}

		c.Set("user_id", int64(userID))
		c.Next()
	}
}
