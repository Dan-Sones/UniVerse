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
import com.universe.flink.inbound.processors.DeliveryAndAckProcessor;
import com.universe.flink.inbound.models.Message;
import com.universe.flink.inbound.models.MessageAck;
import com.universe.flink.inbound.processors.DynamoWriter;
import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.serialization.SimpleStringSchema;
import org.apache.flink.connector.base.DeliveryGuarantee;
import org.apache.flink.connector.kafka.sink.KafkaRecordSerializationSchema;
import org.apache.flink.connector.kafka.sink.KafkaSink;
import org.apache.flink.connector.kafka.source.KafkaSource;
import org.apache.flink.connector.kafka.source.enumerator.initializer.OffsetsInitializer;
import org.apache.flink.streaming.api.datastream.ConnectedStreams;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

import java.util.UUID;


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

        KafkaSource<Message> messageSource = KafkaSource.<Message>builder()
                .setBootstrapServers("localhost:9092")
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
                .setBootstrapServers("localhost:9092")
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
                .setBootstrapServers("localhost:9092")
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


        ConnectedStreams<Message, MessageAck> connected = inboundMessageDataStreamSource.process(new DynamoWriter())
                .keyBy(msg -> msg.messageId)
                .connect(ackDataStreamSource.keyBy(ack -> ack.messageId));



        DataStream<Message> resultStream = connected
                .process(new DeliveryAndAckProcessor());

        resultStream
                .map(mapper::writeValueAsString)
                .sinkTo(outboundMessagesSink);

        env.execute("Kafka Inbound Messages Stream");
    }
}
