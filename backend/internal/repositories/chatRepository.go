package repositories

import (
	"backend/internal/models/chat"
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/expression"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
)

type ChatRepository interface {
	GetConversation(ctx context.Context, conversationID string) ([]*chat.Message, error)
	AddMessage(ctx context.Context, message *chat.Message) error
}

type ChatRepositoryDynamoImpl struct {
	db *dynamodb.Client
}

const tableName = "messages"

func NewChatRepositoryDynamoImpl(client *dynamodb.Client) *ChatRepositoryDynamoImpl {
	return &ChatRepositoryDynamoImpl{db: client}
}

func (c *ChatRepositoryDynamoImpl) AddMessage(ctx context.Context, message *chat.Message) error {
	item, err := attributevalue.MarshalMap(message)
	if err != nil {
		return err
	}
	_, err = c.db.PutItem(ctx, &dynamodb.PutItemInput{
		TableName: aws.String(tableName), Item: item,
	})
	if err != nil {
		return err
	}
	return nil
}

func (c *ChatRepositoryDynamoImpl) GetConversation(ctx context.Context, conversationID string) ([]*chat.Message, error) {
	var messages []*chat.Message
	var response *dynamodb.QueryOutput
	var err error

	keyEx := expression.Key("conversationId").Equal(expression.Value(conversationID))
	expr, err := expression.NewBuilder().WithKeyCondition(keyEx).Build()
	if err != nil {
		return nil, err
	} else {
		queryPaginator := dynamodb.NewQueryPaginator(c.db, &dynamodb.QueryInput{
			TableName:                 aws.String(tableName),
			ExpressionAttributeNames:  expr.Names(),
			ExpressionAttributeValues: expr.Values(),
			KeyConditionExpression:    expr.KeyCondition(),
		})
		for queryPaginator.HasMorePages() {
			response, err = queryPaginator.NextPage(ctx)
			if err != nil {
				break
			} else {
				var batchMessages []*chat.Message
				fmt.Println(response.Items)
				err = attributevalue.UnmarshalListOfMaps(response.Items, &batchMessages)
				if err != nil {
					break
				} else {
					messages = append(messages, batchMessages...)
				}
			}
		}
	}
	return messages, err
}
