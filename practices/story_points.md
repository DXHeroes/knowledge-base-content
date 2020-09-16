---
slug: story-points
stages:
  - development
short_description: Story points are generalized rough estimation of a story or a task's effort on which the whole team has agreed. Benefit is fact Story points are only work estimates and not deadlines and are not skills.
tags:
  - story points
  - agile
  - scrum
  - kanban
  - estimation
  - task
keywords:
  - story points
  - agile
  - scrum
  - kanban
  - estimation
  - task estimation
covered_by_dx_scanner: false
---

# Story Points

**TL;DR**

Story points are generalized rough estimation of a story or a task's effort (overall complexity, load of work to do and uncertainty of implementation details) on which the whole team has agreed. Benefit is fact Story points are only work estimates and not deadlines, unlike man-day estimates, and are not skills dependent. Estimates are unique to every team and help track velocity of a team over time.

## What Are Story Points

Some work has to go to every story in the product backlog. Story points are one of the ways to quantify this number on, usually, adjusted Fibonacci scale that doesn't reflect how much time the story will spend in development. Rather than that Story points focus on describing the overall complexity of successfully fulfilling Definition of Done of the story, as it is perceived by everyone involved in development - from designers to QA engineers. This complexity should cover these basic inputs:

- overall complexity - e.g. having a form with simple text boxes versus having a form with logic behind every field
- load of work that has to be put into development - stories that change the core of an app (and thus affect great part of a system and have to be properly tested) are rated higher than story that only tweak a feature
- any risk or uncertainty that might affect work e.g. estimating a story that is further in the product backlog without vaguely specified Definition of Done

There are many different scales on which Story points are set, but the most common is adjusted Fibonacci scale (0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100) which is a relative number that is always related to the underlying specific base feature that was rated in the past.

![Planning Poker](/files/planning-poker.png)
[Planning Poker](https://www.mountaingoatsoftware.com/agile/planning-poker)

## Why You Might Want Story Points

As mentioned above, story points only show the complexity of a task, not how long it would take nor take into account the skills of the assigned developer. Combine this with the fact that over time you get to track team's velocity over time (and team also gets better at estimating) which leads to a more exact idea of how much work can actually be done in one sprint. One of the greatest benefits of Story points though is that it makes everyone on the team get to know the reasoning behind the story, start thinking about it and realizing potential obstacles arising with it.

## Problems Story Points Help to Solve

- [Demotivated Team](/problems/demotivated-team)
- [Disconnect Between Business and IT](/problems/disconnect-between-business-and-it)
- [Increased Cost](/problems/increased-cost)
- [Long Feedback Loops](/problems/long-feedback-loops)
- [Not My Problem Mentality](/problems/not-my-problem-mentality)
- [Meaningless Work](/problems/meaningless-work)
- [Toxic Team Culture](/problems/toxic-team-culture)

## How to Implement Story Points

Implementing Story points is relatively easy, but keep in mind that at the beginning, your team might suffer from insecurities (such as fear of a poor estimate) or inhibition towards trying something new. So, how to implement Story points in a few simple steps:

- get everyone on the team on your planning meeting - designers, developers, scrum master, product owner, quality assurance engineers and so on
- explain what are Story points
- set a baseline story or stories - present the scope and Definition of done of a story and let the team put it on Fibonacci scale
- reach consensus in difficulty of baseline story - whole team has to agree on one number and has to fully understand the DoD of the story
- present a story from your backlog - go into detail until everyone fully understands
- let everyone take a few moments to estimate the effort and put the number on the scale
- everyone shows the number they are thinking at the same time (we recommend using “scrum poker” app)
- team members who show higher or lower numbers than others shall tell others where they see the ease and problems
- discuss and reach consensus without averaging Story points
- you can estimate stories for a few sprints in advance, keep in mind though, this will be only a very rough estimate
- say whether your estimation was correct or not at your retrospective

## Common Pitfalls of Story Points

There are few common pitfalls adopters of Story points fall into. Namely we can recommend you to avoid these problems:

- not taking into account all of three metrics (complexity, amount of work and risk or uncertainty)
- not including everyone on the team which leads to less precise estimates and lowers team morale
- averaging Story points
- adjusting estimates throughout the sprint
- setting a new baseline story every sprint - by doing so you lose the knowledge of team velocity
- adjusting Story point estimate because a not so experienced developer might work on the story - Story points are estimates of difficulty, not time. The difficulty stays the same no matter who works on it
- never re-adjusting the baseline story - when the structure of the team changes a lot, the baseline should be either changed or at least estimated again
- giving in the opinion of the expert in the room

## Resources for 16 Personalities

- [Atlassian.com: Story points and estimation](https://www.atlassian.com/agile/project-management/estimation)
- [Mountain Goat Software: What Are Story Points?](https://www.mountaingoatsoftware.com/blog/what-are-story-points)
- [Visual Paradigm: What is Story Point in Agile? How to Estimate a User Story?](https://www.visual-paradigm.com/scrum/what-is-story-point-in-agile/)
- [Medium.com: 12 common mistakes made when using Story Points](https://medium.com/serious-scrum/12-common-mistakes-made-when-using-story-points-f0bb9212d2f7)
- [Linkedin.com: Story points - Advantages and Disadvantages](https://www.linkedin.com/pulse/advantages-disadvantages-using-story-points-anshika-misra/)
- [Linkedin.com: Everything You Need To Know About Story Points And Pitfalls To Avoid ❌3️⃣](https://www.linkedin.com/pulse/everything-you-need-know-story-points-pitfalls-avoid-3-gabriel-holz/)
