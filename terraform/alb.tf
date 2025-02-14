resource "aws_lb" "ec2_go_alb" {
  name                       = "ec2-go-alb"
  internal                   = false
  load_balancer_type         = "application"
  security_groups            = [aws_security_group.alb_sg.id]
  subnets                    = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id]
  enable_deletion_protection = false
}

resource "aws_lb_target_group" "ec2_go_tg" {
  name     = "ec2-go-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.chat_vpc.id
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.ec2_go_alb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.ec2_go_tg.arn
  }

}


resource "aws_lb_target_group_attachment" "ec2_go_tg_attachment" {
  target_group_arn = aws_lb_target_group.ec2_go_tg.arn
  target_id        = aws_instance.go_backend.id
  port             = 80
}
