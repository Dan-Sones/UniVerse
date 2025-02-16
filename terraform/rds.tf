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
  vpc_security_group_ids = [aws_security_group.users_rds_sg.id]
  db_subnet_group_name   = aws_db_subnet_group.users_subnet_group.name
}

# Aws doesn't use vpc ids as above the same it does for e.g. ec2, 
# therefore we are forcing it to be created inside the same vpc by using its subnet
resource "aws_db_subnet_group" "users_subnet_group" {
  name        = "users-subnet-group"
  subnet_ids  = [aws_subnet.private_subnet_1.id, aws_subnet.private_subnet_2.id]
  description = "Subnet group for users RDS"
}
