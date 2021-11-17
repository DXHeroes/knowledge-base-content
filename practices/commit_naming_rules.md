---
slug: commit-naming-rules
stages:
  - development
short_description: Having a commit naming convention can be of great help, in maintaining the codebase and easing up the development process. Find out more about the good practices around commit naming rules!
tags:
  - commit messages
  - commit names
  - commits
  - git
  - github
  - development process
keywords:
  - commits
  - commit messages
  - commit names
  - git
  - github
  - development process
  - commit rules
  - commit best practices
covered_by_dx_scanner: true
author_github_username: yogesh-hackx
---

# Commit Naming Rules

**TL;DR**

Having a commit naming convention can be of great help, in maintaining the codebase and easing up the development process. Find out more about the good practices around commit naming rules!

![Commit naming guide](/files/commit_guide.png)
[Author unknown](https://dxkb.io)

## Why You Might Want Commit Naming Rules?

Commit messages have become a crucial part of the development process. They allow you to trace back the point in time when you wrote that particular piece of code, or more often they let other developers in your team, track the flow of code, and no one likes tracking code with messy commit messages. Since it is a summary of what changes you did, it is very important to write commit messages that are concise and consistent.

There are many conventions around commit messages, that are widely followed in the developer community.
## Problems that Commit Naming Rules Helps to Solve
- [Poor code quality](/problems/poor-code-quality)
- [Demotivated Team](/problems/demotivated-team)
- [Toxic team culture](/problems/toxic-team-culture)


## How to Implement Commit Naming Rules?

![Commit Message](/files/commit_dear_git.png)

### Add a Type

Commit messages should indicate the type of commit. For that following type you should use these conventions:

- **fix**: Indicates that your commit fixes some bug or something.
- **feat**: Indicates that your commit adds a new feature.

Besides these many organizations like Angular, use their  conventions and commit types like *'build:', 'docs:', 'refactor:',* etc.

### Write Commit Message In the Imperative Mood

Commit messages, especially you should write the subject lines in the imperative mood, i.e., as if you were to command your code to perform some instruction. Like telling what Git should do while applying that commit.

eg. instead of using *"fixed: bug #45",* use *"fix: bug #45" .*

### Explain the What's and Why's Instead of How

The commit message body is the perfect place to explain what your commit does. Don't explain _how_ you did the changes. Instead, show _what_ and _why_ you changed. Commit body is the perfect place to explain these things. Generally, your code should be self-explanatory. Still, if you feel the need to explain how something works, use source comments.

### Commit Convetions

If your repo has unusual commit tags, create a commit conventions document for your team. Commit Conventions are especially helpful when you maintain an open-source repo since they provide guidelines for every contributor. However, if you are using the standard _fix_, _feat_, _bug_, _refactoring_, and so on, you don't need to have them written down.

Besides all these commit naming conventions, there are things that are highly subjective and may vary between developers to developers, like *"should the subject line be capitalized?"* or *"to add or not to add punctuation marks in commit messages?".* Opinions like these may vary from person to person but it's a good practice to be consistent with your conventions.
## Common Pitfalls of Commit Naming Rules
* Developers don't follow the Commit Naming Rules
* The Commit Naming Rules are frequently changed
* Developers don't use Semantic Versioning together with Commit Naming Rules
* Developers hide unreadable code behind explanatory names
### Resources for Commit Naming Rules

- [Conventional Commits](https://www.conventionalcommits.org/en)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [How to Write Good Commit Messages: A Practical Git Guide](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)
