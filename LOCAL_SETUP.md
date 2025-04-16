## Local Environment Setup

Note: These instructions MUST be followed in order to run the project locally.

### Frontend Setup

1. `cd frontend`
2. Install dependencies using `npm install`
3. Locate the variables `WS_BASE_URL` and `API_BASE_URL` in within the project and update them to point to the correct backend URL (e.g. `http://localhost:80`).
4. Start the frontend using `npm run dev`

### Container Setup

1. Ensure you have Docker and Docker Compose installed.
2. Navigate to the `backend/docker` directory.
3. Run `docker-compose pull` to pull the necessary images.
4. Run `docker-compose up` to start the Kafka, Zookeeper, DynamoDB, and POSTGRES containers.
5. These containers will run their own initialization scripts to set up the necessary databases and topics. (see `docker-compose.yml` for details)

### Backend Setup

1. `cd backend`
2. Install dependencies using `go mod tidy`
3. Start the backend using `go run main.go`
4. The backend should now be running on `http://localhost:80` (or the port you specified in the code).
5. The backend will connect to the Kafka and DynamoDB containers started in the previous step.

### Flink Setup

1. Ensure you have Java and Maven installed.
2. Navigate to the `flink/inbound-messages-stream` directory.
3. Run `mvn clean install` to install the necessary dependencies.
4. Run `mvn clean package` to build the project.
5. Assuming you have flink installed on your local machine, run `flink run -t local target/inbound-messages-stream-1.0-SNAPSHOT.jar` to start the Flink job. (Note this will run without the flink dashboard due to the local mode)
