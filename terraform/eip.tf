resource "aws_eip" "go_backend_eip" {
  instance = aws_instance.go_backend.id
}
