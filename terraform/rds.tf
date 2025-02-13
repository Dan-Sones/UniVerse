resource "aws_db_instance" "users" {
  allocated_storage      = 20
  max_allocated_storage  = 20
  engine                 = "postgres"
  engine_version         = "16"
  instance_class         = "db.t3.micro"
  db_name                = var.users_db_name
  username               = var.users_db_username
  password               = var.users_db_password
  publicly_accessible    = false
  skip_final_snapshot    = true
  monitoring_interval    = 0
  vpc_security_group_ids = [var.security_group_id]
}
