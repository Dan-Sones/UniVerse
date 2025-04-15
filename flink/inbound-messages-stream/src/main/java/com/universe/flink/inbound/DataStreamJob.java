/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.universe.flink.inbound;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.universe.flink.inbound.deserializers.InboundMessageDeserializer;
import com.universe.flink.inbound.deserializers.MessageAckDeserializer;
import com.universe.flink.inbound.deserializers.SessionDeserializer;
import com.universe.flink.inbound.models.*;
import com.universe.flink.inbound.processors.DeliveryAndAckProcessor;
import com.universe.flink.inbound.processors.SessionBroadcastFunction;
import com.universe.flink.inbound.sinks.AsyncDynamoDBSink;
import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.serialization.SimpleStringSchema;
import org.apache.flink.api.common.state.MapStateDescriptor;
import org.apache.flink.api.common.typeinfo.Types;
import org.apache.flink.connector.base.DeliveryGuarantee;
import org.apache.flink.connector.kafka.sink.KafkaRecordSerializationSchema;
import org.apache.flink.connector.kafka.sink.KafkaSink;
import org.apache.flink.connector.kafka.source.KafkaSource;
import org.apache.flink.connector.kafka.source.enumerator.initializer.OffsetsInitializer;
import org.apache.flink.streaming.api.CheckpointingMode;
import org.apache.flink.streaming.api.datastream.*;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;
import java.util.concurrent.TimeUnit;


/**
 * Skeleton for a Flink DataStream Job.
 *
 * <p>For a tutorial how to write a Flink application, check the
 * tutorials and examples on the <a href="https://flink.apache.org">Flink Website</a>.
 *
 * <p>To package your application into a JAR file for execution, run
 * 'mvn clean package' on the command line.
 *
 * <p>If you change the name of the main class (with the public static void main(String[] args))
 * method, change the respective entry in the POM.xml file (simply search for 'mainClass').
 */
public class DataStreamJob {

    public static void main(String[] args) throws Exception {


//        ListTablesResult listTablesResult = dynamoDB.listTables();
//        System.out.println("DynamoDB Tables:");
//        listTablesResult.getTableNames().forEach(System.out::println);


        // Sets up the execution environment, which is the main entry point
        // to building Flink applications.
        final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        ObjectMapper mapper = new ObjectMapper();

        String kafkaBootstrap = "b-1.universemskcluster.vvcfyz.c4.kafka.eu-west-2.amazonaws.com:9092,b-2.universemskcluster.vvcfyz.c4.kafka.eu-west-2.amazonaws.com:9092,b-3.universemskcluster.vvcfyz.c4.kafka.eu-west-2.amazonaws.com:9092";

        KafkaSource<Session> sessionSource = KafkaSource.<Session>builder()
                .setBootstrapServers(kafkaBootstrap)
                .setTopics("session-state")
                .setStartingOffsets(OffsetsInitializer.latest())
                .setGroupId("flink-dev-test-" + UUID.randomUUID())
                .setValueOnlyDeserializer(new SessionDeserializer())
                .build();

        DataStreamSource<Session> sessionDataStreamSource = env.fromSource(
                sessionSource,
                WatermarkStrategy.noWatermarks(),
                "Session state source"
        );

        KafkaSource<Message> messageSource = KafkaSource.<Message>builder()
                .setBootstrapServers(kafkaBootstrap)
                .setTopics("inbound-messages")
                .setStartingOffsets(OffsetsInitializer.latest())
                .setGroupId("flink-dev-test-" + UUID.randomUUID())
                .setValueOnlyDeserializer(new InboundMessageDeserializer())
                .build();

        DataStreamSource<Message> inboundMessageDataStreamSource = env.fromSource(
                messageSource,
                WatermarkStrategy.noWatermarks(),
                "Inbound Messages Source"
        );


        KafkaSource<MessageAck> ackSource = KafkaSource.<MessageAck>builder()
                .setBootstrapServers(kafkaBootstrap)
                .setTopics("message-ack")
                .setStartingOffsets(OffsetsInitializer.latest())
                .setGroupId("flink-dev-test-" + UUID.randomUUID())
                .setValueOnlyDeserializer(new MessageAckDeserializer())
                .build();

        DataStreamSource<MessageAck> ackDataStreamSource = env.fromSource(
                ackSource,
                WatermarkStrategy.noWatermarks(),
                "Ack Source"
        );

        KafkaSink<String> outboundMessagesSink = KafkaSink.<String>builder()
                .setBootstrapServers(kafkaBootstrap)
                .setRecordSerializer(
                        KafkaRecordSerializationSchema.builder()
                                .setTopic("outbound-messages")
                                .setValueSerializationSchema(new SimpleStringSchema())
                                .build()
                )
                // EXACTLY_ONCE crashes it?
                .setDeliveryGuarantee(DeliveryGuarantee.AT_LEAST_ONCE)
                .build();

        System.out.println("🚀 Flink job started. Listening for inbound messages...");


        // Store message state
        MapStateDescriptor<Long, List<String>> sessionStateDescriptor = new MapStateDescriptor<>(
                "sessionBroadcastState",
                Types.LONG,
                Types.LIST(Types.STRING)
        );

        BroadcastStream<Session> sessionBroadcastStream = sessionDataStreamSource.broadcast(sessionStateDescriptor);

        //Process messages against session State
        DataStream<SessionProcessedMessage> sessionProcessedMessageDataStream = inboundMessageDataStreamSource
                .connect(sessionBroadcastStream)
                .process(new SessionBroadcastFunction());


        // If recepient is not connected write straight to dynamo
        DataStream<Message> doNotAttemptDelivery = sessionProcessedMessageDataStream.filter(sp -> !sp.AttemptDelivery()).map(SessionProcessedMessage::getMessage).name("do-not-attempt-delivery");
        AsyncDataStream.unorderedWait(
                        doNotAttemptDelivery,
                        new AsyncDynamoDBSink(),
                        5,
                        TimeUnit.SECONDS,
                        100
                ).name("Async DynamoDB DoNotAttemptDelivery Update Sink")
                .disableChaining();


        // get all messages where we should attempt delivery
        DataStream<Message> attemptDelivery = sessionProcessedMessageDataStream.filter(sp -> sp.AttemptDelivery()).map(SessionProcessedMessage::getMessage).name("attempt-delivery");

        // Join the attempt delivery stream with the message ack stream (so we can see if stuff was delivered okay)
        ConnectedStreams<Message, MessageAck> connected = attemptDelivery
                .keyBy(msg -> msg.getMessageId())
                .connect(ackDataStreamSource.keyBy(ack -> ack.getMessageId()));


        DataStream<Message> resultStream = connected
                .process(new DeliveryAndAckProcessor());


        // Regardless of whether a message was delievered successfully, after x attempts write it to dyanmo as well
        SingleOutputStreamOperator<Message> ToWrite = resultStream.filter(msg -> msg.getStatus() == MessageStatus.FAILED || msg.getStatus() == MessageStatus.DELIVERED)
                .name("DeliveredAndFailedMessages");

        AsyncDataStream.unorderedWait(
                        ToWrite,
                        new AsyncDynamoDBSink(),
                        5,
                        TimeUnit.SECONDS,
                        100
                )
                .name("Async DynamoDB Delivered Update Sink")
                .disableChaining();

        // Write to kakfa
        resultStream.filter(sp -> sp.getStatus() == MessageStatus.PREEMPTIVE)
                .map(mapper::writeValueAsString)
                .sinkTo(outboundMessagesSink);

        env.execute("Kafka Inbound Messages Stream");
    }
}
