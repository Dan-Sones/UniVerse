  aws dynamodb create-table \
  --table-name messages \
  --billing-mode PAY_PER_REQUEST \
  --attribute-definitions \
    AttributeName=conversationId,AttributeType=S \
    AttributeName=messageId,AttributeType=S \
  --key-schema \
    AttributeName=conversationId,KeyType=HASH \
    AttributeName=messageId,KeyType=RANGE \
  --global-secondary-indexes \
    "[
      {
        \"IndexName\": \"MessageIdIndex\",
        \"KeySchema\": [
          {\"AttributeName\": \"messageId\", \"KeyType\": \"HASH\"}
        ],
        \"Projection\": {
          \"ProjectionType\": \"ALL\"
        }
      }
    ]" \
  --endpoint-url http://localhost:8000