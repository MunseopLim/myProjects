FROM golang:1.23-alpine

WORKDIR /app

# Go 모듈 복사 및 의존성 설치
COPY go.mod go.sum ./
RUN go mod download

# 애플리케이션 코드 복사
COPY . .

# 로그 디렉토리 생성
RUN mkdir -p log

# 애플리케이션 빌드
RUN go build -o app .

EXPOSE 8080

# 애플리케이션 실행
CMD ["./app"]