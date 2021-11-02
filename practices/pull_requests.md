---
author_github_username: prokopsimek
slug: pull-requests
stages:
  - development
short_description: Pull requests tell other team members that you changed something in the code and pushed the change to a branch in a git repository. Then other members can review and discuss the changes before the changes are merged into the master branch.
tags:
  - pull requests
  - git
  - ci/cd
  - teamwork
  - Continuous Integration
  - continuous delivery
  - Bus Factor
  - code review
keywords:
  - git
  - commit
  - branch
  - repository
  - code
  - quality
  - merge request
  - meaningless work
---

# Pull Requests

Also known as Merge Requests.

**TL;DR**

Pull requests tell other team members that you changed something in the code and pushed the change to a branch in a git repository.

## What Is a Pull Request

A pull request is a practice of getting feedback from other programmers and deciding to "merge" or "do not merge" the code before it is merged into the main codebase.

If "do not merge decision" is made, author of the code can address the comments of others and re-submit the code for another round of review. This continues until all issues with code are resolved and the code can be merged. Or until the idea behind the code is no longer in alignment with the project goals and the pull request is rejected.
For more information, see the [Code Review](/practices/code-review) practice.

Pull request can also trigger CI/CD to make sure all automated tests pass before the code can be merged. For more infomration, see Continuous Integration and Continuous Delivery.

![Pull Request](/files/pull-request.jpeg)
[Tuleap: Pull Request](https://blog.tuleap.org/tuleap-pull-request-open-source-code-review-tool)

## Why You Might Want the Pull Request?

- Using pull request helps you catch the bad code before it is merged into the main codebase.
- Author of the code can also gain valuable feedback on his work that can be immediately applied when fixing the pull request.
- The knowledge of the codebase is spread more evenly in the team when pull requests practice is in place.
- The Team Leader or the senior colleague can use pull requests to continually evaluate performances of other team members.

## Problems the Pull Request Helps to Solve

- [Poor code quality](/problems/poor-code-quality)
- [Demotivated Team](/problems/demotivated-team)
- Knowledge hoarding
- [Toxic Team Culture](/problems/toxic-team-culture)
- ["Not my problem" mentality](/problems/not-my-problem-mentality)
- [Meaningless work](/problems/meaningless-work)
- [Toxic team culture](/problems/toxic-team-culture)

## How to Implement the Pull Requests

1. Explain the pull requests practice to the team, have a discussion about benefits vs. drawbacks the team can be afraid of.
2. Adjust the workload for the team so they have enough time for doing the pull requests.
3. Make rules on who will be reviewing what. The rules will be depending on your goals.
   - If knowledge sharing is a priority, assign the pull request to someone who does not know this part of the codebase.
   - If a code quality is a priority, let the more senior team members do the review of the more junior members' code. Senior members can do the [Code Review](/practices/code-review) with each other.
   - If culture is especially toxic, a simple round-robin style of pull request assignment can be seen as “fair”.
   - Rules can be usually enforced by Version Control System (CVS).
4. Demonstrate to the team the pull request flow in your CVS.
5. Start practicing pull requests within the team.
6. Continuously give feedback to the team, fine-tune the rules so it fits the team.
7. Encourage short pull requests, preferably with not more than 250 lines changed. Large code changes make finding bugs much more demanding and hinder the [code review](/practices/code-review) process. A way to minimize large pull requests is to break down broad features into smaller independent tasks that your dev team can solve individually. Small pull requests allow multiple developers to work on issues simultaneously and thus speed up product development.
8. Practice having relevant titles and descriptions for your pull requests. The pull request description should always explain why the person created the pull request, what issues it solves, and how. The best pull request should also mention relevant people. Additionally, adding a screenshot or GIF to demonstrate the visual changes can go a long way in simplifying [code review](/practices/code-review).

![Example Pull Request](/files/good_pull_request_example.png)
[The anatomy of a perfect pull request](https://medium.com/@hugooodias/the-anatomy-of-a-perfect-pull-request-567382bb6067)

9. Add a pull request template to the root directory of your repositories. Alternatively, you can also add it to docs/ ,PULL_REQUEST_TEMPLATE/ or .github/. Pull request templates are markdown or simple text files that get added to the pull request description automatically. Name the file pull_request_template.md and include the formatting that you want to use in your pull requests. Using templates makes [code review](/practices/code-review) smoother by standardizing pull requests and also helps inexperienced developers write good pull requests.

## Common Pitfalls of Pull Requests

- Make sure that the pull requests are done regularly in your team and that nobody waits way too long for their code to be reviewed. If the code is left unchecked, it can lead to “long feedback loops” and it can effect team motivation.
- Always have at least two possible approvers for each pull request. Having only one person that can merge pull requests could lead to power hoarding.

## Resources for Pull Requests

- Hackernoon: [The art of pull request](https://hackernoon.com/the-art-of-pull-requests-6f0f099850f9)
- Github: [Pull requests on GitHub](https://help.github.com/articles/about-pull-requests/)
- Gitlab: [Merge requests on GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/)
- Medium: [The anatomy of a perfect pull request](https://medium.com/@hugooodias/the-anatomy-of-a-perfect-pull-request-567382bb6067)
