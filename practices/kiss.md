---
slug: kiss
stages:
  - development
short_description: KISS is a design principle reminding you to stop overcomplicating. It is better to keep things simple. Yet, devs struggle to achieve smart simplicity in their systems
tags:
  - KISS
  - Organisation
  - Task Creation
  - Problem-solving
  - Project management
keywords:
  - KISS
  - scrum
  - Project management
  - Task management
  - Problem-solving

author_github_username: ridlees
---

# KISS

**TL;DR**

KISS is a design principle reminding you to stop overcomplicating work. It is better to keep things simple. However, achieving smart simplicity is hard on all fronts.

## What Is KISS

KISS is a principle standing for **K**eep **I**t **S**imple, **S**tupid (sometimes written as *Keep it stupid simple* or *Keep it simple and straightforward*). Broadly, it tells you that things are better when they are simpler. Some designers use KISS as their central design goal. Simple things are more accessible, usually easier to use, and have a flatter learning curve.

The phrase originally comes from the Lockheed designer team and their head engineer Kelly Johnson (later founder of the Skunk Works). The idea behind KISS *is to get results cheaper sooner and better through the application of common sense to tough problems. If it works, don’t fix it.*

![KISS visually](/files/kiss.jpg)
[Kiss Visually](https://www.clarizen.com/importance-kiss-principle-project-management/)

If you apply the KISS principle to developer work, you should split your hard problems into smaller ones and then solve them with simple solutions. If you are designing architecture, break it into parts (from monoliths to microservices) and **[refactor](/practices/refactoring)** (a lot!). Don't make your code do four things at once (at the same time). You will thank yourself for solutions aiming at simplicity.
In terms of application to [Developer Experience](/practices/good-developer-experience), Johnson mentions that you should *Reduce reports and other paperwork to a minimum* (use KISS for your [agile events](/practices/agile-events)), and in terms of [team culture](/practices/team-culture), he said *let managers run their programs with a minimum of interference. He not only gave you the authority but also the [responsibility](/practices/responsibility)*

## Why You Might Want KISS

It gets the job done (together with [SMART Goals](/practices/smart-goals)). Simpler, cleaner code (structure, database, or architecture) is easier to maintain, less demotivating to work on, or less painful to handover. Documentating, [updating dependencies](/practices/updating-the-dependencies), or even [portability](/practices/software-portability) is less demanding for cleaner stuff. KISS saves you a lot of pain right now and even more in the future.

## Problems the KISS Helps to Solve

- [Demotivated team](/problems/demotivated-team)
- [Increased cost](/problems/increased-cost)
- [Bad product-market fit](/problems/bad-product-market-fit)
- [Sunk Cost](/problems/sunk-cost)
- [Poor Code Quality](/problems/poor-code-quality)
- [Unnecessary features](/problems/unnecessary-features)

## How to Implement KISS

You can sum up the universal and abstract implementation of the KISS (as a principle for any problem-solving) as the following:

1. Stop to gather information.
2. Take (or create if needed) the big, tough problem.
3. Think about how you could simply solve it.
4. Try to find a **simple**  solution.
   1. If you can, congrats! GO TO 4 if you have other work.
   2.  If you can not find a solution, split the problem into smaller pieces. GO TO 4.

In the context of coding, the best implementation goes hand in hand with [DRY]() (don't repeat yourself) and with **[refactoring](/practices/refactoring)**.

In terms of systems, each portion of architecture should do its simple task. Use [YAGNI] to understand which features you should have. Keep the scope simple.

But always have in mind: Keep It Stupid Simple.

## Common Pitfalls of KISS

1.  **Simple being seen as stupid.** To quote Einstein: *Everything should be as simple as possible, but not simpler.* Simple solutions are not bad or lacking to solve complex issues (you should not have a complex issue in the first place, split it!)
2. **Simple as the final answer to everything, without thinking.** There are some tasks that you can not solve only through KISS recursion (split-solve cycle) alone. Sometimes, keeping the big picture is vital, or splitting is not possible. However, with these things (Like business strategy), you can split your solution into simple steps. Doing so gives you actionable things to do.

## Resources for KISS

- [KISS (Keep it Simple, Stupid) - A Design Principle](https://www.interaction-design.org/literature/article/kiss-keep-it-simple-stupid-a-design-principle)
- [fhanik's KISS](https://people.apache.org/~fhanik/kiss.html)
- [Keep It Simple Stupid Principle (KISS Principle)](https://www.techopedia.com/definition/20262/keep-it-simple-stupid-principle-kiss-principle)
- [Clarence Leonard (Kelly) JoHnson - A Biographical Memoir by Ben r. Rich](http://www.nasonline.org/publications/biographical-memoirs/memoir-pdfs/johnson-clarence.pdf)
