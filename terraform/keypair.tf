
resource "tls_private_key" "jump_server_key" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "tls_private_key" "go_backend_key" {
  algorithm = "RSA"
  rsa_bits  = 4096
}


resource "aws_key_pair" "jump_server_key" {
  key_name   = "jump-server-key"
  public_key = tls_private_key.jump_server_key.public_key_openssh
}


resource "aws_key_pair" "go_backend_key" {
  key_name   = "go-backend-key"
  public_key = tls_private_key.go_backend_key.public_key_openssh
}


resource "local_file" "jump_server_private_key" {
  content         = tls_private_key.jump_server_key.private_key_pem
  filename        = "${path.module}/jump-server-key.pem"
  file_permission = "0600" # 
}


resource "local_file" "go_backend_private_key" {
  content         = tls_private_key.go_backend_key.private_key_pem
  filename        = "${path.module}/go-backend-key.pem"
  file_permission = "0600" 
}
