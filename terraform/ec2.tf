resource "aws_instance" "kafka_admin" {
  ami           = "ami-0cfd0973db26b893b"
  instance_type = "t3.micro"
  subnet_id     = aws_subnet.public_subnet_1.id
  vpc_security_group_ids = [
    aws_security_group.ec2_kafka_admin.id
  ]

  key_name = aws_key_pair.jump_server_key.key_name



  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install -y java-1.8.0-openjdk wget tar
              cd /home/ec2-user
              wget https://downloads.apache.org/kafka/3.4.0/kafka_2.13-3.4.0.tgz
              tar -xzf kafka_2.13-3.4.0.tgz
              chown -R ec2-user:ec2-user kafka_2.13-3.4.0
              EOF

  tags = {
    Name = "kafka-topic-admin"
  }
}
