---
slug: multiple-environments
stages:
  - development
short_description: Multi-environment usage is a recommended practice for software development as it helps in maintaining an optimal workflow for the project which overall helps in delivering the project in a reliable and timely manner.  
tags: 
  - continuous integration
  - continuous delivery
  - software development
  - quality control
  - development environment
  - testing environment
  - staging environment
  - production environment 
  - performance testing
  - continuous integration
  - revision control
keywords:
  - continuous integration
  - continuous delivery
  - effective deployment
  - load testing
  - devops
  - git
  - testing
  - testing environment
  - staging environment
  - production environment
  - continuous integration
---

# Multiple Environments

**TL;DR**

Multi-environment usage is a recommended practice for software development as it helps in maintaining an optimal workflow for the project which overall helps in delivering the project in a reliable and timely manner. This structured release management process allows rollout, testing, and rollback in case of problems.

## What Is a Multi Environments

Multi-environment is a recommended practice that allows you to ship code to the end-user without any bugs or issues. This type of practice is very reliable as it involves multiple stages or environments. It also helps the company to reply to the user's feedback efficiently and immediately.

These environments are divided according to the tiers of the project. A particular individual related to a specific environment may not have access to other environments to avoid security breaches or human errors.

We can classify Multi-environments into different stages, according to the level of development across environments:

1. **Development environment**
   The development environment (dev) is the environment in which software changes are developed, most simply an individual developer's workstation. This environment includes development tools like a compiler, integrated development environment, different or additional versions of libraries and support software, etc., which are not present in a user's environment.
   A developer working on this environment has a working copy of source code on their machine, and changes are submitted to the repository, being committed either to the trunk or a branch, depending on development methodology. The environment on an individual workstation, in which changes are worked on and tried out, may be referred to as the local environment or a sandbox.
2. **Testing environment**
   The purpose of the test environment is to allow human testers to exercise new and changed code via either automated checks or non-automated techniques. After the developer accepts the new code and configurations through unit testing in the development environment, the items are moved to one or more test environments. Upon test failure, the test environment can remove the faulty code from the test platforms, contact the responsible developer, and provide detailed test and result logs. 
   If all tests pass, the test environment or a continuous integration framework controlling the tests can automatically promote the code to the next deployment environment.
3. **Staging environment**
   The staging environment or pre-production environment is an environment for testing that exactly resembles a production environment. It seeks to mirror an actual production environment as closely as possible and may connect to other production services and data, such as databases. 
   The primary use of a staging environment is to test all the installation/configuration/migration scripts and procedures before they're applied to a production environment. This ensures all major and minor upgrades to a production environment are completed reliably, without errors, and in a minimum of time.
   Another important use of staging is performance testing, particularly load testing, as this is often sensitive to the environment.
   Staging environmet is also used by some organizations to preview new features to select customers or to validate integrations with live versions of external dependencies.
3. **Production environment**
   The production environment can also be said as a live environment, particularly for servers, as it is the environment that users directly interact with. Deploying to production is the most sensitive step; it may be done by deploying new code directly, or by deploying a configuration change.
   Deploying a new release generally requires a restart, unless hot swapping is possible, and thus requires either an interruption in service (usual for user software, where applications are restarted) or redundancy – either restarting instances slowly behind a load balancer or starting up new servers ahead of time and then simply redirecting traffic to the new servers.
   

![Multiple Environments](/files/Multiple_Environments.png)</br>
Source: [Using Multiple Environments to Improve Your Development Workflow](https://deploybot.com/blog/using-multiple-environments-to-improve-your-development-workflow)

## Why Use Multi Environments

Multi Environments helps you with:

- **Keeps the team productive**
  Having multiple environments enables a team to work on parallel development efforts. If there are several people working on the app, using a different environment for each group of people helps keep the team productive.
- **It reduces or eliminates downtime and thus saves the company from loss of revenue**
  Thoroughly testing software through multiple environments allows you to deliver a product to your users that is just as reliable and dependable as your company. If the software directly deals with the exchange of money, errors in the code could also lead to losses. 
- **Provides better security**
  To protect the integrity of your production data, you should limit access to it. Team members should have clearly defined roles and access rights to different parts of the system. Having multiple environments makes this possible. If you have separate development and production environments, it prevents developers from accidentally messing with or deleting production data.
- **Saves time and helps in getting the product to the market faster**
  Using multiple environments when developing software saves time as no one has to wait on another person for shared resources. Which will help in launching the product as soon as possible.
- **Promotes innovation**
  When you are working with multiple environments, your team is free to experiment on environments that are especially dedicated for this. Since there is no fear of messing with the live code, the team can use a separate environment to test out ideas and even deploy the code to a server where it can be made available to some test users who can give feedback on it, which the team can use to decide if they should implement the changes on the main codebase.
  
## Issues the Multi Environments Solves

- Human errors
- [Poor Code Quality](/problems/poor-code-quality)
- [Meaningless Work](/problems/meaningless-work)
- Developers vs. Operations wars
- Security Breaches 
- [Long Feedback Loops](/problems/long-feedback-loops)

## How to Implement Multi Environment

Follow these steps to set up a basic Multi Environment pipeline:

1. **Set up a Continuous Integration server**
   - Choose an existing server, such as [Jenkins](https://jenkins.io/), or [go.cd](https://www.gocd.org/).
   - Set up your first build (a link to your source code, for example, on GitHub and a command to build the application)
   - Ensure that it runs every time a change is checked into source control.
2. **Enable Multi-Environment support**
   - **With GitFlow**
      - In this approach, you can use the structure [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) provides. However, it will require your team to understand [GitFlow](/practices/git_flow).
      - Here is the outline:
          | Branch             | Environment to Deploy |
          |--------------------|-----------------------|
          |feature/**, develop | dev                   |
          |release/**          | staging               |
          |master              | production            |
   - **Without GitFlow**
      - This approach simply ties a specific branch to a specific firebase project.
      - Here is the outline:
          | Branch             | Environment to Deploy |
          |--------------------|-----------------------|
          |develop             | dev                   |
          |staging             | staging               |
          |master              | production            |

## Common Pitfalls of the Multi Environment

- Exaggerated reliance on the Multi Environment   
- Can be time-consuming
- Rigid pipeline design

## Resources for the Multi Environment

- Deploybot blogs: [Using Multiple Environments to Improve Your Development Workflow](https://deploybot.com/blog/using-multiple-environments-to-improve-your-development-workflow)
- [Multi-Environment deployment for a React App](https://medium.com/@giologist/ci-cd-multi-environment-deployment-for-a-react-app-on-firebase-using-github-actions-f48bc6b08b21)
- [Deployment environment](https://en.wikipedia.org/wiki/Deployment_environment)
