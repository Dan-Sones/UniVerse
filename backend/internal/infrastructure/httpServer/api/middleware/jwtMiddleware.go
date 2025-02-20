package middleware

import (
	"backend/internal/dtos"
	"backend/internal/utils"
	"context"
	"github.com/gin-gonic/gin"
	"net/http"
)

func JWTMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenFromCookie, err := c.Cookie("token")
		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			return
		}
		if tokenFromCookie == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid or Expired Token"})
			return
		}

		token, claims, err := utils.ValidateToken(tokenFromCookie)
		if err != nil || !token.Valid {
			c.AbortWithStatusJSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid or expired token"})
			return
		}

		userID, ok := claims["user_id"].(float64)
		if !ok {
			c.AbortWithStatusJSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid token claims"})
			return
		}

		c.Set("user_id", int64(userID))

		ctx := context.WithValue(c.Request.Context(), "user_id", int64(userID))
		c.Request = c.Request.WithContext(ctx)

		c.Next()
	}
}
