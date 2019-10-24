---
slug: updating-dependencies
stages:
  - development
short_description: Updating dependencies for your application can be a huge pain. But it is a necessary pain! Your whole project can be jeopardized without regular updates. Automatize and keep track of the dependencies’ changes.
tags:
  - libraries
  - lockfile
  - dependencies
  - improvement
  - functionality
  - automated deployment
  - continuous integration
  - continuous delivery
  - continuous deployment
  - unit tests
keywords:
  - software library
  - updating software
  - updating dependencies
  - updating libraries
covered_by_dx_scanner: true
---

# Updating Dependencies

**TL;DR**

Updating dependencies for your application can be a huge pain. But it is a necessary pain! Your whole project can be jeopardized without regular updates. Automatize and keep track of the dependencies’ changes.

## What Are the Libraries

Libraries collect resources for software development. They consist of pre-written code, procedures, classes, scripts, data configurations, and more. Developers add libraries to the program they are developing to get some functionalities, dependencies, or automation without having to program it specifically for their program.

Here are a few advantages in using libraries:

- The library code can be used by multiple different programs. In comparison, the code that is part of the program can be used only within the program.
- While using the library, the program gains the library’s dependencies and does not have to implement the dependencies itself.
- The library can be installed to the program in any lifecycle phase.

## Why You Might Want the Dependencies to Be Updated

Sometimes the updates are arriving almost every day and it can get very annoying. Updating is a pain. It takes a long time and after the update, nothing works as before. But remember - libraries updates might be very important. The functionalities of the specific library you need for your program to be working may change.

You should keep track of those updates, they might contain important changes, for example:

- Security vulnerabilities fixes
- Bug fixes
- Performance improvements
- New functionalities
- Better user interface

You might need some of these changes urgently. Checking them regularly and updating them as soon as possible saves you time and money. You have to update the dependencies anyway, so why to postpone and, therefore, accumulate a maintenance debt?

## Problems the Updated Dependencies Solve

- [Poor Code Quality](/problems/poor-code-quality)
- [Meaningless Work](/problems/meaningless-work)
- Developers vs. Operations wars
- [Long Feedback Loops](/problems/long-feedback-loops)
- Unhappy Clients

## How to Update Dependencies

There are two strategies to implement the regular updates:

1. A common strategy is to install **only the most necessary updates**, such as security fixes. It means especially minor versions and patches. This strategy saves time you would spend with installing all the updates. A lot of developers tend to update as little changes as possible, or they bundle them together to do it just a few times per year. But this strategy brings risks of missing some important updates.

2. Extreme Programming agile approach suggests to **update as much as possible, as often as possible**. This strategy requires a high level of automation - otherwise, the developers become just very expensive updating machines and they soon lose interest in their jobs.

What can help you with the updates automating? Automate these:

- builds
- integration
- assurance
- testing
- releases
- [deployment](/practices/automated-deployment)

Use continuous delivery and continuous deployment. The dependencies updates can be integrated directly into your program delivery pipeline. There are tools that check automatically if there are some new dependencies updates, such as [npm check updates](https://github.com/tjunnone/npm-check-updates) for JavaScript. Npm check updates even upgrades your package.json dependencies to the latest versions.

The second strategy is more expensive than the first one but it lowers the risks. Automation of the updates is probably the best solution.

## Common Pitfalls of Updating Dependencies

1. Developers ignore updating the dependencies because they think it would be just a waste of time.
2. Developers do not automatize library updates.
3. Updating becomes a dependency hell, which can be one of the following problems:
    - Too many dependencies that require large amounts of disk space.
    - The dependency chain is too long: there is a dependency A, which depend on dependency B, which depend on dependency C, etc.
    - The dependencies are in conflict: two of them cannot be used simultaneously but you need both.
    - The updates get stuck in a vicious circle: the dependency A runs with a specific version of dependency B. The dependency B cannot run without a specific version of dependency A. But most of the package managers solve this problem these days.
    - Diamond dependency: the dependency A depends on dependencies B and C, both B and C depend on the dependency D, but B requires version D.1 and C requires version D.2. Only one version of D can exist in the final executable and the update fails.

## Resources for Updating Dependencies

- Arie Van Deursen: [Library Updating. Risk it Now, or Risk it Later?](https://avandeursen.com/2012/11/11/library-updating-risk-it-now-or-risk-it-later/)
- Netcetera: [Software dependencies and keeping them up-to-date](https://www.netcetera.com/home/stories/expertise/20170406-software-updates-inside-it.html)
