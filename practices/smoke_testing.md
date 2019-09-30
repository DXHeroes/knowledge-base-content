---
slug: smoke-testing
stages:
  - launch
short_description: It is a test aimed to verify that the most important features of the product really work. This term was used during testing hardware and the product passed the test when it did not burn or smoke.
tags:
  - smoke testing
  - testing
  - quality assurance
  - increased cost
  - proper bug reporting
  - feedback
  - unit testing
  - performance testing
  - penetration testing
  - unit testing
  - pilot project
  - code coverage
keywords:
  - increased cost
  - testing
  - build
  - regression
  - quality assurance
---

# Smoke Testing

**TL;DR**

Smoke Testing aims to verify if the most important product features really work. This term was used during testing the hardware and the product passed the test when it did not burn or smoke. How to create an efficient Smoke Test? Read this article!

## What Is Smoke Testing

A Smoke Test is aimed to verify that the most important features of the product really work. This term was used during testing hardware and the product passed the test when it did not burn or smoke.
Smoke Tests are a subset of test cases which cover the most important functionalities of the product. They also typically answer basic questions like "Does the application run?" or "Does activation of a new functionality do anything?"
The advantage of the Smoke Tests is in the speed of verification or obtaining a result.

## Why You Might Want the Smoke Testing

Smoke Testing helps reduce the risk of major product errors. It is usually performed before the start of functional testing of the application, which helps to reduce the cost of testing itself and repairing functional errors.

![Smoke Testing](/files/smoke_testing.jpg)  
[ReQtest: 11 Quick Tips to Master Smoke Testing](https://reqtest.com/testing-blog/smoke-testing-2/)

Smoke Testing is typically used for:

- uncovers problems early
- identify all possible major obstacles in product functionality
- can reveal integration issues
- may act as a first check whether some new change did not break a product

It is always a good idea to apply Smoke Testing from the user experience point of view, for example, if we run an e-shop, the Smoke Test should be focused on the main functions, such as the user's ability to log in, or if he adds goods to the "basket", so it appears there indeed, and so on.

## Problems the Smoke Testing Helps to Solve

- [Increased cost](/problems/increased-cost)
- [Demotivated team](/problems/demotivated-team)
- [Poor code quality](/problems/poor-code-quality)
- ["Not my problem" mentality](/problems/not-my-problem-mentality)
- [Toxic Team Culture](/problems/toxic-team-culture)
- [Long Feedback Loops](/problems/long-feedback-loops)

## How to Implement the Smoke Testing

For the correct application of Smoke Tests, the following rules apply:

- **Regular**  
   Smoke Testing should be performed after each application build and always before the version is submitted for functional testing.
- **Simple**  
   The test should be focused only on the essential functionality whose chances can completely prevent the use of the product/application.
- **Fast**  
   The Smoke Test should consist of simple steps to test functionality, should not include alternative scenarios and "marginal" functionalities that are within the scope of functional tests.

**Example of the Smoke Test:**

| Test scenario                | Description                                                                      | Test Steps                                                                                                                                                | Expected Result              | Status |
| ---------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------ |
| Login with valid credentials | Test of login into the application to ensure that a valid user is able to log-in | 1. Open the application<br /> 2. Select the log-in function<br /> 3. Enter valid username and password<br /> 4. Press ENTER or click on the log-in button | The user should be logged in | Passed |

## Common Pitfalls of the Smoke Testing

- Confuse Smoke Testing with Regression Testing
- Too many scenarios and a lot of too detailed tests which increase the time for testing
- Smoke Test is part of the functional testing
- Small or missing automation of the test

## Resources for the Smoke Testing

- Guru99: [What is Smoke Testing? How to do with EXAMPLES](https://www.guru99.com/smoke-testing.html)
- QAFox: [What is Smoke Testing ?](http://www.qafox.com/smoke-testing/)
- ReQtest: [11 Quick Tips to Master Smoke Testing](https://reqtest.com/testing-blog/smoke-testing-2/)
