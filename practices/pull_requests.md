---
slug: pull-requests
stages:
  - development
short_description: Pull requests tell other team members that you changed something in the code and pushed the change to a branch in a git repository. Then other members can review and discuss the changes before the changes are merged into the master branch.
tags:
  - pull requests
  - git
  - ci/cd
  - Code Review
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

## What Is a Pull Request

A pull request is a practice of getting feedback from other programmers and deciding to "merge" or "do not merge" the code before it is merged into the main codebase.

If "do not merge decision" is made, author of the code can address the comments of others and re-submit the code for another round of review. This continues until all issues with code are resolved and the code can be merged. Or until the idea behind the code is no longer in alignment with the project goals and the pull request is rejected.
For more information, see the Code Review practice.

Pull request can also trigger CI/CD to make sure all automated tests pass before the code can be merged. For more infomration, see Continuous Integration and Continuous Delivery.

## Why You Might Want the Pull Request?

- Using pull request helps you catch the bad code before it is merged into the main codebase.
- Author of the code can also gain valuable feedback on his work that can be immediately applied when fixing the pull request.
- The knowledge of the codebase is spread more evenly in the team when pull requests practice is in place.
- The Team Leader or the senior colleague can use pull requests to continually evaluate performances of other team members.

## Problems the Pull Request Helps to Solve

- [Poor code quality](/problems/poor-code-quality)
- Knowledge hoarding
- Toxic team culture

## How to Implement the Pull Requests

1. Explain the pull requests practice to the team, have a discussion about benefits vs. drawbacks the team can be afraid of.
2. Adjust the workload for the team so they have enough time for doing the pull requests.
3. Make rules on who will be reviewing what. The rules will be depending on your goals.
   - If knowledge sharing is a priority, assign the pull request to someone who does not know this part of the codebase.
   - If a code quality is a priority, let the more senior team members do the review of the more junior members' code. Senior members can do the Code Review with each other.
   - If culture is especially toxic, a simple round-robin style of pull request assignment can be seen as “fair”.
   - Rules can be usually enforced by Version Control System (CVS).
4. Demonstrate to the team the pull request flow in your CVS.
5. Start practicing pull requests within the team.
6. Continuously give feedback to the team, fine-tune the rules so it fits the team.

## Common Pitfalls of Pull Requests

- Make sure that the pull requests are done regularly in your team and that nobody waits way too long for their code to be reviewed. If the code is left unchecked, it can lead to “long feedback loops” and it can effect team motivation.
- Always have at least two possible approvers for each pull request. Having only one person that can merge pull requests could lead to power hoarding.
- Encourage small pull requests. Nobody wants to review 5000+ lines of changes within one PR.

## Resources for Pull Requests

- [The art of pull request](https://hackernoon.com/the-art-of-pull-requests-6f0f099850f9)
- [Pull requests on GitHub](https://help.github.com/articles/about-pull-requests/)
- [Merge requests on GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/)
