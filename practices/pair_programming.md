---
slug: pair-programming
stages:
  - development
short_description: Pair programming is a technique of two programmers sharing a single workstation. The "driver" writes everything down and the "navigator" watches and makes suggestions. They switch the roles when necessary.
tags:
  - pair programming
  - sharing
  - Mentoring
  - agile events
  - code review
  - feedback
  - mvp
  - good developer experience
  - proper bug reporting
  - poor code quality
keywords:
  - pair programming
  - code review
---

# Pair Programming

**TL;DR**

Pair programming is a technique of two developers sharing a single workstation.
When two developers work on the same computer, things can get messy. Learn how to benefit from this way of working.

## What Is Pair Programming

Pair programming is a practice of two programmers working together on the same task at a single computer. Typically, one of them is a driver (or a pilot) and the second one is a navigator. The driver writes the code and the navigator reviews the code and plans the action. The goal is to increase software quality without impacting time to deliver. When two people work on the same project at a single computer, they add as much functionality as if they work separately but it is much higher in quality.

![Pair Programming](/files/pair-programming.svg?sanitize=true)
[Tuple’s Pair Programming Guide](https://tuple.app/pair-programming-guide/)

Pair programming is a social skill and it takes time to learn it. The programmers have to suppress their egos, they have to listen to each other and be patient. It is a skill that needs to be learned. If you have a team member with experience with pair programming, let them show it to the rest of the team so they can imagine how to do it.

Frankly, although it can be very useful, pair programming is not very popular. It is one of the most controversial agile practices with a few pros and a lot of cons.

## Why You Might Want the Pair Programming

- **Less bugs**
   Two heads are better than one. It is not just a saying - considering that you would probably make different mistakes than your programming partner, you can immediately correct each other.
- **Knowledge sharing**
   You can learn so much so fast! Working together is the best opportunity to share ideas and to improve yourself.
- **Less procrastination**
   You do not have time to open Slack or Facebook when someone is watching your screen. You should not feel intimidated though - it is your colleague who you work with, not a mentor or a boss. Pair Programming should be about friendly cooperation.
- **Faster onboarding**
   Junior programmers learn much faster by pairing with experienced team members. Also, you can quickly identify a bad hire.
- **Better team culture**
   Team members get to know each other better if they work in pairs. They get closer and have more subjects to talk about. This leads to a friendlier atmosphere. Coding can be very lonely under other circumstances - reducing this loneliness should be an important goal for every company.

## Problems the Pair Programming Solves

- [Poor code quality](/problems/poor-code-quality)
- [Increased cost](/problems/increased-cost)
- [Demotivated team](/problems/demotivated-team)
- [Low Bus Factor](/practices/bus-factor)
- [Meaningless work](/problems/meaningless-work)
- ["Not my problem" mentality](/problems/not-my-problem-mentality)
- Knowledge hoarding

## How to Implement the Pair Programming

Sit in front of the same monitor and share the keyboard and mouse back and forth. In other words, switch the roles of a driver and a navigator for better results. This way both of the programmers learn to communicate.

These are the main pair programming techniques:

1. **Ping Pong**
   The driver writes a test for behavior and then the navigator makes the test pass. Once the test passes, the developers switch the roles.
2. **Driver-Navigator roles**
   This is a looser form of the Ping Pong style. Sit in front of the same monitor and share the keyboard and mouse back and forth. In other words, switch the roles of a driver and a navigator for better results. This way both of the programmers learn to communicate.
3. **Strong Style pairing**
   The driver does nothing than what the navigator tells them to do. The navigator makes all decisions. When the driver has some idea to implement, they give the keyboard to the navigator and the roles switch.
4. **Unstructured pairing**
   When no specific approach is followed, the role switching happens whenever it makes sense. It works only with well-matched pairs and it helps them code even faster.
5. **Remote pairing**
   Each developer works from a different computer and use software to share screens. The driver shares their screen using a conference tool (such as [Google Hangouts](https://tools.google.com/dlpage/hangoutplugin), [Skype](https://www.skype.com/), or [Webex](https://www.webex.com/)) so that the navigator can see what they are typing. Plugins for [Atom](https://atom.io/) let them share their IDE (integrated development environment) and modify the code at the same time. Also Visual Studio has their own tool [Live Share](https://visualstudio.microsoft.com/cs/services/live-share/).

## Common Pitfalls of the Pair Programming

- Pair programming becomes [Mentoring](/practices/mentoring). Even if one of the programmers is more experienced, pair programming means working together and not Mentoring each other. Mentoring can lead to awkwardness and frustration.
- Overdoing it slows down the workflow. Forcing people to spend all day together in front of the same monitor is not efficient. Programmers stop working effectively after a while. 1,5 - 2,5 hours should be the ideal amount of time.
- The programmers do not communicate effectively and only one of them is doing all the work in the end. The stronger one cannot suppress their ego. The pair programming becomes just observing a coworker how they code. To avoid this issue, it is useful to make the less experienced programmer do the writing.

## Resources for the Pair Programming

- Agile Aliance: [Pair Programming](https://www.agilealliance.org/glossary/pairing/)
- CollabNet: [Pair Programming: Agile Programming Best Practices](https://resources.collab.net/agile-101/pair-programming)
- Medium: [How remote pair programming works and why it can change your life](https://medium.freecodecamp.org/how-remote-pair-programming-works-and-why-it-can-change-your-life-cd7b767dc60f)
- Hackernoon: [The Pros and Cons Of Pair Programming](https://hackernoon.com/the-ultimate-guide-to-pair-programming-b606625bc784)
- Medium: [Pair Programming Guide](https://medium.com/@weblab_tech/pair-programming-guide-a76ca43ff389)
