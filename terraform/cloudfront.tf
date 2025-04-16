resource "aws_cloudfront_origin_access_identity" "react_oai" {
  comment = "OAI for React App CloudFront"
}

resource "aws_s3_bucket_policy" "cloudfront_policy" {
  bucket = aws_s3_bucket.frontend_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadOnly",
        Effect = "Allow",
        Principal = {
          AWS = "${aws_cloudfront_origin_access_identity.react_oai.iam_arn}"
        },
        Action   = "s3:GetObject",
        Resource = "${aws_s3_bucket.frontend_bucket.arn}/*"
      }
    ]
  })
}

resource "aws_cloudfront_distribution" "react_cdn" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "React App Distribution"
  default_root_object = "index.html"

  origin {
    domain_name = aws_s3_bucket.frontend_bucket.bucket_regional_domain_name
    origin_id   = "UniVerseReactApp"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.react_oai.cloudfront_access_identity_path
    }
  }

  // If there is an error, redirect to index.html
  // seems counter intuitive, but it allows react router to handle the routing within the spa
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  default_cache_behavior {
    target_origin_id       = "UniVerseReactApp"
    viewer_protocol_policy = "allow-all"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  // Cheap one for uk, us only etc.
  price_class = "PriceClass_100"
}
