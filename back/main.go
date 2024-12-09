package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	// 로그 파일 생성 또는 열기
	f, err := os.OpenFile("/app/log/myproject.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		log.Fatalf("Cannot open log file: %v", err)
	}
	defer f.Close()

	// 로그 출력 설정
	gin.SetMode(gin.ReleaseMode)
	gin.DisableConsoleColor()
	gin.DefaultWriter = f

	router := gin.Default()

	// 간단한 핸들러 설정
	router.GET("/ping/back", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	if err := router.Run(":8080"); err != nil {
		log.Fatalf("Cannot start server: %v", err)
	}
}
