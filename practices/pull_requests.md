---
slug: "pull-requests"
aspect: "processes"
stages:
  - "development"
short_description: Pull requests tells others that you changed something in code and pushed to a branch in a git repository. Then other members may review and discuss the changes before they are merged into the master branch.
tags:
  - pull request
  - git
  - merge request
  - CI/CD
  - code review
  - teamwork
keywords:
  - git
  - commit
  - branch
  - repository
  - code
  - quality
---

# Pull Requests

Also known as Merge Requests.

## What Is a Pull Request

Practice of getting feedback and "merge/do not merge" decision on a code from other programmers before it is merged into the main codebase.

If "do not merge decision" is given, author of the code can address the comments of others and re-submit the code for another round of review. This continues until all issues with code are resolved and it can be merged or until the idea behind the code is no longer in alignment with the goals of the project and the pull request is rejected. See code review practice for further detail.

Pull request can also trigger CI/CD to make sure all automated tests pass before the code can be merged.

## Why You Might Want the Pull Request?

By using pull requests, you will increase the likelihood that bad code will be catched before it is merged into the main codebase.

Author of the code can also gain valuable feedback on his work that can be immediately applied when fixing the pull request.

The knowledge of the codebase is spread more evenly in the team when pull requests practice is in place.

Team leader or the senior colleague can use pull requests to continually evaluate performance of other team members.

## Issues the Pull Request Helps to Solve

- [Poor code quality](/issues/poor-code-quality)
- Knowledge hoarding
- Toxic team culture

## How to Implement the Pull Requests

1. Explain the pull requests practice to the team, have a discussion about benefits vs. drawbacks the team can afraid of.
2. Adjust the workload for the team so that they have time for doing pull requests.
3. Make rules on who will be reviewing what. The rules will be depending on your goals.
   - If knowledge sharing is a priority, assign the pull request to someone who does not know this part of the codebase
   - If code quality is a priority, let more senior members of the team do code review to more junior members. Senior members can do code review between themselves
   - If culture is especially toxic, a simple round-robin style of pull request assignment can be seen as “fair”.
   - Rules can usually be enforced by Version Control System (CVS).
4. Demonstrate to the team the pull request flow in your CVS.
5. Start practicing pull requests within the team.
6. Continuously give feedback to the team, fine-tune the rules so it fits the team.

## Common Pitfalls of Pull Requests

- Make sure that pull requests are done regularly in your team and that nobody waits way too long for their code to be reviewed. If left unchecked, this can lead to “long feedback loops” and decrease a motivation in your team.
- Always have at least two possible approvers for each pull request. Having only one person that can merge pull requests could lead to power hoarding.
- Encourage small pull requests. Nobody wants to review 5000+ lines of changes within one PR.

## Resource

- [The art of pull request](https://hackernoon.com/the-art-of-pull-requests-6f0f099850f9)
- [Pull requests on GitHub](https://help.github.com/articles/about-pull-requests/)
- [Merge requests on GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/)
