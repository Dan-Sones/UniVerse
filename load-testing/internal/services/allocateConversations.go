package services

import (
	"load-testing/internal"
	"load-testing/internal/models"
)

func AllocateConversations(users []*models.User) []*models.Conversation {
	senders, receivers := internal.SplitUsers1To1(users)

	var conversations []*models.Conversation

	for i := 0; i < len(senders); i++ {
		conversation := &models.Conversation{
			Sender:   *senders[i],
			Receiver: *receivers[i],
		}
		conversations = append(conversations, conversation)

	}

	return conversations
}
