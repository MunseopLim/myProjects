# syntax=docker/dockerfile:1.3-labs

# Build stage
FROM golang:1.23 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Use Ubuntu as a base image for the runtime stage
FROM ubuntu:24.04

# Set the Current Working Directory inside the container
WORKDIR /app

# 이전 stage에서 빌드한 바이너리를 포함한 모든 파일 복사
COPY --from=builder /app/main /app/main

# Create log directory
RUN mkdir -p /app/log

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the executable
CMD ["./main"]
