---
slug: code-review
stages:
  - development
short_description: Code Review is an important practice for checking each other's code. The reviewers are other developers from the team. The goal is to uncover potential mistakes that could slip through testing.
tags:
  - code review
  - pull requests
  - feedback
  - teamwork
  - code
  - testing
  - rituals
  - meaningless work
  - feedback
  - linter
  - code coverage
  - mvp
  - pair programming
  - penetration testing
  - good developer experience
keywords:
  - code
  - pull request
  - quality
  - merge
  - testing
  - codebase
  - feedback
---

# Code Review

## What Is a Code Review

Code Review is a software quality assurance practice in which developers check each other’s code, most often before merging the code. Code Reviewing saves time and money - the team is able to find potential bugs that can slip undetected through testing. It is more difficult and more expensive to fix bugs in later stages of development. It lets the team learn and gain new information and a new point of view. It also accelerates the growth of junior developers.

**The reviewer checks the code for:**

- Changes in the code
- Mistakes or potential mistakes
- Consistency with the assignment
- The quality of comments
- Adherence to coding standards
- Security Breach

## Why You Might Want the Code Review

Code Reviewing is a very important tool for developing process. It improves code quality and makes the codebase more stable. For developers, Code Review can be a great opportunity to get feedback from others (it can be done by pair programming).

**Code Review:**

- helps developers work together and build relationships
- can be a way to onboard and train new team members
- enables to mentor less experienced developers
- reduces the product cost
- improves software quality
- helps with sharing knowledge across the team
- can be a part of a job interview - it shows how advanced the developer is

## Problems the Code Review Solves

- [Poor code quality](/problems/poor-code-quality)
- [Toxic team culture](/problems/toxic-team-culture)
- Knowledge hoarding
- ["Not my problem" mentality](/problems/not-my-problem-mentality)
- [Meaningless work](/problems/meaningless-work)
- Unsuccessful product
- Unhappy clients

## How to Implement the Code Review

- Code Review is usually done via [pull requests](/practices/pull-requests) and before merging. There are many tools for creating pull requests, such as [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), [Gitcolony](https://www.gitcolony.com/), or [PullRequest](https://www.pullrequest.com/).
- Pick one of two possible approaches: the first one is to develop something and send it to another developer to check it. The second one is checking the code during pair programming.
- It is really important that the developers talk to each other and that they all understand what is the code supposed to do.

**8 tips for Code Reviewing:**

1.  Know what to look for and ensure that you understand what the code does
2.  Test the code before Code Reviews
3.  Do not review for more than 60 minutes at a time or you lose focus
4.  Review fewer than 400 lines at a time
5.  Set goals and expectations
6.  Automate what can be automated with the right tools
7.  Establish a systematic method of how to fix mistakes
8.  Give feedback that helps rather than just criticize

## Common Pitfalls of the Code Review

- Developers do not want their code to be reviewed because they rely on automated tests more than on the coleague’s opinion.
- Developers merch their own pull requests to save time.
- The Code Review does not help when the developer does not check the code properly. Usually they trust the author and do not expect them to make mistakes. Ensure to review the code carefully, to err is human.
- The reviewer focuses more on stylistic mistakes instead of functional ones.
- If the team is not very homogeneous and has no clear rules, they can waste time with arguing over meaningless trivia.
- The team spends too much time with Code Reviewing when the author creates a pull request for every little code change. Ensure to create pull requests for important code changes.
- If the reviewer does not do the Code Review immediately, they can lose track.

##Resources for the Code Review

- Perforce: [9 Best Practices for Code Reviews](https://www.perforce.com/blog/qac/9-best-practices-code-reviews)
- Smartbear: [Resources: Code Review](https://smartbear.com/learn/code-review/)
- Medium: [Code Review Best Practices](https://medium.com/palantir/code-review-best-practices-19e02780015f)
