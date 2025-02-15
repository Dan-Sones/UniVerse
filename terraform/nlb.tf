resource "aws_lb" "nlb" {
  name                       = "chat-nlb"
  internal                   = true
  load_balancer_type         = "network"
  subnets                    = [aws_subnet.private_subnet_1.id]
  enable_deletion_protection = false
}

resource "aws_lb_target_group" "nlb_tg" {
  name        = "chat-nlb-tg"
  port        = 80
  protocol    = "TCP"
  vpc_id      = aws_vpc.chat_vpc.id
  target_type = "instance"

  health_check {
    protocol            = "TCP"
    port                = "traffic-port"
    interval            = 30
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }
}

resource "aws_lb_listener" "nlb_listener" {
  load_balancer_arn = aws_lb.nlb.arn
  port              = 80
  protocol          = "TCP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.nlb_tg.arn
  }
}

resource "aws_lb_target_group_attachment" "ec2_tg_attachment" {
  target_group_arn = aws_lb_target_group.nlb_tg.arn
  target_id        = aws_instance.go_backend.id
  port             = 80
}
