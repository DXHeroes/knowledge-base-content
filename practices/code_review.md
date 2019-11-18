---
slug: code-review
stages:
  - development
short_description: Code Review is an important practice for checking each other's code. The reviewers are other developers from the team. The goal is to uncover potential mistakes that could slip through testing.
tags:
  - code review
  - pull requests
  - feedback
  - rituals
  - meaningless work
  - feedback
  - linting
  - code coverage
  - mvp
  - pair programming
  - penetration testing
  - good developer experience
  - proper bug reporting
  - fail fast
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

**TL;DR**

Code Reviews are an important practice for checking each other's code. The goal is to uncover potential mistakes that could slip through testing.

## What Is a Code Review

A Code Review is a software quality assurance practice in which developers check each other’s code, usually before merging the code. Code Reviewing saves time and money as the team is able to find potential bugs that can slip undetected through testing. It is more difficult and more expensive to fix bugs in later stages of development. Code Reviews let the team learn and gain new information and a new point of view. It also accelerates the growth of junior developers as they see real world current code examples.

![Code Review](/files/code_review.png)  
[Code Like A Girl: The 7 steps to a complete Code Review](https://code.likeagirl.io/the-7-steps-to-a-complete-code-review-abdfd39e75f1)

**The reviewer checks the code for:**

- Changes in the code
- Mistakes, or potential mistakes
- Consistency with the assignment
- Quality of comments
- Adherence to coding standards
- Security Breach

## Why You Might Want the Code Review

Code Reviewing is a very important tool for developing process. It improves code quality and makes the codebase more stable. For developers, Code Review can be a great opportunity to get feedback from others (it can be done by pair programming).

**Code Review:**

- Helps developers work together and build relationships
- Can be a way to onboard and train new team members
- Enables experienced developers to mentor less experienced colleagues
- Reduces the product cost as issues are identified at an early stage
- Improved software quality
- Creates a natural knowledge share process across the team
- Can be a part of a job interview - Testing how advanced the developer is by how many issues they identify

## Problems the Code Review Solves

- [Poor code quality](/problems/poor-code-quality)
- [Toxic team culture](/problems/toxic-team-culture)
- Knowledge hoarding
- ["Not my problem" mentality](/problems/not-my-problem-mentality)
- [Meaningless work](/problems/meaningless-work)
- Unsuccessful product
- Unhappy clients

## How to Implement the Code Review

- Code Reviews are usually done via [pull requests](/practices/pull-requests), and before merging. There are many tools for creating pull requests, such as:
  - [GitHub](https://github.com/)
  - [GitLab](https://about.gitlab.com/)
  - [Gitcolony](https://www.gitcolony.com/)
  - [PullRequest](https://www.pullrequest.com/).
- Pick one of two possible approaches:
  - Develop something and send it to another developer to check it.
  - Checking the code during pair programming.
- It is very important that developers talk to each other, and that they all understand what is the code supposed to do.

**8 tips for Code Reviewing:**

1. Know what to look for, and ensure that you understand what the code does
2. Test the code before Code Reviews
3. Do not review for more than 60 minutes at a time or you lose focus
4. Review fewer than 400 lines at a time
5. Set goals and expectations
6. Automate where possible with the right tools
7. Establish a systematic method of how to fix mistakes
8. Give constructive feedback that helps rather than just criticize

## Common Pitfalls of the Code Review

- Developers do not want their code to be reviewed because they rely on automated tests more than on the coleague’s opinion.
- Developers merge their own pull requests to save time.
- The Code Review does not help when the developer does not check the code properly. They may trust the author expect them not to make mistakes. Ensure to review the code carefully, we can all make mistakes occasionally.
- The reviewer focuses more on stylistic mistakes instead of functional ones.
- If the team is not very homogeneous and has no clear rules, they can waste time with arguing over meaningless trivia.
- The team spends too much time Code Reviewing where the author creates a pull request for every little code change. Try to limit the creation of pull requests to important code changes.
- If the reviewer does not perform the Code Review immediately, they can lose track.

## Resources for the Code Review

- Perforce: [9 Best Practices for Code Reviews](https://www.perforce.com/blog/qac/9-best-practices-code-reviews)
- Smartbear: [Resources: Code Review](https://smartbear.com/learn/code-review/)
- Medium: [Code Review Best Practices](https://medium.com/palantir/code-review-best-practices-19e02780015f)
