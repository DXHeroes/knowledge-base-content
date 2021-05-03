---
slug: dockerizing
stages:
  - development
short_description: Dockerizing is the process of packing, deploying, and running applications using Docker containers. Docker is an open source tool that ships your application with all the necessary functionalities as one package.
tags:
  - dockerizing
  - dockerization
  - packing applications
  - devops
  - package management
  - good developer experience
  - front-end build tools
keywords:
  - dockerizing
  - container
  - application
  - package
  - engine
  - hub
  - cloud
  - docker
  - docker container
  - virtualization
  - dockerization
  - packing applications
  - applications package
  - container
  - deploy
  - cloud
covered_by_dx_scanner: true
---

# Dockerizing

**TL;DR**

Dockerizing is the process of packing, deploying, and running applications using Docker containers. Find out more about this cool new tool!

## What Is a Dockerizing

Dockerizing is the process of packing, deploying, and running applications using Docker containers. Docker is an open source tool that ships your application with all the necessary functionalities as one package. You can use Docker to pack your application with everything you need to run the application (such as libraries) and ship it as one package - a container. Containers are created from images that specify their precise contents. Dockerizing is a big hit nowadays. All the big names use it - Google, VMware, or Amazon support it.

There are two parts of Docker:

1. **The Docker Engine** - a portable packaging tool
2. **The Docker Hub** - cloud service for sharing applications

The Docker container allows another user to quickly recreate the computer environment. The container provides operating virtualization by abstracting the “user space”. This technology ensures that your colleagues are developing or testing the product using the same environment as you which results in fewer errors.

The Docker container technology was launched in 2013 by a startup Docker, Inc based in San Francisco, California. Docker, Inc became a “unicorn” company after a $95 million fundraising round in April 2015 (unicorn companies are privately held startups valued at over $1 billion).

![Docker](/files/docker.png)
[Docker](https://www.docker.com/)

## Why You Might Want to Employ Dockerizing

Docker is:

1. **Easy to use**
   Docker simplified the way we deploy applications. You do not distribute the software as source code - you send the binary image of a part of your disk. It is easy to use for developers, system admins, architects, and others. It runs the application unmodified on any cloud. Docker also lets you use the Docker Hub, which contains tens of thousands of public images ready to use.
2. **Fast**
   Docker containers are just sandboxed environments that run on the kernel. You can create and run the containers in seconds.

3. **Able to create a reproducible environment**
   Docker creates a consistent work environment that is necessary for recreating applications and their functionalities. Wrapping everything into containers means that the application you build runs on other devices without friction.

## Problems the Dockerizing Solves

- [Increased cost](/problems/increased-cost)
- [Poor code quality](/problems/poor-code-quality)
- [Meaningless work](/problems/meaningless-work)
- Long team onboarding

## How to Implement the Dockerizing

1. **Install Docker**
   Download Docker for free: [www.docker.com](https://www.docker.com/products/container-runtime#/download)
2. **Choose a base image**
   You can start from a Base OS and install everything by yourself. But there is no need to create a brand new image. Just pick one of the public images with all the functions and databases that you need.

   Choose an image based on the used technology, such as:

   - [Ruby](https://hub.Docker.com/_/ruby/)
   - [Node](https://hub.Docker.com/_/node/)
   - [Java](https://hub.Docker.com/_/java/)
   - [Python](https://hub.Docker.com/_/python/)

3. **Install packages**
   Install only what you really need. Think about image size, security, or maintainability.
4. **Add custom files**
5. **Define which user can run your container**
6. **Define the exposed ports**
7. **Define the entrypoint**
   Run your executable file.
8. **Define a configuration method**
   Every application requires parametrization.
9. **Externalize your data**

## Common Pitfalls of the Dockerizing

- Inexperienced users create their own base images. They risk stability.
- Docker is used during the production phase without detailed knowledge of how to use it. It is recommended to use Docker during the development phase.
- Docker is used only during the production phase and not during the testing phase.
- Users do not know how to use containers transparently. The diagnostic information is missing. Use tools for getting information about what is happening inside of your container. Sometimes the containers are very minimal without such tools, you should be able to find the tools somewhere else, such as an open source [cAdvisor](https://github.com/google/cadvisor), or [Scout](https://scoutapm.com/).
- The sensitive information in the container is not private. Sometimes the users are not very careful to keep the secrets hidden. If the container is not private, anyone can get the information.

## Resources for the Dockerizing

- Medium: [A Beginner-Friendly Introduction to Containers, VMs and Docker](https://medium.com/free-code-camp/a-beginner-friendly-introduction-to-containers-vms-and-Docker-79a9e3e119b)
- eZ: [What is Docker and why should I care?](https://ez.no/Blog/What-is-Docker-and-why-should-I-care)
- Hackernoon: [How to Dockerize any application](https://hackernoon.com/how-to-dockerize-any-application-b60ad00e76da)
- FreeCodeCamp: [A Beginner-Friendly Introduction to Containers, VMs and Docker](https://www.freecodecamp.org/news/a-beginner-friendly-introduction-to-containers-vms-and-Docker-79a9e3e119b/)
- Towards Data Science: [How Docker Can Help You Become A More Effective Data Scientist](https://towardsdatascience.com/how-Docker-can-help-you-become-a-more-effective-data-scientist-7fc048ef91d5)
