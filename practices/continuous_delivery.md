---
slug: continuous-delivery
stages:
  - development
short_description: Practicing Continuous Delivery means that you are ready to release product changes any time you want. Your product is always ready to deploy to production.
tags:
  - continuous delivery
  - continuous integration
  - automated deployment
  - git flow
  - integration
  - mvp
  - devops
  - good developer experience
  - poor code quality
  - rituals
keywords:
  - release
  - deliver
  - delivery
  - production
  - integrate
  - integration
  - deploy
  covered_by_dx_scanner: false
---

# Continuous Delivery

**TL;DR**

Practicing Continuous Delivery means that you are ready to release product changes any time you want. Your product is always ready to deploy to production.

## What Is a Continuous Delivery

Continuous Delivery is a practice that enables you to release new product changes to your customers at any given time. Continuous Delivery is an extension of [Continuous Integration](practices/continuous-integration) - a practice of merging changes back to the main branch as often as possible. If you practice Continuous Delivery, your tests and the release process are automated. You can release daily or as often as you need.

Why would I want to release my product so often? You might ask. The reason can be just to respond to your customers’ demands as soon as possible and to show them how far is the product you are building for them. Customers expect to see the progress or they can move to another provider. It also saves you a lot of time, money, and potential risks connected to releasing the whole product after weeks of work.

![Continuous Delivery](/files/continuous_delivery.png)  
  [Continuous Delivery](https://medium.com/@Zaiku/continuous-delivery-in-a-nutshell-29f4213dabda)

## Why You Might Want to Practice Continuous Delivery

Practicing Continuous Delivery helps you with:

**Reducing Risks**

- If you deploy smaller changes, fixing bugs is easier
- Bugs are captured early by the automated tests
- Continuous Delivery allows you to test ideas with users before you are finished with the whole feature. You can avoid spending time with a feature that does not bring any value and concentrate on more important things.

**Reducing Costs**

- The Continuous Integration servers run tests automatically
- Automation reduces the cost associated with the release process

**Reducing Time**

- The Quality Assurance team spends less time testing
- Continuous Integration servers can run hundreds of tests in just a few seconds
- The delivery team can engage more often because it gets feedback immediately
- Developers do not switch their focus too often because they can immediately work on fixing broken build before moving to another task
- The traditional phased product delivery often takes weeks or even months. With Continuous Delivery and automation on a daily basis, we can remove the phases and avoid fixing large amounts of work. Therefore, the product is much faster on the market.

## Problems the Continuous Delivery Helps to Solve

- [Increased cost](/problems/increased-cost)
- [Poor code quality](/problems/poor-code-quality)
- [Meaningless work](/problems/meaningless-work)
- [Demotivated team](/problems/demotivated-team)
- [Toxic Team Culture](/problems/toxic-team-culture)

## How to Implement Continuous Delivery

To implement Continuous Delivery, you need:

- To deploy to production as early as possible. Smaller batches of work are easier to troubleshoot.
- To collaborate effectively with every team member.
- Automate as much as possible. Once you start the deployment, there should not be a need for human intervention.
- Your team to write automated tests for each new feature, improvement, or bug fix.
- A Continuous Integration server that monitors your main repository and runs tests automatically.
- To merge changes as often as possible. At least once a day.
- Continuous Integration and tests covering as much of your code as possible.

## Common Pitfalls of the Continuous Delivery

When implementing Continuous Delivery, try to think of it as a way of working. Every team member has to participate. If one of the developers does not merge changes as often as the others, the product is not ready for the release and the concept collapses.

Do not build Continuous Delivery on top of an unstable or non-existent Continuous Integration foundation. Continuous Delivery is just a practice to extend Continuous Integration to the production environment. Without a solid foundation, Continuous Delivery cannot function.

## Resources for the Continuous Delivery

- Continuous Delivery: [Continuous Delivery](https://continuousdelivery.com/)
- Martin Flowler: [ContinuousDelivery](https://martinfowler.com/bliki/ContinuousDelivery.html)
- Atlassian: [Continuous integration vs. continuous delivery vs. continuous deployment](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)
