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

Updating dependencies for your application can be a huge pain. But it is essential. Your whole project can be jeopardized without regular updates. Automating this process helps keep track of any changes, and allows developers to focus on developing.

## What Is a Library?

A library is a collection of data. It consists of several kinds of data, including pre-written code, procedures, classes, scripts, data configurations, and more. Developers add libraries to the programs in development to provide resources for functions, dependencies, or automation, without having to program it specifically for their program.

## Why Use libraries?

- Library code can be used by multiple different programs. Code that is part of the program can be used only within the program, leading to duplication of code, and inefficient use of storage. Potential discrepancies can also occur if copies of the same data are updated separately.
- While using the library, the program's dependencies can be fulfilled by the library’s resources, and so the program does not require separate implementation of the dependencies.
- The library can be installed to the program in any lifecycle phase, so the program can be expanded whenever required.

## Why Dependencies Should Be Updated

Sometimes updates are arriving almost every day, and it can get very annoying. Updating can be disruptive in terms of time taken, and also after the update, functionality can change. Library updates can be very important, however, and the functionailty of the specific library you need for your program may be dependent on the changes applied by these updates.

You should keep track of those updates, especially important changes for example:

- Security vulnerability and loophole closure
- Bug fixes
- Performance improvements
- New and increased functionality
- User experience improvements

You may need some of these changes urgently. Checking updates regularly and applying updates as soon as possible saves you time and money. You have to update the dependencies anyway, so apply them on schedule, and negate any maintenance debt that may otherwise build up.

## Problems the Updated Dependencies Solve

- [Poor Code Quality](/problems/poor-code-quality)
- [Meaningless Work](/problems/meaningless-work)
- Developers vs. Operations wars
- [Long Feedback Loops](/problems/long-feedback-loops)
- Unhappy Clients

## How to Update Dependencies

There are two strategies to implement regular updates:

1. A common strategy is to install **only the most necessary updates**, such as security fixes, especially minor versions and patches. This strategy saves time you would spend installing optional updates. Many developers tend to update as little as possible, or wait until they have several, and then apply upodates and patches a few times per year. This strategy brings risks of either missing important updates, or leaving your system vulnerable if urgent security patches are not immediately applied.

2. Extreme Programming agile approach suggests to **update as much as possible, as often as possible**. This strategy requires a high level of automation - otherwise, the developer's workload is compromised by time spent updating machines, risking a loss of interest and motivation in their jobs.

What updates can you automate?:
  - builds
  - integration
  - assurance
  - testing
  - releases
  - [deployment](/practices/automated-deployment)

Employ continuous delivery and continuous deployment. Dependency updates can be integrated directly into your program delivery pipeline. There are tools that check automatically if there are some new dependency updates, such as [npm check updates](https://github.com/tjunnone/npm-check-updates) for JavaScript. Npm check updates even upgrades your package.json dependencies to the latest versions.

The second strategy is more expensive, but lowers the risks. Update automation is probably the best solution.

## Common Pitfalls of Updating Dependencies

1. Developers ignore updating the dependencies because they consider it to be a waste of time.
2. Developers fail to automate library updates.
3. Too many dependencies take up large amounts of disk space.
4. The dependency chain is too long, increasing risk of failure:
    - Dependency A, depends on dependency B, which depends on dependency C, etc.
5. The dependencies are in conflict: Two cannot be used simultaneously, but you need both. Applying updates as soon as they become available can minimize such conflicts.
6. Updates get stuck in a vicious circle:
    - Dependency A runs with a specific version of dependency B, Dependency B cannot run without a specific version of dependency A. Most package managers solve this problem these days, but why take the risk?
7. Diamond dependency:
    - Dependency A depends on dependencies B and C, and both B and C depend on the dependency D.
    - Dependency B requires version D.1 and C requires version D.2.
    - Only one version of D can exist in the final executable and the update fails.

## Resources for Updating Dependencies

- Arie Van Deursen: [Library Updating. Risk it Now, or Risk it Later?](https://avandeursen.com/2012/11/11/library-updating-risk-it-now-or-risk-it-later/)
- Netcetera: [Software dependencies and keeping them up-to-date](https://www.netcetera.com/home/stories/expertise/20170406-software-updates-inside-it.html)
