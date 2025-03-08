resource "aws_elastic_beanstalk_application" "frontend" {
  name = "frontend"
}

resource "aws_elastic_beanstalk_environment" "frontend_env" {
  name                = "frontend-env"
  application         = aws_elastic_beanstalk_application.frontend.name
  solution_stack_name = "64bit Amazon Linux 2023 v6.4.2 running Node.js 22"

  lifecycle {
    ignore_changes = [
      version_label,
      platform_arn,
      solution_stack_name,
      setting,
      tags,
      triggers,
      autoscaling_groups,
      instances,
      load_balancers,
      launch_configurations,
      queues,
      endpoint_url
    ]
  }


  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "EnvironmentType"
    value     = "SingleInstance"
  }

  setting {
    namespace = "aws:ec2:instances"
    name      = "InstanceTypes"
    value     = "t3.micro"
  }


  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "NODE_ENV"
    value     = "production"
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = "LabInstanceProfile"
  }
}


output "elb_url" {
  value = aws_elastic_beanstalk_environment.frontend_env.cname
}
