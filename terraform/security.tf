resource "aws_security_group" "users_rds_sg" {
  name        = "users-rds-security-group"
  vpc_id      = aws_vpc.chat_vpc.id
  description = "Security group for users RDS"

  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs_sg.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

data "aws_ip_ranges" "api_gateway" {
  services = ["api-gateway"]
  regions  = ["eu-west-2"]
}

resource "aws_security_group_rule" "allow_api_gateway_to_alb_https" {
  security_group_id = aws_security_group.alb_sg.id
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = data.aws_ip_ranges.api_gateway.cidr_blocks
}

resource "aws_security_group" "ecs_sg" {
  name   = "ecs-security-group"
  vpc_id = aws_vpc.chat_vpc.id

  ingress {
    from_port       = 80
    to_port         = 80
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_sg.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group_rule" "allow_ecs_to_rds" {
  type                     = "egress"
  security_group_id        = aws_security_group.ecs_sg.id
  from_port                = 5432
  to_port                  = 5432
  protocol                 = "tcp"
  source_security_group_id = aws_security_group.users_rds_sg.id
}

resource "aws_security_group" "alb_sg" {
  name   = "alb-security-group"
  vpc_id = aws_vpc.chat_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "dynamo_sg" {
  name   = "dynamo-security-group"
  vpc_id = aws_vpc.chat_vpc.id

}

resource "aws_security_group_rule" "allow_ecs_to_dynamo" {
  security_group_id = aws_security_group.dynamo_sg.id
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = [aws_subnet.ecs_private_subnet_1.cidr_block, aws_subnet.ecs_private_subnet_2.cidr_block]
}


resource "aws_security_group" "msk" {
  name   = "msk-security-group"
  vpc_id = aws_vpc.chat_vpc.id

  ingress {
    from_port       = 9092
    to_port         = 9092
    protocol        = "tcp"
    security_groups = [aws_security_group.flink.id, aws_security_group.ec2_kafka_admin.id, aws_security_group.ecs_sg.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "ec2_kafka_admin" {
  name   = "ec2-kafka-admin"
  vpc_id = aws_vpc.chat_vpc.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["${var.my_ip}/32"]
  }
}

resource "aws_security_group" "flink" {
  name   = "flink-security-group"
  vpc_id = aws_vpc.chat_vpc.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
