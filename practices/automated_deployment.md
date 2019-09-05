---
slug: automated-deployment
stages:
  - development
short_description: An Automated Deployment is a practice that allows application to be deployed across various stages of development process - from development to production
tags:
  - continuous integration
  - continuous delivery
  - increased cost
  - integration
  - code coverage
  - devops
  - git flow
  - unit tests
  - devops
keywords:
  - continuous integration
  - continuous delivery
  - effective deployment
  - deployment pipeline
  - devops
  - git
  - testing
  - automation
  - Travis CI
  - Zeit Now
---

# Automated Deployment

## What is an Automated Deployment

An Automated Deployment is a practice that allows the application to be deployed across various stages of the development process - from development to production. It contributes to more efficient and reliable deployments.

The key objective of the Automated Deployment is to minimize a need for manual intervention in the Deployment Pipeline. Deployment Pipeline is the process of taking code from your version control (e.g. git) and making it available to users of your application.

We can classify Automated Deployment approaches into different categories according to the level of automation coverage across environments:

1. Continuous Integration

Continuous Integration is a practice of daily integrating code changes. Everything that has been developed keeps integrating daily. Each integration is automatically and immediately verified and tested to detect possible errors.

2. Continuous Delivery

Continuous Delivery is a practice of keeping the code in a deployable state at any given time. Continuous Delivery is an extension of Continuous Integration to automate release to the staging environment. With Continuous Delivery, you have a production-ready version of your build.

3. Continuous Deployment

Continuous Deployment is a practice of fully automating the entire process of the Deployment Pipeline. Every change in the source code is deployed to production automatically, without explicit approval from a developer.

![Automated Deployment](/files/automated_deployment.png)


## Why You Might Want the Deployment to be Automated

The Automated Deployment helps your team with:
- **Reducing possibility of errors**
  Manual Deployment is error-prone. Any process involving human input introduces the possibility of errors. 
- **Saving time**
  Manual deployment is time-consuming. The job is often assigned to testers and developers in a development team who can otherwise spend their time working on improving the application.
- **Consistency and repeatability**
  Once configured, the process will be the same every time a release is initiated. It contributes to more frequent and stable releases.

## Issues the Automated Deployment Helps to Solve

- [Increased cost](/problems/increased_cost)
- [Poor Code Quality](/problems/poor_code_quality)
- [Meaningless Work](/problems/meaningless_work)
- Developers vs. Opearations wars
- No runtime version management
- Long Feedback Loops

## How to Implement Automated Deployment

- [Freecodecamp: Learn how to automate deployment on GitHub pages with Travis CI](https://www.freecodecamp.org/news/learn-how-to-automate-deployment-on-github-pages-with-travis-ci/)
- [FlavioCopes: Deploy Node.js application with Zeit Now](https://flaviocopes.com/zeit-now/)

## Common Pitfalls of the Automated Deployment

- **Exaggerated reliance on the Automated Deployment**
  It is always good to have an alternative strategy to avoid being stuck when your Automated Deployment configuration is broken. 
- **The project is too small**
  Implementing Automated Deployment can be time-consuming. Ensure that you do not spend more time implementing it than actually developing the product. 
- **Rigid pipeline design**
  Rigid pipeline prevents the team from optimizing their processes. Pipeline should be structured such that it is flexible and can incorporate sudden changes.
- **Long and slow deployment pipelines** – There are a lot of steps between code commit and deployment. 


## Resources for the Automated Deployment
- [Electric Cloud: Deployment Automation](http://electric-cloud.com/wiki/display/releasemanagement/Deployment+Automation)
- [Atlassian: Practical Continuous Deployment](https://www.atlassian.com/blog/continuous-delivery/practical-continuous-deployment)
