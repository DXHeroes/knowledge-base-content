---
slug: docker-compose
stages:
  - development
short_description: Docker Compose simplifies the configuration and management of multi-container Docker applications using a YAML file.
tags:
  - docker
  - docker-compose
  - containerization
  - devops
  - development
  - multi-container applications
  - docker yaml
  - orchestration
keywords:
  - docker compose
  - container orchestration
  - docker multi-container
  - compose yaml
  - docker services
  - docker devops
  - docker examples
  - docker tutorial
author_github_username: CodeLeom
---

# Docker Compose


## What Is Docker Compose?

It will be great to have a simple definition of [Docker](https://www.docker.com/get-started/), before progressing to Docker Compose.
> Docker is a containerization tool that assists you in building software solutions in an isolated environments that can function reliably across different infrastructure.

Hence, Docker Compose is a tool that helps define and run multi-container Docker applications. Using a single [YAML](https://yaml.org/) file (`docker-compose.yml`), you can configure services, networks, and volumes for your application, enabling streamlined management and deployment of multiple containers. It simplifies the process of running complex applications by providing a clear structure and commands to manage the containers.

Docker Compose is useful for local development, testing, and staging environments, enabling developers to work with multiple containers seamlessly.

## Do you need Docker Compose?

  


Docker Compose offers several benefits, including:

-  **Simplified Configuration** 
Use a single YAML file to define multiple configuration without any external resources, and it will be executed accordingly.

-  **Managing Dependencies**
With Docker Compose you can simplify using and managing services using a single YAML configuration.
  

## Using Docker Compose

1. **Install Docker **

Ensure Docker is installed on your system. If you don't have it installed, get it for your respective machine from the [official download page](https://docs.docker.com/get-started/get-docker/). You can verify installation using the command below, which will show the version of both Docker and the Docker Compose.

```bash
docker --version && docker-compose --version
```

2.  **Run a Simple App using Docker Compose**
This example will demonstrate running a **Hello World** app in Python using Docker Compose.

Create a folder, called `DXHeroes` and inside the folder create all the files below in it.

```bash
.
├── app.py
├── requirements.txt
├── Dockerfile
└── docker-compose.yml
```

#### `App.py` 

This is your Python application, using Flask to create a simple web server which will return `Hello, World!`.

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
```

#### `Requirements.txt`

```plaintext
flask
```

#### Docker Compose File
The `docker-compose.yml` file defines the configuration for your multi-container Docker application. It specifies how Docker should set up and run your services.

```docker
version: '3.8'
services:
  web:
    build:
      context: .
    ports:
      - "8000:5000"
```

-   **`version: '3.8'`**
Specifies the Docker Compose file format version. Version `3.8` is compatible with modern Docker releases.
    
-   **`services:`**
Defines the containers to be managed. In this example, there's only one service named `web`.
    
-   **`web:`**
This is the name of the service. It represents the container running your Python app.
    
-   **`build:`**
Specifies the build context. Here, `context: .` means Docker should look for a `Dockerfile` in the current directory to build the image for this service.
    
-   **`ports:`**
Maps a port on the host machine to a port in the container. The format is `host:container`. 
For example: `"8000:5000"` maps port `8000` on your machine (host) to port `5000` in the container.

#### Dockerfile

The `Dockerfile` defines how to build the image for the `web` service specified in `docker-compose.yml`.

```docker
# Use Python image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Run the application
CMD ["python", "app.py"]
```

-   **`FROM python:3.9-slim`**
Specifies the base image for the container. Here, it uses a lightweight Python 3.9 image.
    
-   **`WORKDIR /app`**
Sets the working directory inside the container to `/app`. All subsequent commands are executed in this directory.
    
-   **`COPY . /app`**
Copies the contents of the current directory on the host machine (where the Dockerfile is located) into the `/app` directory in the container.
    
-   **`RUN pip install --no-cache-dir -r requirements.txt`**
Installs the dependencies listed in `requirements.txt`. The `--no-cache-dir` option prevents caching to reduce the image size.
    
-   **`CMD ["python", "app.py"]`**
Specifies the command to run when the container starts. Here, it runs the Python script `app.py`.

> **How They Work Together**
> - The **`Dockerfile`** is used to create a Docker image that encapsulates your Python application and its dependencies.
> - The **`docker-compose.yml`** file creates and manage the service, using the image built from the Dockerfile and mapping the container's port to the host.
> - The **`app.py`** runs inside the container, serving the "Hello, World!" response when accessed at `http://localhost:8000`.



3. **Run Your Docker File**
To run your docker file, you need to start the `Docker` app on your machine, then head over to your terminal. Open the `DXHeroes` file and use the `docker-compose up` command to start the service. Now, go to your browser and run `http://localhost:8000/`, you should find `Hello, World!` staring at you 😊.
    
> [Complete code on GitHub](https://github.com/CodeLeom/DXheroes)

## Considerations for Docker Compose

1.  **Resource Management**
Running multiple containers can consume significant resources. You need to monitor your container performance and adjust resource limits in the `docker-compose.yml` file.
    
2.  **Production Use**
Docker Compose is primarily used for development and testing. For production environments, consider tools like [Kubernetes](https://kubernetes.io/) (K8s) for advanced orchestration.
    
## Further Resources for Docker Compose

-   [Docker Compose Documentation](https://docs.docker.com/compose/) – Official documentation for Docker Compose.
-   [Docker Cheat Sheet for Developers](https://gist.github.com/CodeLeom/81c8c60678d9cf8d1ed4ec00e4a10374)
- [Running Puppeteer in a Docker Environment](https://blog.apify.com/puppeteer-docker/) - Running Puppeteer in Docker simplifies the setup process and ensures that it works perfectly in every environment, from a developer's machine to the production server.

Docker Compose simplifies managing multi-container applications by organizing configurations and workflows into a single YAML file. Using Docker Compose, developers can streamline development, ensure consistency, and reduce complexity in multi-service environments.