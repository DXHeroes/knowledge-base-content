---
slug: git-flow
aspect: processes
stages:
- development
short_description: Git Flow is a specific branching system for Git. It helps the team to better control and add different project versions.
tags:
  - git
  - git flow
  - flow
  - branching
keywords:
  - git
  - gitflow
  - workflow
  - branch
  - master
  - develop
  - feature
  - release
  - hotfix
---

# Git Flow

## What Is a Git Flow
Git Flow is one of many styles of Git workflows - a branching model set for Git. It is a huge framework for large projects and it can be utilized for your team’s needs. Git Flow describes the project’s release cycle and adds specific roles to different branches. It defines when and how are the branches interacting with each other. In this model, there are two types of branches: Master and Develop. Develop is an integration branch for features. Master stores the official release history. This branching design was published by [Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/) in 2009 and became very popular ever since.

![Git Flow branching model](/files/git_flow.png)
[Nvie: A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

**The main branches:**

- **Master branch** stores the official release history. It contains an abridged version of your project. It is the core of the branching model with an infinite lifetime.
- **Develop branch** is an integration branch for features. It contains the complete history of your project. It also has an infinite lifetime. When the code in this branch is stable and ready for a release, the changes are merged to the master branch and tagged with a release number.

**Supporting branches:**

- **Feature branches** are created for each new feature. Their parent branch is the develop branch. Features should never interact directly with the master branch.
- **Release branch** is created when there are enough features for a release. It enables one team to work on a current release while another team keeps working on features for the next release. Release branches’ parent is also the develop branch. This branch is where [continuous delivery](/practices/continuous-delivery) happens.
- **Hotfix branches** are maintenance branches. They are created to quickly patch production release. These branches enable the team to fix mistakes without interrupting the workflow or waiting for the next release. Their parent is the master branch. Hotfix branches are the only branches to be forked directly off of the master branch. You can automatize the hotfix branch creation: whenever a mistake appears, the hotfix branch is automatically created.

## Why You Might Want to Use the Git Flow

- Git Flow Workflow simplifies parallel development because it isolates the new development from the released project. You can work on any project version. The new development is done in feature branches so it is merged back when the developer is satisfied with the code.
- Your team can collaborate better and spends less time managing the project versions if they use simple and clear branching strategy, such as Git Flow Workflow.
- You can always commit the changes and create a new feature branch when you need to interrupt your work. You can come back to your feature at any time.
- Hotfix branches allow your team to make emergency changes. You do not have to worry that you would accidentally merge in a new development at the same time.

## Issues the Git Flow Solves

- [Poor code quality](/issues/poor-code-quality)
- Unhappy clients
- Toxic team culture
- Knowledge hoarding
- ["Not my problem" mentality](/issues/not-my-problem-mentality)
- Meaningless work

## How to Implement the Git Flow
There are lots of different applications that support Git Flow branching model and have specific feature settings for Git Flow (such as [SourceTree](https://www.sourcetreeapp.com/), [SmartGit](https://www.syntevo.com/smartgit/) or [GitKraken](https://www.gitkraken.com/). Pick the application suitable for your operation system to initialize the Git Flow. Customize your project setup by following these steps:

1. Start using git-flow by cloning an existing git repository.
2. Create an empty develop branch to complement the default master branch. Push it to the server.
3. Development of new features starts from the develop branch. Each feature resides in its own branch. Push the feature branches to the git repository for backup.
4. Merge the feature branch back into develop branch when the feature is finished.
5. Create a release branch when the features are ready for a release. The parent is the develop branch.
6. Merge the release branch into the master branch and tag it with a version number. After that, it is merged back into the develop branch so the progress since the release is saved. The release branch will be deleted.
7. If you need to make some critical changes, create a hotfix branch. Fork the branch directly off of the master branch. When you are finished with the changes, merge the hotfix branch to both master and develop branch (or the current release branch). Tag the master branch with an updated version number.

## Common Pitfalls of the Git Flow
- Not everyone in the team uses Git Flow Workflow. It is crucial for smooth project development to ensure that all the team understands and uses the same workflow.
- The Git Flow Workflow is customized for a specific product. The setting is too complicated for a new developer.
- The team has too many features and is unable to finish them before the release. Development is drifting away from production.

## Resources for the Git Flow
- [Atlassian: Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Nvie: A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
- [Git Tower: Learn Version Control with Git](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/git-flow)
- [Daniel Kummer: Git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
