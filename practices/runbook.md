---
slug: runbook
aspect: processes
stages:
  - development
short_description: A runbook is a set of standardized documents that describe how to run a computer system. It typically contains a walkthrough how to start, stop, debug and supervise the system.
tags:
  - runbook
  - documentation
keywords:
  - runbook
  - playbook
  - procedure
  - documentation
  - decision
  - timeline
  - command
  - operation
  - task
---

# Runbook

## What Is a Runbook

A runbook (also referred to as a playbook) is a compilation of procedures and operations that describe how to run a computer system or network. Runbook typically contains procedures for starting, stopping, debugging and supervising the system. It is typically created by technical writers and it often contains step-by-step decision trees (often with a timeline):

![Decision Tree](/files/runbook.png)
[Dfarq: What is a runbook?](https://dfarq.homeip.net/what-is-a-runbook/)

The goal of a runbook is to allow other operators, with prerequisite expertise, to run and troubleshoot the system effectively. Runbooks can be electronic or an actual book. The electronic version offers an advantage of copy+paste the commands which speeds up the procedure. Runbook automation allows you to automate the operations using tools, such as [Rundeck](https://www.rundeck.com/open-source), or [Microsoft Azure](https://azure.microsoft.com).

There are two types of runbooks:

- **Specialized** runbooks are about fixing specific issues.
- **Generalized** runbooks focus on day-to-day checks to make sure things run smoothly.

## Why You Might Want the Runbook

- Runbook allows people who are unfamiliar with the incident to receive specific instructions on how to resolve it.
- It lets you focus on important tasks without worrying that you will not remember all the procedures.
- Also, the more you put into your runbooks, the more likely are your products reproducible and therefore sellable.

## Issues the Runbook Solves

- [Increased cost](/issues/increased-cost)
- [Poor code quality](/issues/poor-code-quality)
- [Meaningless work](/issues/meaningless-work)
- Unhappy clients
- Toxic team culture
- Knowledge hoarding
- ["Not my problem" mentality](/issues/not-my-problem-mentality)

## How to Implement the Runbook

Runbook should contain the minimum information necessary to successfully perform a specific procedure. If you want to document a specific task you are just about to make, follow these steps:

1. Record your screen while performing the task.
2. Play the recording and pause every time you made an action.
3. Write notes about each action. Make a step-by-step procedure.
4. Take screenshots for actions that need a better explanation.

Your runbook should have consistent formatting and naming convention so it is easy to navigate. Use standardized language to avoid any confusion. Specify goals for each runbook and mention prerequisites and timelines for each task.

## Common Pitfalls of the Runbook

- Not updating runbooks thoroughly enough
- Not revising runbooks
- Not synchronizing runbooks within each system

## Resources for the Runbook

- [Will Code For Food: The Example Runbook](https://willcode4foodblog.wordpress.com/2014/10/26/scorch-html-documentation-tool-part-1-the-example-runbook/)
- [VictorOps: The Checklist for Running Your Runbooks](https://victorops.com/blog/runbooks-checklist)
- [Dfarq: What is a runbook?](https://dfarq.homeip.net/what-is-a-runbook/)
