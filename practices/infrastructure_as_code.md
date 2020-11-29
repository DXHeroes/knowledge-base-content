---
slug: infrastructure-as-code
stages:
  - Development
  - Maintenance 
short_description: Infrastructure as code (IaC), is both a principle and a set of tools, a modern way to manage the infrastructure minimising the manual work.
tags:
  - infrastructure as code
  - IaC tools
  - IaC principles
  - DevOps
keywords:
 - azure
  - terraform
  - kubernetes
  - morris
  - IaC principles
  - DevOps
covered_by_dx_scanner: false
---

# Infrastructure as Code
**TL;DR** 
Infrastructure as code (IaC), is both a principle and a set of tools, a modern way to manage the infrastructure minimising the manual work.

## What is Infrastructure As Code
IaC is a principle (or process) of provisioning and managing your infrastructure through machine-readable definitions instead of using physical hardware configuration. To put it better terms, instead of manually setting everything by yourself, you create a configuration file. Some people call IaC golden rule for [DevOps](/practices/devops).

![Infrastructure as code](/files/infrastructure_as_code.png)
[Infrastructure as code](https://pixabay.com/cs/vectors/cloud-computing-oblak-za%C5%99%C3%ADzen%C3%AD-data-1989339/)

With IaC you can spin your resources to match your needs (utility computing). New peak of visitors? With IaC you just adjust to new load.
 
### Old Approach
Before IaC, Ops and Devs had hard time with managing your resources. You were always setting up your servers, configuring networks, creating routing tables, or installing software — all that on your hardware. If you had more visitors, it could take weeks to adjust for this load. Not only that, but any update took a lot of time (updating databases, checking dependencies and much more) and resources.

That is why IaC is gaining popularity as it is a modern response to old situation.
 
### Approaches of IaC - Declarative (functional)
Focuses on _What_. What is the desired end look? With this approach, you declare the end state and system makes it happen

### Approaches of IaC - Imperative (procedural)
Focuses on _How_. How should my existing infrastructure change? With this approach, you define the steps the system takes to arrive at desired end state.

## Why You Might Want Infrastructure As Code

The main measurable advantages of IaC are:

###  Cost

IaC practices and tools can reduce cost of the service (save you money). Through automatisation you are lowering the manual labour which allows Ops/Dev Ops team to focus on something else. Moreover, through spinning you are using your resources optimally.

### Speed

Together with [Continous Delivery/Deployment](/practices/continuous-delivery), you are delivering the final product faster. That is because you are cutting on the manual steps.


### Risk

With automation, you are lowering the risk of human error, and with configuration files instead of manual labour, you are increasing reliability (the system will always behave the same way). Using source control you can audit changes. DevOps or Ops teams are able to write tests for your IaC. 


## Problems Infrastructure As Code Helps to Solve
* [Increased Cost](/problems/increased-cost)
* [Long Feedback Loops](/problems/long-feedback-loops)
* [Meaningless work](/problems/meaningless-work)
* Snowflake Servers
* Configuration Creep

## How to Implement Infrastructure As Code

Before exploring possible tools, there are general rules to follow for maximal effect:
1. **Collaboration** Devs, Ops or DevOps teams should collaborate on configuration and provisioning.
2. **Write Tests** One of the most notable values of IaC. Start with [Unit testing](/practices/unit-testing),[Performance testing](/practices/performance-testing) or Integration testing.
3. **Source control** your configuration files. Use practices like [Semantic versioning](/practices/semantic-versioning) or commit name rules.
4. **Minimal documentation** since your code should be self-explaining. However, on bigger project you can use updated documentation.

IaC Tools to consider:
* [AWS CloudFormation](https://aws.amazon.com/cloudformation/)
* [Azure Resource Manager](https://docs.microsoft.com/cs-cz/azure/azure-resource-manager/management/overview)
* [Google Cloud Deployment Manager](https://cloud.google.com/deployment-manager)
* [Puppet](https://puppet.com/)
* [Terraform](https://www.terraform.io/)
* [Vagrant](https://www.vagrantup.com/)

## Common Pitfalls of Infrastructure As Code
- The management can be against moving towards IaC since they don’t see the results immediately
- IaC opens code-like issues such as question of code maintenance, working with someone’s code or just question of collaboration
- For some tools, there is a general lack of code samples 
- The integration with CI/CD pipeline can be tricky
- Devs can have problems learning with IaC tools


## Resources for Documentation Testing
* [Infrastructure as Code by Kief Morris: Chapter 1](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/ch01.html)
* [Infrastructure as Code by Kief Morris: blog](https://infrastructure-as-code.com/)
* [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code)
* [Implementing infrastructure as code](https://www.thoughtworks.com/talks/implementing-infrastructure-as-code)
* [What Is Infrastructure as Code? How It Works, Best Practices, Tutorials](https://stackify.com/what-is-infrastructure-as-code-how-it-works-best-practices-tutorials/)
* [Kief Morris](http://kief.com)
* [Implementing Infrastructure as Code](https://www.hashicorp.com/resources/implementing-infrastructure-as-code)
* [Infrastructure as code: The engine at the heart of DevOps
](https://techbeacon.com/enterprise-it/infrastructure-code-engine-heart-devops)
* [Chef Tutorial – Transform Infrastructure Into Code](https://www.edureka.co/blog/chef-tutorial/)
* [Top 12 Infrastructure as Code (Iac) Tools](https://blog.inedo.com/top-12-infrastructure-code-tools)
