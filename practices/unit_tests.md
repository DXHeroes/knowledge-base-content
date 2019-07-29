---
slug: unit-tests
aspect: processes
stages:
  - development
short_description: Unit tests are a foundation of your testing. They test the smallest pieces of code called units that have to be isolated from a system. Unit tests are small, cheap and easy to maintain. The number of unit tests outnumbers any other types of tests.
tags:
  - unit
  - test
  - function
  - code
  - coverage
  - behavior
keywords:
  - units
  - code
  - isolation
  - test pyramid
  - arrange
  - act
  - assert
---

# Unit Tests

## What Are the Unit Tests

Unit testing is a way to test units - the smallest components of your software, the smallest piece of code. A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation to other tests. If the test relies on an external system, it is not a unit test. Unit tests should be written during the design phase, prior to implementation to prevent defects from being deployed to production. They should be run every time the code is changed and provide a clear description of the feature being tested.

Unit test coverage is a subtype of [code coverage](/issues/code-coverage) - it shows which lines of code were tested by unit tests. However, the goal is not to have a 100% unit test coverage. In fact, you should have as few unit tests as possible and cover as many types of behavior as possible. 100% unit test coverage exists only in a perfect world. While writing unit tests focus on behaviors - adding new tests just to improve coverage leads to tests without any purpose and you would be just wasting your time.

Unit testing can be done manually but it is usually automated. In terms of automated tests, there is a concept called **the test pyramid** that shows how to efficiently balance the automated tests.

![Test Pyramid](/files/unit_tests.png)

[Amazon Alexa: Unit Testing: Creating Functional Alexa Skills](https://developer.amazon.com/it/blogs/alexa/post/35bdad3d-57c8-4623-88c6-815540697af5/unit-testing-create-functional-alexa-skills)

- **Unit Test**
  Unit tests typically test functions, methods, and classes. They are short, cheap and fast to write and maintain. They are focused on one thing/function. They are not dependent on any external systems. When a unit test fails, it is easy to identify the problem.

- **Integration Test**
  Integration test focuses on the point where individual units are combined and tested as a group. The purpose is to test if the interaction between units works.

- **End to End Test**
  End to end tests cover the whole application - from start to finish. They are more expensive and slower to run.

The pyramid shows you that the more high-level you get, the fewer tests you should perform. Write a lot of small and fast unit tests, some integration tests and just a few high-level tests. To maintain this balance, use [continuous delivery](/issues/continuous_delivery) - a practice where you automatically ensure your product is ready to be released into production.

## Why You Might Want the Unit Tests

Unit testing helps you with:

- maintaining your code
- catching defects introduced due to the code change
- lower the potentially harmful impact of changes to your code
- reusing the code
- faster development
- lowering the cost of fixing defects on lower testing level
- a code documentation because the unit tests describe what your product does

## Issues the Unit Tests Solves

- [Poor code quality](/issues/poor-code-quality)
- [Increased cost](/issues/increased-cost)
- Meaningless work
- Insufficient performance
- [demotivated team](/issues/demotivated-team)

## How to Implement the Unit Tests

- Find a tool or a framework suitable for your programming language such as [NCrunch](https://www.ncrunch.net/), [EmbUnit](https://www.embunit.com/), or [HtmlUnit](http://htmlunit.sourceforge.net/).
- Do not try to reach 100% unit test coverage. Focus on the behaviors of the tested system.
- The unit test name should explain what was tested.
- Perform unit tests continuously and frequently.

**Unit Testing Best Practice:**

- **Arrange:** Set up the test. Make mocking tests for isolationg the behavior. Use inversion of control.
  For more information, see [DZone: Unit Testing 101: Inversion Of Control](https://www.dzone.com/articles/unit-testing-101-inversion).
- **Act:** Run the function and run the test.
- **Assert:** Check if the expected behavior occurred.

## Common Pitfalls of the Unit Tests

- The developer tries to reach 100% code coverage and some of the tests are useless.
- There are more unit tests covering the same behavior.
- The developer tests the code written by somebody else.
- Unit tests are mistaken with integration tests.

## Resources for the Unit Tests

- [Software Testing: Unit Testing](http://softwaretestingfundamentals.com/unit-testing/)
- [SmartBear: What Is Unit Testing?](https://smartbear.com/learn/automated-testing/what-is-unit-testing/)
- [Developers: Unit Tests, How to Write Testable Code and Why it Matters](https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters)
- [Medium: Why Most Unit Testing is Waste — Tests Don’t Improve Quality: Developers Do](https://medium.com/pacroy/why-most-unit-testing-is-waste-tests-dont-improve-quality-developers-do-47a8584f79ab)
