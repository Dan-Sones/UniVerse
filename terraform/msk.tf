resource "aws_msk_cluster" "main" {
  cluster_name           = "universe-msk-cluster"
  kafka_version          = "3.4.0"
  number_of_broker_nodes = 3

  broker_node_group_info {
    instance_type   = "kafka.t3.small"
    client_subnets  = [aws_subnet.msk_private_subnet_1.id, aws_subnet.msk_private_subnet_2.id, aws_subnet.msk_private_subnet_3.id]
    security_groups = [aws_security_group.msk.id]
    storage_info {
      ebs_storage_info {
        volume_size = 1000
      }
    }
  }

  encryption_info {
    encryption_in_transit {
      client_broker = "PLAINTEXT"
      in_cluster    = true
    }
  }


}
