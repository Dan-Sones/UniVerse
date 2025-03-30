package services

import (
	"backend/internal/models/chat"
	"backend/internal/repositories"
	"backend/internal/utils"
	"context"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/rs/zerolog"
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
		ConversationId: utils.GenerateConversationID(message.From, message.To),
		Timestamp:      message.Time,
		MessageId:      utils.GenerateMessageID(timestamp),
		SenderId:       message.From,
		ReceiverId:     message.To,
		Content:        message.Content,
		MessageType:    chat.TypeText,
		Status:         chat.StateDelivered,
	}

	err := s.repo.AddMessage(ctx, &theChat)
	if err != nil {
		s.logger.Error().Err(err).Msg("error storing message")
		return err
		// TODO: If this fails do we abort sending the message over the ws?
	}

	return nil
}

func (s *ChatService) GetHistoryFor(ctx context.Context, fromId int64, toId int64) ([]*chat.Message, error) {
	conversationId := utils.GenerateConversationID(fromId, toId)
	conversation, err := s.repo.GetConversation(ctx, conversationId)
	if err != nil {
		s.logger.Error().Err(err).Msg("error getting conversation")
		return nil, err
	}

	return conversation, nil
}
