## Live Environment Setup

Note: These instructions MUST be followed in order to run the project successfully.

### AWS Setup

1. Ensure you have AWS CLI installed and configured with your credentials with the necessary permissions.
2. `cd terraform` and create a new file `.tfvars` and set the variables listed in `variables.tf` to your desired values. (Note: you may have to return to this step after the initial setup to set the `url` variable)
3. Run `terraform init` to initialize the Terraform configuration.
4. Run `terraform apply --var-file=.tfvars` to create the necessary resources in AWS. This will take some time (Potentially 40+ minutes due to the presence of MSK) to complete.
5. Note although the resources are now deployed, the applicatoin will not work until the next steps are completed.

### Frontend Setup

1. `cd frontend`
2. Install dependencies using `npm install`
3. run `VITE_API_BASE_URL=<ALB-URL-HERE> npm run build` to build the frontend. - you can obtain your ALB URL from the AWS console.
4. Navigate to the `universe-messenger-frontend-bucket` S3 bucket in the AWS console and upload the contents of the `frontend/dist` directory to the bucket (making sure to match the folder structure).
5. Now navigate to Cloudfront and invalidate the cache for the distribution created by terraform. This will ensure that the new frontend is served to users. use (`/*`) as the path to invalidate. - The new frontend should now be available at the Cloudfront URL that can be found in the AWS console.

### Kafka Setup

1. Ensure the variable `my_ip` is set correctly to your PUBLIC IP address.
2. Navigate to the AWS console and the ec2 instance created by terraform. (it will be named `kafka-topic-admin`)
3. Copy the Public IP address of the instance.
4. SSH into the instance using `ssh -i jump-server-key.pem ec2-user@<public-ip-address>`
5. Copy the bash script below (REPLACING `<BROKER-URL-ONE>` etc. with the broker URLS that can be found on the MSK Cluster page of the AWS Console) into a file called `create-topics.sh` and run it using `sh create-topics.sh` to create the necessary topics in Kafka.

```bash
BOOTSTRAP_SERVER="<BROKER-URL-ONE>:9092,<BROKER-URL-TWO>:9092,<BROKER-URL-THREE>:9092"

SHORT_RETENTION_MS=15000
REPLICATION_FACTOR=3
PARTITIONS=1

create_topic() {
          local topic=$1

            bin/kafka-topics.sh --bootstrap-server "$BOOTSTRAP_SERVER" \
                        --create  \
                            --topic "$topic" \
                                --replication-factor "$REPLICATION_FACTOR" \
                                    --partitions "$PARTITIONS" \
                                        --config retention.ms="$SHORT_RETENTION_MS"

              echo "Created topic '$topic'"
      }

create_topic inbound-messages
create_topic outbound-messages
create_topic message-ack
create_topic session-state
```

### Backend Setup

1. `cd backend`
2. Install dependencies using `go mod tidy`
3. Build the application into a docker image using `docker build -t universe-messenger .`
4. Navigate to the AWS console and find the ECR repository created by terraform. (it will be named `universe-messenger`)
5. Click 'View push commands' and follow the instructions to push the docker image to ECR.
6. Navigate to your `.tfvars` file and set the `url` variable to the URL of your ALB. (this is required for the backend to work - it is injected into the docker image at runtime by the ECS task)
7. Run `terraform apply --var-file=.tfvars` again to update the ECS task definition with the new URL.
8. Navigate to the ECS console and find the task definition created by terraform. (it will be named `universe-messenger`)
9. Click `force new deployment` to deploy the updated task definition. - This should deploy two tasks to the ECS cluster.

### Testing Connections

1. Reconnect to teh `kafka-topic-admin` instance using `ssh -i jump-server-key.pem ec2-user@<public-ip-address>`
2. Run `sh kafka-console-consumer.sh --bootstrap-server <BROKER-URL-ONE>:9092,<BROKER-URL-TWO>:9092,<BROKER-URL-THREE>:9092 --topic session-state`
3. From an API client such as Postman, perform a get request to `https://<ALB-URL-HERE>/api/ping` to check the backend is working. (this should return a 200 OK response)
4. Mock the sign up process using postman. First make a POST request with the following body to `https://<ALB-URL-HERE>/users/signup`

```json
{
  "username": "",
  "email": "",
  "confirmPassword": "",
  "password": ""
}
```

5. Providing you recieve a 200 OK response, you can assume the backend is working correctly. Now Login with a POST request to `https://<ALB-URL-HERE>/users/login` with the following body:

```json
{
  "username": "",
  "password": ""
}
```

6. You should receive a 200 OK response with a `set-cookie` header. This cookie is used to authenticate the user with the backend and is required for all subsequent requests. Copy this token so we can use it to authenticate the user when connecting via WS.
7. Make a GET request to `https://<ALB-URL-HERE>/api/users/me` and you will recievea 200 OK response. This confirms that the backend is working correctly.
8. Now we can test the websocket connection is functioning. Within postman or a similar tool, create a new websocket connection to `wss://<ALB-URL-HERE>/ws` making sure to manually set the `cookie` header to the cookie we copied earlier.
9. Going back to the terminal, you should see a message appear in the `kafka-console-consumer` terminal. This confirms that the websocket connection is working correctly and messages are being sent to Kafka.

### Flink Setup

1. Ensure you have Java and Maven installed.
2. Navigate to the `flink/inbound-messages-stream` directory.
3. Run `mvn clean install` to install the necessary dependencies.
4. Run `mvn clean package` to build the project.
5. Navigate to the AWS console and find the S3 bucket created by terraform. (it will be named `universe_messenger_flink_jar_bucket`) and upload the `inbound-messages-stream-1.0-SNAPSHOT.jar` file to the bucket.
6. Navigate to the AWS console Managed Flink Page and Run the application.
7. When you recieve a notification that the deployment is complete, navigate to the Flink dashboard and you should see the job running.

### Live Environment Testing

Navigate to the Cloudfront URL and you should see the frontend. You can now test the application by signing up and logging in. The application should work as expected.
