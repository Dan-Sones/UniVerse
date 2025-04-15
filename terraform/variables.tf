variable "security_group_id" {
  description = "Security group ID (as created by learner lab by default)"
  type        = string
}

variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
}

variable "my_ip" {
  description = "Local IP to access stuff"
  type        = string
}

variable "profile" {
  description = "IAM profile (Crap learner lab restriction means you can only have one....)"
  type        = string
}

variable "arn" {
  description = "arn for default iam"
  type        = string
}

variable "users_db_username" {
  description = "Username for the users RDS database"
  type        = string
}

variable "users_db_password" {
  description = "Password for the User RDS database"
  type        = string
  sensitive   = true
}

variable "users_db_name" {
  description = "users Database name"
  type        = string
}

variable "kafka_brokers" {
  description = "Kafka brokers"
  type        = string
}
