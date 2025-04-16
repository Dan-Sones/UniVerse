package com.universe.flink.inbound.clients;



import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbAsyncClient;
import software.amazon.awssdk.services.dynamodb.DynamoDbAsyncClientBuilder;

import java.net.URI;

public class DynamoDB {

    public static DynamoDbAsyncClient getDynamoDBAsyncClient() {
        String env = System.getenv("ENVIRONMENT");

        DynamoDbAsyncClientBuilder builder = DynamoDbAsyncClient.builder();
        if ("dev".equals(env)) {
            builder
                    .endpointOverride(URI.create("http://localhost:8000"))
                    .region(Region.US_EAST_1)
                    .credentialsProvider(StaticCredentialsProvider.create(
                            AwsBasicCredentials.create("local", "local")));
        } else {
            builder
                    .region(Region.EU_WEST_2)
                    .credentialsProvider(DefaultCredentialsProvider.create());
        }

        return builder.build();
    }
}