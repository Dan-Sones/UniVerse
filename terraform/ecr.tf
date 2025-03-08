resource "aws_ecr_repository" "universe_messenger_images" {

  name = "universe-messenger"
  image_scanning_configuration {
    scan_on_push = true
  }

  encryption_configuration {
    encryption_type = "AES256"
  }

}
