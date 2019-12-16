---
slug: poor-code-quality
stages:
  - development
short_description: Poor code quality mainly describes buggy code or code with high coupling and low cohesion that is difficult to maintain. Poor code quality can also lead to frequent code repetition or suspiciously slow implementation.
tags:
  - poor code quality
  - development
  - code
  - ci/cd
  - pair programming
  - teamwork
  - pull requests
keywords:
  - bugs
  - quality
  - obsolete
  - team culture
  - libraries
  - code quality
---

# Poor Code Quality

**TL;DR**

Poor code quality is something you want to avoid. Learn what can be the reason for the poor performance of your team.

## What Is the Poor Code Quality

Poor code quality describes buggy code or code with high coupling and low cohesion that is difficult to maintain.

![Poor Code Quality](/files/code_quality.png)
[xkdc: Code Quality](https://xkcd.com/1513/)

Poor code quality is an umbrella term for multiple issues with the codebase:

- code that exhibits buggy behavior
- slow implementation
- messy code with high coupling and low cohesion (a.k.a. spaghetti code)
- unmaintainable code
- usage of obsolete libraries/frameworks
- code repetition that leads to costly refactoring

If left unchecked, poor code quality can lead to issues in software delivery. It can bring the development to a halt. If the root causes are not addressed, it can lead to long periods of refactoring or a complete rewrite.

## Reasons of the Poor Code Quality

- **Team Culture**

  - Poor code quality can be caused by a team that ["doesn't give a shit"](/problems/not-my-problem-mentality). Make sure that the team knows their purpose.
  - Another reason may be a lack of senior expertise within the team.
  - Poor code quality can be caused by a long-term technical debt accumulation. Give the team some time for refactoring the code and pay-off the technical debt.

- **Processes**
  Non-existing or weak quality assurance practices can lead to poor code quality rather quickly.

  - Ensure that your team does [code reviews](/practices/code-review) and [pull requests](/practices/pull-requests).
  - Introduce [Unit Tests](/practices/unit-testing) and [Code Coverage](/practices/code-coverage) to catch bugs early in development.
  - Implement CI/CD so that code has to pass all the tests before it can be merged. For more information, see [Continuous Integration](/practices/continuous-integration) and Continuous Delivery.
  - Add testers into the team and employ manual testing.
  - Ensure that your software development methodology ([Scrum](/practices/scrum)/[Kanban](/practices/kanban)) leaves enough time for refactoring and writing a production quality code. Decrease the team workload and see if the code quality improves.

- **Architecture**
  - Architecture that has a bad fit with the requirements of the software being written can be the cause for poor code quality.
  - If you have a problem with code repetition, ensure that your architecture supports code reuse.
  - The particular functionality you try to deliver can be difficult to implement within your current architecture. It can lead to verbose/buggy/hard to maintain code. Try to modify the architecture so it fits the use case.
