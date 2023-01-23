---
slug: refactoring
stages:
  - development
short_description: Code refactoring is the process of improving the the design of existing code without changing its external behaviour. You can see it as cleaning your code
tags:
  - refactoring
  - code improvement
  - coding practice
  - code review
  - behaviour-neutral
keywords:
  - code
  - quality
  - improvement
author_github_username: K-Kumar-01
---

# Refactoring

**TL;DR**

Code refactoring is the process of improving the the design of existing code without changing its external behaviour. You can see it as cleaning your code from bad smells (over complex solutions, unreadable code and so on).

## What is Refactoring

You can see Refactoring as a controlled technique used for improving the design of existing code. By refactoring the code, you can improve the code readability and reduce its complexity.

![Refactoring](/files/refactoring.png)

> A good program is as good as its code.

If the code of a program is easily readable and understandable then the program made by it is better as compared to a code which is messy.

The essence of refactoring is applying small coding changes that preserves the functionality. The small changes when combined together bring about a significant change.

## Why You Might Want to Refactor?

- Refactoring your code makes it easier to understand for other people.
- It avoids duplications and hence you follow the Don't Repeat yourself (DRY) principle
- It reduces the code which is less maintenance.
- It passes all the tests.
- Debugging and maintenance is easier.

## Problems the Refactoring Helps to Solve

- Improves the objective attributes of code(length, duplication, coupling ,etc.)
- [Poor Code Quality](/problems/poor-code-quality)
- [Demotivated Team](/problems/demotivated-team) from unreadable code
- [Low Bus Factor](/problems/low-bus-factor) by simplyfing your code


## How to Implement Refactoring

1. Find the code which you use in many places.
2. Create its own function.
3. Call that function in the place instead.
4. Repeat till you can not find any frequently used code
5. Commit with the Refactoring label
**Keep in mind during refactoring**

- If code is not cleaner refactoring is not done.
- Don't include new features.
- Try making small changes step by step.
- All tests should pass

## Common pitfalls of Refactoring

- Lack of developer motivation to do these small changes
- Expensive and risky in the view of management.
- Bug introduction is quite common.
- Developer start adding new features, rewriting the code, or fixing bugs during refactoring.
- Does not mean fixing the bugs

## Resources for Refactoring

- [Refactoring Guru: Refactoring](https://refactoring.guru/refactoring)
- [Code Refactoring](https://en.wikipedia.org/wiki/Code_refactoring)
- [Science Direct: Refactoring](https://www.sciencedirect.com/topics/computer-science/refactoring)
- [Agile Alliance: Refactoring](https://www.agilealliance.org/glossary/refactoring)
- [Pros and Cons of Code Refactoring](https://www.c-sharpcorner.com/article/pros-and-cons-of-code-refactoring/)
