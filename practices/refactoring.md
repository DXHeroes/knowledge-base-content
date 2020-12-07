---
slug: refactoring
stages:
  - development
short_description: In computer programming and software design, code refactoring is the process of restructuring existing computer code—changing the factoring—without changing its external behavior.
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
---

# Refactoring

**TL;DR**

In computer programming and software design, code refactoring is the process of restructuring existing computer code—changing the factoring—without changing its external behavior.

## What is Refactoring

In programming and software terms, refactoring means cleaning of code. It is a controlled technique used for improving the design of existing code. By refactoring the code, one can improve the code readability and reduce its complexity.

![Refactoring](/files/refactoring.png)

> A good program is as good as its code.

If the code of a program is easily readable and understandable then the program made by it is better as compared to a code which is messy.

The essence of refactoring is applying small coding changes that preserves the functionality. The small changes when combined together bring about a significant change.

## Why You Might Want to Refactor?

- Refactoring the code makes it easier to understand for other people.
- It avoids duplications and hence you follow the Don't Repeat yourself (DRY) principle
- It reduces the code which is less maintenance.
- It passes all the tests.
- Debugging and maintenance is easier.

## Problems the Refactoring Helps to Solve

- Improves the objective attributes of code(length, duplication, coupling ,etc.)
- Maintenance is much easier.
- Code Debugging is improved.
- Improves Code smell.
- Improved readability.
- Reduced complexity.
- Helps code understanding.
- Allows reusable design elements.

## How to Implement Refactoring

1. Find the code which is used in many places.
2. Create its own function.
3. Call that function in the place.
4. Repeat till steps 1-3 cannot be done.

**Some things to be taken care of **

- If code is not cleaner refactoring is not done.
- Don't include new features.
- Try making small changes step by step. 
- All tests should pass

## Common pitfalls of Refactoring

- Challenging as small changes are not likely to be made because of laziness i.e. "Too small to worth doing".
- Expensive and risky in view of management.
- Bug introduction is quite common.
- Does not mean rewriting the code.
- Does not mean fixing the bugs

## Resources for Refactoring

- [Refactoring Guru](https://refactoring.guru/refactoring)
- [Wikipedia](https://en.wikipedia.org/wiki/Code_refactoring)
- [Science Direct](https://www.sciencedirect.com/topics/computer-science/refactoring)
- [Agile Alliance](https://www.agilealliance.org/glossary/refactoring/#q=~(infinite~false~filters~(postType~(~'page~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'refactoring))~searchTerm~'~sort~false~sortDirection~'asc~page~1))
- [Pros and Cons](https://www.c-sharpcorner.com/article/pros-and-cons-of-code-refactoring/)
