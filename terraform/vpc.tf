resource "aws_vpc" "chat_vpc" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "public_subnet_1" {
  vpc_id                  = aws_vpc.chat_vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "eu-west-2a"
}

resource "aws_subnet" "public_subnet_2" {
  vpc_id                  = aws_vpc.chat_vpc.id
  cidr_block              = "10.0.2.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "eu-west-2b"
}


resource "aws_subnet" "rds_private_subnet_1" {
  vpc_id            = aws_vpc.chat_vpc.id
  cidr_block        = "10.0.5.0/24"
  availability_zone = "eu-west-2a"
}

resource "aws_subnet" "rds_private_subnet_2" {
  vpc_id            = aws_vpc.chat_vpc.id
  cidr_block        = "10.0.6.0/24"
  availability_zone = "eu-west-2b"
}

resource "aws_subnet" "ecs_private_subnet_1" {
  vpc_id            = aws_vpc.chat_vpc.id
  cidr_block        = "10.0.7.0/24"
  availability_zone = "eu-west-2a"
}

resource "aws_subnet" "ecs_private_subnet_2" {
  vpc_id            = aws_vpc.chat_vpc.id
  cidr_block        = "10.0.8.0/24"
  availability_zone = "eu-west-2b"
}

resource "aws_subnet" "alb_public_subnet_1" {
  vpc_id                  = aws_vpc.chat_vpc.id
  map_public_ip_on_launch = true
  cidr_block              = "10.0.9.0/24"
  availability_zone       = "eu-west-2a"
}

resource "aws_subnet" "alb_public_subnet_2" {
  vpc_id                  = aws_vpc.chat_vpc.id
  map_public_ip_on_launch = true
  cidr_block              = "10.0.10.0/24"
  availability_zone       = "eu-west-2b"
}

resource "aws_subnet" "msk_private_subnet_1" {
  vpc_id            = aws_vpc.chat_vpc.id
  cidr_block        = "10.0.11.0/24"
  availability_zone = "eu-west-2a"
}

resource "aws_subnet" "msk_private_subnet_2" {
  vpc_id            = aws_vpc.chat_vpc.id
  cidr_block        = "10.0.12.0/24"
  availability_zone = "eu-west-2b"
}

resource "aws_subnet" "msk_private_subnet_3" {
  vpc_id            = aws_vpc.chat_vpc.id
  cidr_block        = "10.0.13.0/24"
  availability_zone = "eu-west-2c"
}

resource "aws_route_table_association" "msk_subnet_1_assoc" {
  subnet_id      = aws_subnet.msk_private_subnet_1.id
  route_table_id = aws_route_table.private_rt.id
}

resource "aws_route_table_association" "msk_subnet_2_assoc" {
  subnet_id      = aws_subnet.msk_private_subnet_2.id
  route_table_id = aws_route_table.private_rt.id
}

resource "aws_route_table_association" "msk_subnet_3_assoc" {
  subnet_id      = aws_subnet.msk_private_subnet_3.id
  route_table_id = aws_route_table.private_rt.id
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.chat_vpc.id
}

# Public Routing table
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.chat_vpc.id
}

# allow access to the internet through the gw internet gateway
resource "aws_route" "public_internet_access" {
  route_table_id         = aws_route_table.public_rt.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.gw.id
}

# associate public routes to public subnets (so they can reach internet)
resource "aws_route_table_association" "public_subnet_1_assoc" {
  subnet_id      = aws_subnet.public_subnet_1.id
  route_table_id = aws_route_table.public_rt.id
}

resource "aws_route_table_association" "public_subnet_2_assoc" {
  subnet_id      = aws_subnet.public_subnet_2.id
  route_table_id = aws_route_table.public_rt.id
}

resource "aws_route_table_association" "public_subnet_ecs_1_assoc" {
  subnet_id      = aws_subnet.alb_public_subnet_1.id
  route_table_id = aws_route_table.public_rt.id
}


resource "aws_route_table_association" "public_subnet_ecs_2_assoc" {
  subnet_id      = aws_subnet.alb_public_subnet_2.id
  route_table_id = aws_route_table.public_rt.id
}



resource "aws_eip" "nat_eip" {
  domain = "vpc"
}


resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat_eip.id
  subnet_id     = aws_subnet.public_subnet_1.id
}

resource "aws_route_table" "private_rt" {
  vpc_id = aws_vpc.chat_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_nat_gateway.nat.id # Use the existing NAT Gateway
  }
}


resource "aws_route_table_association" "private_subnet_1_association" {
  subnet_id      = aws_subnet.ecs_private_subnet_1.id
  route_table_id = aws_route_table.private_rt.id
}

resource "aws_route_table_association" "private_subnet_2_association" {
  subnet_id      = aws_subnet.ecs_private_subnet_2.id
  route_table_id = aws_route_table.private_rt.id
}


resource "aws_vpc_endpoint" "dynamodb" {
  vpc_id            = aws_vpc.chat_vpc.id
  service_name      = "com.amazonaws.eu-west-2.dynamodb"
  vpc_endpoint_type = "Gateway"
  route_table_ids   = [aws_route_table.private_rt.id]
}
