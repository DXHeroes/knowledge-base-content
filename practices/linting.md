---
slug: linting
aspect: processes
stages:
- development
short_description: Linting is a process of flagging programming and stylistic errors and verifying the code quality. You can also use auto fixer to get rid of the flagged errors.
tags:
- linter
- code
keywords:
- style
- checking
- analyzing
- linting
- lint
- analyzer
- checkstyle
- structure
- flagging
- code style
- code
---
# Linting

## What Is a Linting

Lint, or a linter, is a very useful tool for automated analyzing of your source code to look for bugs and stylistic errors. Linter helps to ensure that your code does not include any structural issues which can make your code harder to maintain. Linting became a verb and it is the process of flagging the functional and structural problems. The lint tool is a basic static code analyzer. The term linting comes from a Unix utility for C.

![Linting](/files/linting.png)
[Linting](https://www.perforce.com/blog/qac/why-linting-important-and-how-use-lint-tools/)

Linters are available for most programming languages. Here are the most common ones:

- for JavaScript: [ESLint](https://github.com/eslint/eslint)
- for Java: [Checkstyle](https://checkstyle.org/)
- for Python: [Pylint](http://pylint.pycqa.org/en/latest/)
- for Swift: [Swiftlint](https://realm.io/)
- for Ruby: [rust-clippy](https://github.com/rust-lang/rust-clippy)
- for more information, see [Hugo Martins: Awesome Linters](https://github.com/caramelomartins/awesome-linters)

## Why You Might Want the Linting

- Linting helps you reduce errors and improve the quality of your code.
- It is an automated check and it saves the developers’ time.
- It improves the code readability. It unifies the style within the team and therefore safes the time during the code review.
- It can automatically correct some mistakes (auto fix).

## Issues the Linting Solves

- [Increased cost](/issues/increased-cost)
- [Poor code quality](/issues/poor-code-quality)
- [Meaningless work](/issues/meaningless-work)

## How to Implement the Linting

- Linting should happen early in the development phase, before the [code review](practices/code-review) and testing. It has to be integrated into the developer environment.
- Implement the linting to the [continuous integration](/practices/continuous-integration).
- Ensure that your code follows standard rules. Otherwise, the linter flags more than you need. You can override the default settings or disable rules for specific files but it can bring more trouble.
- Turn on the auto fixer for as many errors as possible. After the implementation, fix all the issues from the auto fix.
- Make a separate pull request so the other developers understand that you started using a linter.

## Common Pitfalls of the Linting

- A high number of searched errors can lead to high false positive and false negative rates. Also, automatically corrected errors have to be rewritten by hand.
- Too many rules and therefore too many notifications can get annoying. Turn on the auto fixer and get rid of as many marked errors as possible.
- Implementing the linting without informing your colleagues can lead to misunderstandings.
- Do not lint on demand. If you have it, use it.

## Resources for the Linting
- [Perforce: Why Is Linting Important? And How to Use Lint Tools](https://www.perforce.com/blog/qac/why-linting-important-and-how-use-lint-tools)
- [Medium: Why you should always use a Linter …and/or a pretty formatter](https://medium.com/dailyjs/why-you-should-always-use-a-linter-and-or-pretty-formatter-bb5471115a76)
- [IBM: Linting tools to identify and fix code mistakes](https://www.ibm.com/cloud/garage/practices/code/tool_lint/)
