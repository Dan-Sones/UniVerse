resource "aws_api_gateway_rest_api" "rest_api" {
  name        = "rest-api"
  description = "API Gateway for REST"
}

resource "aws_api_gateway_method_settings" "rate_limit" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  stage_name  = aws_api_gateway_stage.prod_stage.stage_name
  method_path = "*/*"

  settings {
    throttling_rate_limit  = 100 # per second
    throttling_burst_limit = 200
  }
}


resource "aws_api_gateway_resource" "api" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "api"
}

# wildcard {proxy+} under /api to catch all subpaths 
resource "aws_api_gateway_resource" "proxy" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_resource.api.id
  path_part   = "{proxy+}"
}

# Allow API Gateway to handle ALL methods for /api/{proxy+}
resource "aws_api_gateway_method" "proxy_method" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.proxy.id
  http_method   = "ANY"
  authorization = "NONE"
  request_parameters = {
    "method.request.path.proxy" = true
  }
}


resource "aws_api_gateway_vpc_link" "vpc_link" {
  name        = "chat-vpc-link"
  target_arns = [aws_lb.nlb.arn]
  description = "VPC link for API Gateway to access Go backend EC2 instance"
}

resource "aws_api_gateway_integration" "proxy_integration" {
  rest_api_id             = aws_api_gateway_rest_api.rest_api.id
  resource_id             = aws_api_gateway_resource.proxy.id
  http_method             = aws_api_gateway_method.proxy_method.http_method
  integration_http_method = "ANY"
  type                    = "HTTP_PROXY"
  connection_type         = "VPC_LINK"
  connection_id           = aws_api_gateway_vpc_link.vpc_link.id
  uri                     = "http://${aws_lb.nlb.dns_name}/api/{proxy}"

  request_parameters = {
    "integration.request.path.proxy" = "method.request.path.proxy"
  }

  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_api_gateway_deployment" "chat_api_deploy" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id


  triggers = {
    redeployment = timestamp() # Forces a new deployment
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "prod_stage" {
  stage_name    = "prod"
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  deployment_id = aws_api_gateway_deployment.chat_api_deploy.id
}


resource "aws_api_gateway_rest_api_policy" "api_policy" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = "*",
      Action    = "execute-api:Invoke",
      Resource  = "arn:aws:execute-api:*:*:*"
    }]
  })
}
