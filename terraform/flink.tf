resource "aws_kinesisanalyticsv2_application" "messages-stream-processor" {
  name                   = "messages-stream-processor"
  runtime_environment    = "FLINK-1_18"
  service_execution_role = aws_iam_role.flink_app_role.arn

  application_configuration {

    application_code_configuration {
      code_content {
        s3_content_location {
          bucket_arn = "arn:aws:s3:::universe-messenger-flink-jar"
          file_key   = "inbound-messages-stream-1.0-SNAPSHOT.jar"
        }
      }

      code_content_type = "ZIPFILE"
    }

    environment_properties {
      property_group {
        property_group_id = "Environment"

        property_map = {
          KAFKA_BOOTSTRAP_SERVERS = "${var.kafka_brokers}"
        }
      }
    }

    flink_application_configuration {
      checkpoint_configuration {
        configuration_type = "DEFAULT"
      }

      monitoring_configuration {
        configuration_type = "CUSTOM"
        log_level          = "DEBUG"
        metrics_level      = "APPLICATION"

      }



      parallelism_configuration {
        configuration_type = "DEFAULT"
      }
    }

    vpc_configuration {

      security_group_ids = [
        aws_security_group.flink.id,
      ]

      subnet_ids = [
        aws_subnet.msk_private_subnet_1.id,
        aws_subnet.msk_private_subnet_2.id,
        aws_subnet.msk_private_subnet_3.id,
      ]
    }


  }


  cloudwatch_logging_options {
    log_stream_arn = aws_cloudwatch_log_stream.flink_log_stream.arn
  }

}

