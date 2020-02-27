---
slug: kafka
stages:
  - development
short_description: Apache Kafka is used as a high-available messaging queue. It receives messages from other services in the environment and provides it to the others.
tags:
  - kafka
  - deployment
  - messaging
  - message bus
  - automated deployment
  - integration
  - devops
  - stream processing
  - streaming
keywords:
  - kafka
  - deployment
  - messaging
  - message bus
  - stream processing
  - streaming
covered_by_dx_scanner: false
---

# Apache Kafka

**TL;DR**

Apache Kafka is an event streaming platform initially used as messaging queue created as open-source by LinkedIn in 2011.

## What Is a Apache Kafka

Apache Kafka is used as a high-available messaging queue. It receives messages from other services in the environment and provides it to the others.

Kafka is commonly deployed as a **cluster** with 3 or more **brokers** (nodes) to have data **replicas** (backups) on other brokers.
Kafka receives **messages** from **producers** and provides them to **consumers**. Each message is saved to a **topic** that has a name. The message can be a text, number or an object. It depends on the implementation. The topic is a category name for messages. Producers write messages to topics and consumers read messages from topics. Kafka retains all messages for a specific time and consumers are responsible to track location of these messages. Kafka topics are divided into a number of **partitions**, which contains messages in an unchangeable sequence. Each message in a partition has a specific **offset**.

![Apache Kafka](/files/kafka_architecture.png)
[Apache Kafka](https://thenewstack.io/apache-kafka-primer/)

Kafka uses [Zookeeper](https://zookeeper.apache.org/) as a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services. When new brokers get added to the cluster, ZooKeeper will start utilizing it by creating topics and partitions on it.

## Why You Might Want to Implement Apache Kafka

Kafka helps you to move large amounts of data in a reliable way and is a very flexible tool for communication between services. It's possible to scale Kafka easily and it ensures that data are read just once.

Advantages of Kafka:

- High-Throughput
- Fault-Tolerant
- Durability
- High Concurrency
- Real-time Handling
- Scalability
- Low Latency
- By Default Persistent

## Problems the Apache Kafka Helps to Solve

- [Increased cost](/problems/increased-cost)
- [Meaningless work](/problems/meaningless-work)

**Microservices architecture without Kafka**

![Kafka Microservices Mashup](/files/kafka_microservices_wrong.png)
[Confluent: Apache Kafka vs. Enterprise Service Bus (ESB) – Friends, Enemies or Frenemies?](https://www.confluent.io/blog/apache-kafka-vs-enterprise-service-bus-esb-friends-enemies-or-frenemies/)

**Microservices architecture with Kafka**

![Kafka Microservices](/files/kafka_microservices_correct.png)
[Confluent: Apache Kafka vs. Enterprise Service Bus (ESB) – Friends, Enemies or Frenemies?](https://www.confluent.io/blog/apache-kafka-vs-enterprise-service-bus-esb-friends-enemies-or-frenemies/)

## How to Implement Apache Kafka

It's necessary to have deployed an Apache Kafka cluster including Zookeeper cluest to manage Kafka nodes. There are several libraries for programming languages to connect Kafka easilly.

- [Kafka.js](https://github.com/tulios/kafkajs) for JavaScript
- [Java Client](https://docs.confluent.io/current/clients/java.html)
- [C++ Client](https://docs.confluent.io/current/clients/c_cpp.html)
- [Python Client](https://docs.confluent.io/current/clients/python.html)
- [Go Client](https://docs.confluent.io/current/clients/go.html)
- [.NET Client](https://docs.confluent.io/current/clients/dotnet.html)
- [JMS Client](https://docs.confluent.io/current/clients/kafka-jms-client/index.html)

## Common Pitfalls of the Apache Kafka

- Keeping too much data
- Old Data in Topics Not Being Deleted
- Not balancing topics
- Not accounting for long-term storage
- No disaster recovery
- No API envforcement

## Resources for the Apache Kafka

- [cloudkarafka.com: Apache Kafka for beginners - What is Apache Kafka?](https://www.cloudkarafka.com/blog/2016-11-30-part1-kafka-for-beginners-what-is-apache-kafka.html)
- [kafka.apache.org: Apache Kafka Quickstart](https://kafka.apache.org/quickstart)
- [Confluent.io: Introduction to Kafka](https://docs.confluent.io/current/kafka/introduction.html#intro-to-ak)
- [Confluent.io: Kafka Clients](https://docs.confluent.io/current/clients/index.html)
- [thenewstack.io: Apache Kafka: A Primer](https://thenewstack.io/apache-kafka-primer/)
- [softwaremill.com: Message queue benchmark](https://softwaremill.com/mqperf/)
- [5 Pitfalls to Kafka Architecture Implementation](https://logz.io/blog/5-pitfalls-to-kafka-architecture-implementation/)
- [data-flair.training: Advantages and Disadvantages of Kafka](https://data-flair.training/blogs/advantages-and-disadvantages-of-kafka/)
- [NewRelic.com: 20 Best Practices for Working With Apache Kafka at Scale](https://blog.newrelic.com/engineering/kafka-best-practices/)
