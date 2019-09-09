---
slug: code-coverage
stages:
  - development
short_description: Code Coverage measures the percentage of source code lines that are covered by automated tests.
tags:
  - code coverage
  - mvp
  - reporting
  - testing
  - unit testing
  - integration testing
  - code review
  - linter
  - feedback
  - code reviews
  - continuous integration
keywords:
  - code coverage
  - reporting
  - coverage
  - library
  - code lines
  - function
  - branch
  - coding
  - programming
  - meaningless work
---

# Code Coverage

## What Is a Code Coverage

Code Coverage (CC) measures how many and which specific source code lines are being tested by automated tests (for example, unit or integration test). If you have 90% CC, it means that 10% of the source code is not being tested at the moment. Your goal is to get as close to 100% CC as possible without losing the quality of your code or tests. CC can be used as a key performance indicator for suppliers. The tests should be run by developers, they should not rely only on [Continuous Integration](/practices/continuous-integration).

CC is usually calculated in a Continuous Integration library, for example, [GitLab](https://about.gitlab.com/). This library opens an application that measures the CC automatically. The library provides you with coverage reports, for example:

-   **Function coverage:** how many defined functions have been called.
-   **Statement coverage:** how many statements in the program have been executed.
-   **Branches coverage:** how many control branches structures have been executed.
-   **Condition coverage:** how many boolean sub-expressions have been tested for a true and a false value.
-   **Line coverage:** how many lines of source code have been tested.

## Why You Might Want the Code Coverage

-   The coverage reports are great feedback - they can provide CC for every file.
-   The tools for CC are often open source tools so you can see the quality of the library.
-   CC can be used for measuring the quality of supplies and services.
-   CC can reveal major mistakes during early software phases (building or compiling). It can serve as a Smoke Test.
-   In order to get an official certification, some software is required to use CC. It is mandatory, for example, for air and space transportation, rail transportation, the automotive industry, or for medical applications.

## Problems the Code Coverage Solves

-   [Poor code quality](/problems/poor-code-quality)
-   Unsuccessful product
-   Unhappy clients
-   [Disconnect Between Business and IT](/problems/disconnect-between-business-and-it)
-   ["Not my problem" mentality](/problems/not-my-problem-mentality)
-   [Meaningless work](/problems/meaningless-work)

## How to Implement the Code Coverage

Set up the library for your software and run it under a controlled environment. Use a CC tool to map every executed function. There are a lot of CC tools you can use, for each programming language. For example:

-   Java: [jUnit](https://junit.org/junit5/), [Cobertura](http://cobertura.github.io/cobertura/), or [JaCoCo](https://www.jacoco.org/)
-   JavaScript: [istanbul](https://istanbul.js.org/), or [JSCover](http://tntim96.github.io/JSCover/)
-   PHP: [Clover](https://openclover.org/), or [PHPUnit](https://phpunit.de/)
-   Python: [coverage.py](https://pypi.org/project/coverage/)
-   Ruby: [SimpleCov](https://github.com/colszowka/simplecov)
-   Scala: [Scoverage](http://scoverage.org/)

Update the tests if there are not areas of code that have not been exercised. Developers can check CC reports to advise additional tests to increase the CC. The process can slow down the application so it is not recommended to do it in production.

## Common Pitfalls of the Code Coverage

-   Developers write useless tests to reach 100% CC.
-   A developer corrects the functionality but does not correct the test. That means that a wrong test can fool the CC.
-   A deveoper writes new code and applies wrong tests. The CC declines.

## Resources for the Code Coverage

-   Microsoft: [Use Code Coverage To Determine How Much Code Is Being Tested](https://docs.microsoft.com/en-us/visualstudio/test/using-code-coverage-to-determine-how-much-code-is-being-tested?view=vs-2019)
-   Atlassian: [Code Coverage](https://www.atlassian.com/continuous-delivery/software-testing/code-coverage)
-   Innominds: [How Does Code Coverage Help In Testing?](https://www.innominds.com/blog/how-does-code-coverage-help-in-testing)
-   Jeroen Mols: [The 100% Code Coverage Problem](https://jeroenmols.com/blog/2017/11/28/coveragproblem/)
