---
slug: waterfall
stages:
  - development
short_description: The Waterfall methodology is a linear project management approach where customer's requirements are collected at the beginning of the project. Then a sequential project plan is created to satisfy those requirements. The concept is appropriate for small and clear projects.
tags:
  - waterfall
  - project management
  - agile events
  - design sprint
  - scrum
  - kanban
  - mvp
  - feedback
  - backlog
keywords:
  - project management
  - agile
  - scrum
  - kanban
  - waterfall
  - royce
---

# Waterfall

**TL;DR**

Waterfall model sees the software development as a set of tasks that need to be finished before moving to the next one. Like a waterfall, everything moves strictly downwards (or in one direction). This method is often criticized for it's rigid structure and Agile is widely mentioned as an opposite approach.

## What Is Waterfall

The Waterfall methodology is a linear project management approach where customer's requirements are collected at the beginning of the project. Then the Project Manager creates a sequential project plan to satisfy those requirements. The concept was first introduced in 1970 by [Winston W. Royce](https://en.wikipedia.org/wiki/Winston_W._Royce). It was quickly adopted in a variety of industries due to its logical sequencing and easy implementation.

## Why You Might Want Waterfall

- The Waterfall model is very simple to understand and to use.
- It can be an effective way for small low-budget projects.
- It is suitable for a project in the non-changing environment, such as architectural engineering.
- Each phase has well-understood milestones, specific deliverables and a review process. Then the project is very rigid, easily manageable and measurable.
- It works well in situations where the project development is easily predicted. Or in situations where you can exactly determine the requirements at the beginning of the project.
- In contrast to Agile methodologies, it is easier to document results due to non-changing outputs.

## Problems the Waterfall Helps to Solve

- [Increased cost](/problems/increased-cost)
- [Bad product-market fit](/problems/bad-product-market-fit)
- [Demotivated team](/problems/demotivated-team)
- [Meaningless work](/problems/meaningless-work)
- Unsuccessful product
- Unnecessary functions
- Unhappy clients
- [Disconnect Between Business and IT](/problems/disconnect-between-business-and-it)

## How to Implement Waterfall

The Waterfall model follows several phases in the sequential order:

1. **Requirements**  
   It is assumed that all requirements will be captured at the initial phase. It allows every other phase to be planned without further customer involvement until the product is complete.
2. **Analysis**  
   All the gathered requirements are deeply analyzed whether they are valid or invalid.
3. **Design**  
   The system design specifies hardware and other technical requirements, such as programming language, data layers, or services. The phase also helps to define the overall system architecture of the solution.
4. **Implementation**  
   In this phase, the code is created. Developers implement all models, business logic, and service integrations that were specified in the previous phase.
5. **Testing**  
   The customer reviews the product (usually via testers) to make sure that it meets the requirements agreed at the beginning of the project. It is not uncommon for this phase to cause a necessary repeat of the implementation, in order for revealed bugs to be properly fixed.
6. **Deployment**  
   Once testing is completed and there are no bugs or any kind of issues, then the project is released (usually into the market or customer's environment).
7. **Maintenance**  
   There may be some issues which come up after release. In this phase, those issues are fixed, and the patches are deployed. Also, enhancements of the product (better versions) are released too. It usually solves dedicated support team.

All these phases are cascaded to each other, flowing steadily downwards (like a waterfall) through the phases. You can move to the next phase if the previous one is successfully completed. Usually, you could not revert back to the previous phase perform any change. The phases also do not overlap.

![Waterfall](/files/waterfall.png)
[Testing Freak: What is Waterfall Model in Software Testing and What are Advantages and Disadvantages of Waterfall Model](http://testingfreak.com/waterfall-model-software-testing-advantages-disadvantages-waterfall-model/)

## Common Pitfalls of Waterfall

- **Lack of adaptability**  
  As already mentioned, each phase is discrete and largely exists in isolation. This is especially true with the requirements phase. Once the customer’s requirements are collected, the customers do not play any role in the actual development of the software.
- **Impossible to change requirements**  
  The rigid structure of the Waterfall model needs the clients to know all their requirements at the very beginning of the project, which is often impossible. When they see the product in the later stages and change the requirements, the whole project has to be redesigned and go through all the phases again.
- **Ignoring the client's feedback**  
  Due to the strict step-by-step process, the client's feedback from the implementation phase can often be too late. In some cases, it can lead to a devastating realization. A costly and time-consuming solution is to step back to previous phases due to a new requirement or change coming from the customer.
- **Delayed verification**  
  Waterfall model mostly avoids testing until late parts of the life cycle. This means that most bugs or even design issues will be discovered until very late in the process.

Disadvantages of the Waterfall mentioned above tries to solve [Agile](/practices/agile) methodologies, such as [Scrum](/practices/scrum), [Kanban](/practices/kanban), or [XP](https://en.wikipedia.org/wiki/Extreme_programming) (Extreme Programming).

## Resources for Waterfall

- Project Manager: [Waterfall Methodology in Project Management](https://www.projectmanager.com/software/use-cases/waterfall-methodology)
- Testing Freak: [What Is Waterfall Model in Software Testing and What are Advantages and Disadvantages of Waterfall Model](http://testingfreak.com/waterfall-model-software-testing-advantages-disadvantages-waterfall-model/)
- Tutorialspoint: [SDLC - Waterfall Model](https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm)
- Airbrake: [Waterfall Model: What Is it and When Should you Use it?](https://airbrake.io/blog/sdlc/waterfall-model)
