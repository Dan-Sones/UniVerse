output "msk_bootstrap_brokers" {
  value       = aws_msk_cluster.main.bootstrap_brokers
  description = "bootstrap broker string (use in ECS/Flink)"
}
