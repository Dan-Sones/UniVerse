resource "aws_security_group_rule" "allow_ssh" {
  security_group_id = var.security_group_id

  type        = "ingress"
  from_port   = 22
  to_port     = 22
  protocol    = "tcp"
  cidr_blocks = ["${var.my_ip}/32"]
}

resource "aws_security_group_rule" "allow_api" {
  security_group_id = var.security_group_id
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["${var.my_ip}/32"]
}

resource "aws_security_group_rule" "allow_public_api" {
  security_group_id = var.security_group_id
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["52.216.0.0/15"]
}


data "aws_instance" "go_backend" {
  instance_id = aws_instance.go_backend.id
}

resource "aws_security_group_rule" "allow_postgres_from_ec2" {
  security_group_id        = var.security_group_id
  type                     = "ingress"
  from_port                = 5432
  to_port                  = 5432
  protocol                 = "tcp"
  source_security_group_id = var.security_group_id
}
