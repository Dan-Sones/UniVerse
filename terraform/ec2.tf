resource "aws_instance" "go_backend" {
  ami                    = "ami-0c02fb55956c7d316"
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.go_backend_key.key_name
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
  subnet_id              = aws_subnet.private_subnet_1.id


  iam_instance_profile = var.profile

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo yum install -y aws-cli postgresql

              sudo bash -c 'echo "@reboot root /var/lib/cloud/instance/scripts/user-data" >> /etc/crontab'
           
              aws s3 cp s3://${aws_s3_bucket.go_binary_bucket.bucket}/universe-messenger /home/ec2-user/universe-messenger
              chmod +x /home/ec2-user/universe-messenger

              aws s3 cp s3://${aws_s3_bucket.go_binary_bucket.bucket}/.env.prod /home/ec2-user/.env.prod

   
            
              # Create systemd service for the Go app
              cat <<EOT > /etc/systemd/system/universe-messenger.service
              [Unit]
              Description=Universe Messenger Service
              After=network.target

              [Service]
              ExecStart=/home/ec2-user/universe-messenger
              WorkingDirectory=/home/ec2-user
              User=root
              Restart=always
              RestartSec=5
              StandardOutput=append:/var/log/universe-messenger.log
              StandardError=append:/var/log/universe-messenger.log

              [Install]
              WantedBy=multi-user.target
              EOT

              # Enable and start the service
              sudo systemctl daemon-reload
              sudo systemctl enable universe-messenger
              sudo systemctl start universe-messenger
              EOF

}
