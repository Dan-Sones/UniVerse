resource "aws_ecs_cluster" "universe_cluster" {
  name = "universe-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}


resource "aws_ecs_task_definition" "universe_backend_task" {
  family                   = "universe-backend"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "512"
  memory                   = "1024"
  execution_role_arn       = var.arn
  task_role_arn            = var.arn

  container_definitions = jsonencode([
    {
      name      = "universe-messenger"
      image     = "079810756638.dkr.ecr.eu-west-2.amazonaws.com/universe-messenger:latest"
      cpu       = 512
      memory    = 1024
      essential = true
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = "/aws/ecs/universe-messenger"
          awslogs-region        = "eu-west-2"
          awslogs-stream-prefix = "ecs"
        }
      }
      portMappings = [
        {
          containerPort = 80
        }
      ]
      environment = [
        { name = "GO_ENV", value = "production" },
        { name = "POSTGRES_USER", value = "${var.users_db_username}" },
        { name = "POSTGRES_PASSWORD", value = "${var.users_db_password}" },
        { name = "POSTGRES_DB", value = "${var.users_db_name}" },
        { name = "POSTGRES_HOST", value = "${aws_db_instance.users.endpoint}" },
        { name = "POSTGRES_PORT", value = "5432" },
        # { name = "URL", value = "http://${aws_elastic_beanstalk_environment.frontend_env.cname}" }
      ]
    }
  ])

  depends_on = [aws_ecs_cluster.universe_cluster, aws_lb.universe_alb, aws_db_instance.users]
}

resource "aws_ecs_service" "universe_service" {
  name            = "universe-backend"
  cluster         = aws_ecs_cluster.universe_cluster.id
  task_definition = aws_ecs_task_definition.universe_backend_task.arn
  desired_count   = 2
  launch_type     = "FARGATE"

  enable_execute_command = true

  load_balancer {
    target_group_arn = aws_lb_target_group.universe_tg.arn
    container_name   = "universe-messenger"
    container_port   = 80
  }

  network_configuration {
    subnets          = [aws_subnet.ecs_private_subnet_1.id, aws_subnet.ecs_private_subnet_2.id]
    security_groups  = [aws_security_group.ecs_sg.id]
    assign_public_ip = false
  }

  depends_on = [aws_ecs_cluster.universe_cluster, aws_lb.universe_alb]

}


