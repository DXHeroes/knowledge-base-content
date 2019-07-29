---
slug: semantic-versioning
aspect: processes
stages:
  - development
short_description: Semantic Versioning is a universal software versioning system. It helps users to understand what is the stage of the product.
tags:
  - semver
  - initial development
  - pre-release
  - production
keywords:
  - semver
  - versions
  - major
  - minor
  - patch
  - hyphen
  - identifier
  - initial development
  - pre-release
  - production
---

# Semantic Versioning

## What Is a Semantic Versioning

Semantic Versioning (SemVer) is the most popular system of versioning unique states of the project. To have a universal way of versioning helps to keep things clean and simple and to keep track of the software changes.

SemVer uses a sequence of three digits in the format of x.y.z:

- **x stands for a major version**
  API changes, backwords incompatible (incompatible with the previous versions)
- **y stands for a minor version**
  new features implementation, framework or functionality enhancement, backwards compatible
- **z stands for a patch**
  bug fixes, hot-fixes, maintenance releases, backwards compatible

![Semantic Versioning](/files/semantic_versioning.png)
[Geeks For Geeks: Introduction to Semantic Versioning](https://www.geeksforgeeks.org/introduction-semantic-versioning/)

This example of SemVer tells you that this is the fourth major release. It has 7 minor versions with new features. It is also the sixth patch in this minor version (six versions of bug fixes).
Keep in mind, that SemVer starts at 0.1.0. Not at 0.0.1, as you might assume. The reason is that there were no bug fixes yet as would the number 0.0.1 suggest. We have to start with a set of features.

**The Three Phases of SemVer:**

1. **Initial Development**

- Major version zero (0.y.z.) is for initial product development.
- The public API is not stable and anything may change during this phase.
- Keeping major version at zero lets everyone know that the software is not production-ready yet.

2. **Pre-release**

- A lot of tests and code changes are done during this product version. A pre-release version is for testing that everything is ok and ready to release.
- This version is still not production-ready.
- Add a hyphen and identifier at the end of the version number. For example, a pre-release for version 1.0.0 could be 1.0.0-alpha.1. When you need another build, it becomes 1.0.0-alpha.2, and so on.

3. **Production**

- When the public API is stable and the product is ready, you can release the major software version (1.y.z).
- Version numbers in this phase are equal to releases.

## Why You Might Want the Semantic Versioning

- Versioning the software ensures you that every team member or user can keep track of what has been changed and when.
- SemVer helps to explain what type of changes were made. It also informs users about possible software updates.
- SemVer lets you know which version of a product is no longer backwards compatible.

## Issues the Semantic Versioning Solves

- [Demotivated team](/issues/demotivated-team)
- [Meaningless work](/issues/meaningless-work)
- Unsuccessful product
- Unnecessary functions
- Expensive development
- Unhappy client
- Toxic team culture

## How to Implement the Semantic Versioning

To use SemVer efficiently, follow these steps:

- Look through the commits since the last release and decide if this will be a major, a minor or a patch release. Add a new appropriate version number.
- Tag your releases. You can use, for example, [GitHub](https://github.com/).
- Track all of the changes in a [Changelog](https://keepachangelog.com/) (a file with a list of changes) so the users know what is the difference between the product versions.

## Common Pitfalls of the Semantic Versioning

- Weak version management neglects users.
- Users judge product value based on the version number.
- The stakeholder asks for a specific version number based on marketing choices or client’s preferences.
- Too many major versions are being released in a short time period. It discourages the users from adopting new versions. If you are required to make breaking changes, you need to thoroughly think through the impact of those changes. Plan the changes ahead with deprecation notices.

## Resources for the Semantic Versioning

- [Geeks For Geeks: Introduction to Semantic Versioning](https://www.geeksforgeeks.org/introduction-semantic-versioning/)
- [Sitepoint: Semantic Versioning: Why You Should Be Using it](https://www.sitepoint.com/semantic-versioning-why-you-should-using/)
- [Jering: Semantic Versioning in Practice](https://www.jering.tech/articles/semantic-versioning-in-practice)
- [Medium: A brief guide to Semantic Versioning](https://medium.com/@jameshamann/a-brief-guide-to-semantic-versioning-c6055d87c90e)
