FROM golang:1.23 AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o universe-messenger ./cmd/UniVerse

FROM alpine:latest
WORKDIR /root/

RUN apk --no-cache add ca-certificates

COPY --from=builder /app/universe-messenger .

EXPOSE 80

CMD ["./universe-messenger"]