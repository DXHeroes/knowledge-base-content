---
slug: continuous-integration
stages:
  - development
short_description: Continuous Integration is a software development practice that makes developers integrate code changes into a shared repository routinely and frequently. Usually, each person integrates at least daily and that ensures them that their code changes do not break anything.
tags:
  - continuous integration
  - testing
  - integration
  - devops
  - continuous delivery
  - pull requests
  - poor code quality
  - increased cost
  - code review
  - rituals
  - mvp
keywords:
  - continuous delivery
  - devops
  - integrate
  - code change
  - pull requests
  - testing
  - integration tools
  - shared repository
  - gitlab
  - jenkins
  - travis
---

# Continuous Integration

## What Is a Continuous Integration

Continuous Integration (CI) is a practice of daily integrating code changes. Everything that has been developed keeps integrating together on a daily basis. Each integration is automatically and immediately verified and tested to detect any possible errors.

CI helps to develop the product faster - if you do the integration as the last step of the developing process, the project can get stuck for a long time before it is finished. It is impossible to estimate how long the whole integration takes. It is much better to do it immediately, frequently and fix the errors as soon as they are found. That way the workflow is more efficient and the cognitive load is reduced.

CI helps the developers to verify that the changes they made in the code are not going to break anything. They can catch the problems before their changes reach the production stage.

CI is usually implemented with Continuous Delivery (CD) - a practice for producing software in short cycles. You can use one of many tools for both CI and CD, such as [Jenkins](https://jenkins.io/), [Travis CI](https://travis-ci.org/), [GitLab](https://about.gitlab.com/), and others. Those tools integrate and test the code changes automatically.  
For more information, see [Top 8 Continuous Integration Tools](https://code-maze.com/top-8-continuous-integration-tools/).

## Why You Might Want the Continuous Integration

The CI helps your team with:

-   **Reducing the integration risk**  
        When multiple people work on the same project, they usually work on separate tasks or separate parts of the code. It can be tricky to integrate their work together. Integrating frequently reduces the potential risk of problems to a minimum.
-   **Detecting possible problems before they break anything**  
        The automatic tests let you know immediately if there are some problems. It helps you fix the problems before the code changes break anything.  
-   **Improving the code quality**  
        The developers can concentrate on their work better if they do not have to worry too much about the problems the integration might bring.
-   **Improving the quality of life for testers**  
        Multiple code versions help to isolate the bugs more efficiently.
-   **Increasing the confidence and morale of the team**  
        Developers can concentrate better on their work. The team avoids the anxiety associated with deploying changes to production.
-   **Better integration of new members**  
        New members can get into the project much easier. CI enables them to have a clear vision of the building process.

## Problems the Continuous Integration Helps to Solve

-   [Demotivated team](/problems/demotivated-team)
-   [Increased cost](/problems/increased-cost)
-   Unsuccessful product
-   [Toxic team culture](/problems/toxic-team-culture)
-   ["Not my problem" mentality](/problems/not-my-problem-mentality)
-   [Meaningless work](/problems/meaningless-work)

## How to Implement the Continuous Integration

![Continuous Integration](/files/continuous_integration.jpg)  
[FPComplete: Best Practices When Implementing Continuous Integration And Delivery](https://www.fpcomplete.com/blog/continuous-integration-delivery-best-practices)

**Follow these simple rules:**

-   **Check the code frequently**  
        After you check the code, commit the changes to the shared repository. Do not commit broken code.  
-   **The CI tool monitors the shared repository**  
        The CI tool checks the code changes after you commit them.
-   **Run unit tests**  
        Write tests for each code change you integrate to the shared repository. It is important to get used to this step and do not skip it. The CI tool highlights problems and alerts the team when the build or test fails.  
-   **Fix problems immediately**  
        All tests must pass.  
-   **Avoid breaking the code**  

## Common Pitfalls of the Continuous Integration

-   **Too much work**  
        It seems like implementing the CI would bring more work for the developers. The opposite is true -   you already have to build, test and deploy your product. If you do it continuously, it consumes less time. The more complex the product gets, the more difficult it is to manage it.  
-   **Relying on the CI too much**  
        The CI is as good as good are the test results. If the developers have to fix the problems too often, it slows down the development.
-   **Hardware/Software costs**  
        It can seem like an expensive change. In reality, the costs are marginal comparing to the cost of maintaining more complex products at the later stages of development.  
-   **The project is too small**  
        Implementing the CI can be time-consuming. Writing the tests takes a long time. Ensure that you do not spend more time implementing this practice than actually developing the product. On the other hand, even small projects can benefit from the CI if they use the proper CI tools that are easy to set up. Try, for example, [Travis CI](https://travis-ci.org/) or [Circle CI](https://circleci.com/).

## Resources for the Continuous Integration

-   FPComplete: [Continuous Integration Delivery Best Practices](https://www.fpcomplete.com/blog/continuous-integration-delivery-best-practices)
-   Code-Maze: [What Is Continuous Integration](https://code-maze.com/what-is-continuous-integration/#benefitsofci)
-   ThoughtWorks: [Continuous Integration](https://www.thoughtworks.com/continuous-integration)
