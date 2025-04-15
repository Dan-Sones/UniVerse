resource "aws_cloudwatch_log_group" "ecs_logs" {
  name              = "/aws/ecs/universe-messenger"
  retention_in_days = 7
}

resource "aws_cloudwatch_log_group" "flink_log_group" {
  name              = "/aws/kinesis-analytics/flink-inbound-processor"
  retention_in_days = 3
}

resource "aws_cloudwatch_log_stream" "flink_log_stream" {
  name           = "flink-execution-stream"
  log_group_name = aws_cloudwatch_log_group.flink_log_group.name
}
