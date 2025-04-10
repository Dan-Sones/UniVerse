package com.universe.flink.inbound.clients;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBAsync;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBAsyncClientBuilder;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;

import java.io.Serializable;

public class DynamoDB {

    public static AmazonDynamoDBAsync getDynamoDBAsyncClient() {
        return AmazonDynamoDBAsyncClientBuilder.standard()
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration("http://localhost:8000", "us-east-1"))
                .withCredentials(new AWSStaticCredentialsProvider(new SerializableAWSCredentials("local", "local")))
                .build();
    }

    // Serializable wrapper for BasicAWSCredentials
    public static class SerializableAWSCredentials extends BasicAWSCredentials implements Serializable {
        private static final long serialVersionUID = 1L;

        public SerializableAWSCredentials(String accessKey, String secretKey) {
            super(accessKey, secretKey);
        }
    }
}