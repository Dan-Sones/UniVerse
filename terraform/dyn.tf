resource "aws_dynamodb_table" "messages_table" {
  name         = "messages"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "conversationId"
  range_key    = "messageId"

  attribute {
    name = "conversationId"
    type = "S"
  }

  attribute {
    name = "messageId"
    type = "S"
  }

  global_secondary_index {
    name            = "MessageIdIndex"
    hash_key        = "messageId"
    projection_type = "ALL"
  }

}
