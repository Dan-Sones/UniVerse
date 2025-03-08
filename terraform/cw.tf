resource "aws_cloudwatch_log_group" "ecs_logs" {
  name              = "/aws/ecs/universe-messenger"
  retention_in_days = 7
}
