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


resource "aws_s3_bucket" "universe_messneger_static_bucket" {
  bucket = "universe-messneger-static-zip"
}

resource "aws_s3_object" "react_app_zip" {
  bucket = aws_s3_bucket.universe_messneger_static_bucket.bucket
  key    = "frontendDeployment.zip"
  source = "frontendDeployment.zip"
  etag   = filemd5("frontendDeployment.zip")
}
