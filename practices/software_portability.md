---
slug: software-portability
stages:
  - development
short_description: Portability in high-level computer programming is the usability of the same software in different environments. 
tags:
  - software portability
  - application
  - source code
  - data
  - redevelopment
keywords:
  - software
  - portability
  - cross-platform
  - redevelopment
---

# Software Portability

## TL;DR

Portability is the ability to use the same software in different environments or platforms. It increases software's usability, whilst introducing other challenges.

## What Is Software Portability?

Software portability is the possibility to use the same software in different environments. It applies to the software that is available for two or more different platforms or can be recompiled for them. 

Common Portability kinds are applicatiion, source code and data portability.

![It works on my machine](/folder/it_works.jpg)
[It works on my machine](https://www.architect.io/blog/the-importance-of-portability)

### Application Portability

Portable applications can be converted from one computer environment to another one.  With regards to Windows apps, such programs would not use the Registry. In a totally portable application, all related files would be stored in a single folder so it can be copied with one command. Such a folder has many sub-folders, and they are copied in the same transaction. [Walled gardens](https://www.pcmag.com/encyclopedia/term/walled-garden) prevent data from being easily transferred. 

###  Source Code Portability

It is possible to compile software for different operating systems and processors provided that it is written in a programming language that supports compilation for the respective platforms. 

As users usually don't have access to the source code and they are not skilled enough to do it, it's a task for developers.

### Data Portability 

Portable data can be moved from one database or repository to another. It implies that the data are in electronic files that are readily accessible rather than only visually on a screen. Otherwise, the data must be retyped word for word into another application and on-screen images must be captured one at a time. 

## Why You Might Want Software Portability?

For Sales teams, the main reason for porting is to reach wider audience. There are many hardware and software platforms; it is not only the Windows world. More users mean increased profit. 

For Dev-ops, portability comes with stability. You don't want to have different behaviours on some platforms, you don't want to waste time adressing enviroment related configs. Imagine tunning your enviroments every single staging, no dev-ops team wants to deal with unnecessary work just because code is not flexible. 

For Dev teams, Portable software can be easily used on other platforms. So, if your dev team moves to different enviroment, you don't want to waste time and resources on re-development. They also want too avoid lock-ins (on certain libraries or dependencies).

## Problems Software Portability Helps to Solve

- [Poor Code Quality](problems/poor-code-quality)
- [Demotivated Team](/problems/demotivated-team)
- [Increased Cost](/problems/increased-cost)
- [Bad Product-Market Fit](/problems/bad-product-market-fit)
- [Long Feedback Loops](/problems/long-feedback-loops)

## How to Implement Software Portability

Portability usually has 3 dimensons: Vertical (Development lifecycle), Horizontal (Platform/provider migration) or Deep (Replication). Vertical portability refers to consistency of software throught whole lifecycle, which can be ensured with [Infrastructure as code](/practices/infrastructure-as-code). Horizontal stands for platform/dependency flexibility. With good [Dependency management](/practices/updating-the-dependencies), single sourcing and good platform support plan, you can master the Horizontal dimension. Deep means how scalable and replicable your code/architecture/software is.

### Strategies for Portability

-   Transferring installed program files to another computer of basically the same architecture.
-   Reinstalling a program from distribution files on another computer of basically the same architecture.
-   Building executable programs for different platforms from source code; this is usually called “porting”. 

### Cross-platform Software 

This software is implemented on multiple platforms. There are two types of cross-platform software:
- the first one requires individual building or compilation for each platform
- the second one can be directly run on any platform.

Cross-platform applications can run e.g. on Microsoft Windows, Linux, and macOS. Another you can try is to use platform-independent language (for example, while C# is great for Windows, on Linux it is not the best option).

## Software Portability Pitfalls

**Porting vs. Redevelopment**

Should the existing program be ported, or should an equivalent program be redeveloped? Such questions are not always easy to answer. 

**Degree of Portability** 

What degree of portability is desired for the various environments? Again, it can be difficult to deal with this and similar questions. 

**Cost vs. Benefits**

It can be very difficult to determine the cost vs. benefits ratio. So, it is possible that the costs exceed the benefits.

## Resources for Software Portability 

- [Software portability](https://en.wikipedia.org/wiki/Software_portability)
- [Software portability](https://www.pcmag.com/encyclopedia/term/software-portability)
- [DEVELOPING PORTABLE SOFTWARE](https://link.springer.com/content/pdf/10.1007%2F1-4020-8159-6_3.pdf)
- [Issues in the Specification and Measurement of Software Portability](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.97.6878&rep=rep1&type=pdf)

