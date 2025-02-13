package middleware

import (
	"backend/internal/dtos"
	"backend/internal/utils"
	"github.com/gin-gonic/gin"
	"net/http"
)

func JWTMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenFromCookie, err := c.Cookie("token")
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
			return
		}
		if tokenFromCookie == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, dtos.ErrorResponse{Error: "Invalid or Expired Token"})
			c.Abort()
			return
		}

		token, claims, err := utils.ValidateToken(tokenFromCookie)
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
