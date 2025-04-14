resource "aws_lb" "universe_alb" {
  name                       = "universe-alb"
  internal                   = false
  load_balancer_type         = "application"
  security_groups            = [aws_security_group.alb_sg.id]
  subnets                    = [aws_subnet.alb_public_subnet_1.id, aws_subnet.alb_public_subnet_2.id]
  enable_deletion_protection = false
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.universe_alb.arn
  port              = 80
  protocol          = "HTTP"
  # ssl_policy        = "ELBSecurityPolicy-2016-08"
  # certificate_arn   = "arn:aws:acm:eu-west-2:079810756638:certificate/fe3428ff-e3e9-41bb-afbc-f4760f6b92d2"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.universe_tg.arn
  }
}

resource "aws_lb_target_group" "universe_tg" {
  name        = "universe-alb-tg"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.chat_vpc.id
  target_type = "ip"

  health_check {
    path                = "/api/ping"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }

  stickiness {
    type            = "lb_cookie"
    enabled         = true
    cookie_duration = 3600
  }
}

# resource "aws_lb_listener" "http_redirect" {
#   load_balancer_arn = aws_lb.universe_alb.arn
#   port              = "80"
#   protocol          = "HTTP"

#   default_action {
#     type = "redirect"
#     redirect {
#       protocol    = "HTTPS"
#       port        = "443"
#       status_code = "HTTP_301"
#     }
#   }
# }


