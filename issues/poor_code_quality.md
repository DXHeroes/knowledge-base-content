---
slug: "poor-code-quality"
aspect: "architecture"
stages:
  - "development"
short_description: Poor code quality mainly describes buggy code or code with high coupling and low cohesion that is hard to maintain. Bad code quality can also lead to frequent code repetition or suspiciously slow implementation.
tags:
keywords:
  - bugs
  - quality
  - obsolete
  - team culture
  - libraries
---

# Poor code quality

## What the Poor code quality is?

Poor code quality is an umbrella term for multiple issues with the codebase:

- Code that exhibits buggy behavior
- Slow implementation
- Messy code with high coupling and low cohesion (a.k.a. spaghetti code)
- Unmaintainable code
- Usage of obsolete libraries/frameworks
- Code repetition that leads to costly refactoring

If left unchecked, poor code quality can lead to issues in software delivery. It can bring the development to a halt and if the root causes are not addressed, it can lead to long periods of refactoring or a complete rewrite.

## Reasons of the poor code quality

### Team culture

Poor code quality can be caused by a team that “doesn’t give a shit”. Make sure that the team knows their purpose.

Another reason may be a lack of senior expertise within the team.

Poor code quality can be caused by long-term technical debt accumulation, give the team some time for refactoring the code and pay-off the technical debt.

### Processes

No or weak quality assurance practices can lead to poor code quality rather quickly.

- Make sure, your team does code review and pull requests.
- Introduce unit tests and code coverage to catch bugs early in development.
- Implement CI/CD so that code has to pass all the tests before it can be merged.
- Add testers into the team and employ manual testing
- Ensure that your software development methodology (SCRUM/Kanban) leaves enough time for refactoring and writing a production quality code. Decrease the workload on the team and see if the code quality improves

### Architecture

Architecture that has a bad fit with the requirements of the software being written can be the cause for poor code quality.

Make sure your architecture supports code reuse if you have a problem with code repetition.

The particular functionality you are trying to deliver can be hard to implement within your current architecture leading to verbose/buggy/hard to maintain code. Try to modify the architecture so it fits the use case.
