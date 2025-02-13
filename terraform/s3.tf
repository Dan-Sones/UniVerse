resource "aws_s3_bucket" "go_binary_bucket" {
  bucket = "universe-messenger-binaries"

  tags = {
    Name        = "Go Binary Bucket"
    Environment = "Development"
  }
}

resource "aws_s3_bucket_public_access_block" "block_public_access" {
  bucket = aws_s3_bucket.go_binary_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "versioning" {
  bucket = aws_s3_bucket.go_binary_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_object" "go_binary" {
  bucket       = aws_s3_bucket.go_binary_bucket.id
  key          = "universe-messenger"
  source       = "../backend/cmd/UniVerse/universe-messenger" # Path to compiled binary
  content_type = "application/octet-stream"
}


resource "aws_s3_object" "env_file" {
  bucket       = aws_s3_bucket.go_binary_bucket.id
  key          = ".env.prod"
  source       = ".env.prod"
  content_type = "text/plain"
}


resource "aws_s3_bucket" "frontend_bucket" {
  bucket = "universe-messenger-frontend"

  tags = {
    Name        = "Universe Messenger Frontend"
    Environment = "Production"
  }
}

resource "aws_s3_bucket_website_configuration" "frontend_website" {
  bucket = aws_s3_bucket.frontend_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "frontend_public_access" {
  bucket = aws_s3_bucket.frontend_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "frontend_bucket_policy" {
  bucket = aws_s3_bucket.frontend_bucket.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.frontend_bucket.arn}/*"
      }
    ]
  })
}
