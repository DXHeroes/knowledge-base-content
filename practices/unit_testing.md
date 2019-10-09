---
slug: unit-testing
stages:
  - development
short_description: Unit Tests are a foundation of your testing. They test the smallest pieces of code called units that have to be isolated from a system. Unit Tests are small, cheap and easy to maintain. The number of Unit Tests outnumbers any other types of tests.
tags:
  - testing
  - quality
  - code coverage
  - continuous integration
  - staged rollout
  - proper bug reporting
  - smoke testing
  - performance testing
  - penetration testing
  - pilot project
keywords:
  - units
  - Code Coverage
  - unit testing
  - code
  - isolation
  - test pyramid
  - arrange
  - act
  - assert
  - testing
  - test
---

# Unit Testing

**TL;DR**

Use Unit Tests to test the smallest pieces of your code - units.

## What Is Unit Testing

Unit testing is a way to test units - the smallest components of your software, the smallest piece of code. A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation to other tests. If the test relies on an external system, it is not a Unit Test. Unit Tests should be written during the design phase, prior to implementation to prevent defects from being deployed to production. They should be run every time the code is changed and provide a clear description of the feature being tested.

Unit Test coverage is a subtype of [Code Coverage](/problems/code-coverage) - it shows which lines of code were tested by Unit Tests. However, the goal is not to have a 100% Unit Test coverage. In fact, you should have as few Unit Tests as possible and cover as many types of behavior as possible. 100% Unit Test coverage exists only in a perfect world. While writing Unit Tests focus on behaviors - adding new tests just to improve coverage leads to tests without any purpose and you would be just wasting your time.

Unit Testing can be done manually but it is usually automated. In terms of automated tests, there is a concept called **the test pyramid** that shows how to efficiently balance the automated tests.

![Unit Testing](/files/unit_testing.png)
[Amazon Alexa: Unit Testing: Creating Functional Alexa Skills](https://developer.amazon.com/it/blogs/alexa/post/35bdad3d-57c8-4623-88c6-815540697af5/unit-testing-create-functional-alexa-skills)

- **Unit Test**  
   Unit Tests typically test functions, methods, and classes. They are short, cheap and fast to write and maintain. They are focused on one thing/function. They are not dependent on any external systems. When a Unit Test fails, it is easy to identify the problem.  
  There are two types of Unit Tests:

  1. **Positive Testing** - testing the code by giving valid data.
  2. **Negative Testing** - testing the code by giving the Invalid data.

- **Integration Test**  
   Integration test focuses on the point where individual units are combined and tested as a group. The purpose is to test if the interaction between units works.

- **End to End Test**  
   End to end tests cover the whole application - from start to finish. They are more expensive and slower to run.

The pyramid shows you that the more high-level you get, the fewer tests you should perform. Write a lot of small and fast Unit Tests, some integration tests and just a few high-level tests. To maintain this balance, use [continuous delivery](/problems/continuous_delivery) - a practice where you automatically ensure your product is ready to be released into production.

## Why You Might Want the Unit Testing

Unit Testing helps you with:

- maintaining your code
- catching defects introduced due to the code change
- lower the potentially harmful impact of changes to your code
- reusing the code
- faster development
- lowering the cost of fixing defects on lower testing level
- a code documentation because the Unit Tests describe what your product does

## Problems the Unit Testing Solves

- [Poor code quality](/problems/poor-code-quality)
- [Increased cost](/problems/increased-cost)
- [Meaningless work](/problems/meaningless-work)
- [Demotivated team](/problems/demotivated-team)
- [Bad Product-Market Fit](/problems/bad-product-market-fit)
- [Demotivated Team](/problems/demotivated-team)
- Unsuccessful Product
- Unhappy Clients

## How to Implement the Unit Testing

- Find a tool or a framework suitable for your programming language. For example:
  - [Jest](https://jestjs.io/) or [NCrunch](https://www.ncrunch.net/) for JavaScript
  - [RSpec](https://rspec.info/) for Ruby
  - [JUnit](https://junit.org) for Java
  - [EmbUnit](https://www.embunit.com/) for C or C++
  - [NUnit](https://nunit.org/) for C++
- Focus on the behaviors of the tested system.
- The Unit Test name should explain what was tested.
- Perform Unit Tests continuously and frequently.

**Unit Testing Best Practice:**

- **Arrange**  
  Set up the test. Make mocking tests for isolationg the behavior. Use inversion of control.  
  For more information, see [DZone: Unit Testing 101: Inversion Of Control](https://www.dzone.com/articles/unit-testing-101-inversion).
- **Act**  
  Run the function and run the test.
- **Assert**  
  Check if the expected behavior occurred.

## Common Pitfalls of the Unit Testing

- The developer tries to reach 100% Code Coverage and some of the tests are useless.
- There are more Unit Tests covering the same behavior.
- The developer tests the code written by somebody else.
- Unit Tests are mistaken with integration tests.

## Resources for the Unit Testing

- [Software Testing: Unit Testing](http://softwaretestingfundamentals.com/unit-testing/)
- [SmartBear: What Is Unit Testing?](https://smartbear.com/learn/automated-testing/what-is-unit-testing/)
- [Developers: Unit Tests, How to Write Testable Code and Why it Matters](https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters)
- [Medium: Why Most Unit Testing is Waste — Tests Don’t Improve Quality: Developers Do](https://medium.com/pacroy/why-most-unit-testing-is-waste-tests-dont-improve-quality-developers-do-47a8584f79ab)
