---
slug: runbook
stages:
  - development
short_description: A Runbook is a set of standardized documents that describe how to run a computer system. It typically contains a walkthrough how to start, stop, debug and supervise the system.
tags:
  - runbook
  - software documentation
  - visualization
  - proper bug reporting
  - poor code quality
  - feedback
  - code review
  - linting
  - description
  - writing
  - readme
keywords:
  - runbook
  - playbook
  - documentation
  - decision
  - timeline
  - command
  - operation
  - task
author_github_username: prokopsimek
---

# Runbook

**TL;DR**

Runbook is a set of instructions on how to run a computer system. Or how to troubleshoot the system. It is an important tool for people who are unfamiliar with the system and need the basic information (for example, how to start it, stop it, debug etc.).

## What Is a Runbook

A Runbook (also referred to as a playbook) is a compilation of procedures and operations that describe how to run a computer system or network. Runbook typically contains procedures for starting, stopping, debugging and supervising the system. It is typically created by technical writers and it often contains step-by-step decision trees (often with a timeline):

![Decision Tree](/files/runbook.png)
[Dfarq: What is a runbook?](https://dfarq.homeip.net/what-is-a-runbook/)

The goal of a Runbook is to allow other operators, with prerequisite expertise, to run and troubleshoot the system effectively. Runbooks can be electronic or an actual book. The electronic version offers an advantage of copy+paste the commands which speeds up the procedure. Runbook automation allows you to automate the operations using tools, such as [Rundeck](https://www.rundeck.com/open-source), or [Microsoft Azure](https://azure.microsoft.com).

There are two types of Runbooks:

- **Specialized** Runbooks are about fixing specific issues.
- **Generalized** Runbooks focus on day-to-day checks to make sure things run smoothly.

## Why You Might Want the Runbook

- Runbook allows people who are unfamiliar with the incident to receive specific instructions on how to resolve it.
- It lets you focus on important tasks without worrying that you will not remember all the procedures.
- Also, the more you put into your Runbooks, the more likely are your products reproducible and therefore sellable.

## Problems the Runbook Solves

- [Increased cost](/problems/increased-cost)
- [Poor code quality](/problems/poor-code-quality)
- [Meaningless work](/problems/meaningless-work)
- Unhappy clients
- [Toxic Team Culture](/problems/toxic-team-culture)
- Knowledge hoarding
- ["Not my problem" mentality](/problems/not-my-problem-mentality)

## How to Implement the Runbook

Runbook should contain the minimum information necessary to successfully perform a specific procedure. If you want to document a specific task you are just about to make, follow these steps:

1. Record your screen while performing the task.
2. Play the recording and pause every time you made an action.
3. Write notes about each action. Make a step-by-step procedure.
4. Take screenshots for actions that need a better explanation.

Your Runbook should have consistent formatting and naming convention so it is easy to navigate. Use standardized language to avoid any confusion. Specify goals for each Runbook and mention prerequisites and timelines for each task.

## Common Pitfalls of the Runbook

- Not updating Runbooks thoroughly enough
- Not revising Runbooks
- Not synchronizing Runbooks within each system

## Resources for the Runbook

- Will Code For Food: [The Example Runbook](https://willcode4foodblog.wordpress.com/2014/10/26/scorch-html-documentation-tool-part-1-the-example-runbook/)
- VictorOps: [The Checklist for Running Your Runbooks](https://victorops.com/blog/runbooks-checklist)
- Dfarq: [What is a runbook?](https://dfarq.homeip.net/what-is-a-runbook/)
