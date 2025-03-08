
# resource "aws_lb" "nlb" {
#   internal           = false
#   load_balancer_type = "network"
#   subnets            = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id]
# }

# resource "aws_lb_target_group" "nlb_tg" {
#   port        = 80
#   protocol    = "TCP"
#   vpc_id      = aws_vpc.chat_vpc.id
#   target_type = "ip"
# }

# resource "aws_lb_listener" "nlb_listener" {
#   load_balancer_arn = aws_lb.nlb.arn
#   port              = 80
#   protocol          = "TCP"

#   default_action {
#     type             = "forward"
#     target_group_arn = aws_lb_target_group.nlb_tg.arn
#   }
# }
