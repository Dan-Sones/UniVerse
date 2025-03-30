package services

import (
	"backend/internal/models/chat"
	"backend/internal/repositories"
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/oklog/ulid/v2"
	"github.com/rs/zerolog"
	"math/rand"
	"time"
)

type ChatService struct {
	repo   repositories.ChatRepository
	logger *zerolog.Logger
}

func NewChatService(client *dynamodb.Client, logger *zerolog.Logger) *ChatService {
	chatRepo := repositories.NewChatRepositoryDynamoImpl(client)
	return &ChatService{repo: chatRepo, logger: logger}
}

func (s *ChatService) StoreMessage(ctx context.Context, message *chat.OutboundMessage, timestamp time.Time) error {
	theChat := chat.Message{
		ConversationId: GenerateConversationID(message.From, message.To),
		Timestamp:      message.Time,
		MessageId:      GenerateMessageID(timestamp),
		SenderId:       message.From,
		ReceiverId:     message.To,
		Content:        message.Content,
		MessageType:    chat.TypeText,
		Status:         chat.StateDelivered,
	}

	fmt.Println(theChat)

	err := s.repo.AddMessage(ctx, &theChat)
	if err != nil {
		s.logger.Error().Err(err).Msg("error storing message")
		return err
		// TODO: If this fails do we abort sending the message over the ws?
	}

	return nil
}

func (s *ChatService) GetHistoryFor(ctx context.Context, fromId int64, toId int64) ([]*chat.Message, error) {
	conversationId := GenerateConversationID(fromId, toId)
	conversation, err := s.repo.GetConversation(ctx, conversationId)
	if err != nil {
		s.logger.Error().Err(err).Msg("error getting conversation")
		return nil, err
	}

	return conversation, nil
}

func GenerateMessageID(timestamp time.Time) string {
	entropy := rand.New(rand.NewSource(timestamp.UnixNano()))
	return ulid.MustNew(ulid.Timestamp(timestamp), entropy).String()
}

func GenerateConversationID(from, to int64) string {
	if from < to {
		return fmt.Sprintf("%d#%d", from, to)
	}
	return fmt.Sprintf("%d#%d", to, from)
}
