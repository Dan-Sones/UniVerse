resource "aws_elastic_beanstalk_application" "frontend" {
  name = "frontend"
}

resource "aws_elastic_beanstalk_environment" "frontend_env" {
  name                = "frontend-env"
  application         = aws_elastic_beanstalk_application.frontend.name
  solution_stack_name = "64bit Amazon Linux 2023 v6.4.2 running Node.js 22"

  lifecycle {
    ignore_changes = [
      version_label,         # Ignore changes when a new version is manually deployed
      platform_arn,          # AWS might update this on platform version upgrades
      solution_stack_name,   # AWS could update this if stack versions change
      setting,               # AWS dynamically modifies settings, we don't want to track them
      tags,                  # Ignore auto-generated AWS tags
      triggers,              # AWS dynamically manages triggers
      autoscaling_groups,    # AWS-managed, should not cause re-creation
      instances,             # Instance changes should not force a redeploy
      load_balancers,        # AWS modifies ELB configs dynamically
      launch_configurations, # AWS-generated, ignore changes
      queues,                # AWS dynamically updates these, ignore them
      endpoint_url           # The IP or domain might change, ignore it
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
