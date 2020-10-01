---
slug: Git
stages:
  - development
short_description: Git is a distibuted version control system (VCS) tools used for tracking code in a software development project.
tags:
  - git 
  - branching
  - Data Model
  - Index
  - VCS
  - pull requests
  - good developer experience
keywords:
  - git
  - gitflow workflow
  - git flow
  - github
  - branching 
  - data model
  - commit
  - index
  - head
  - tree
  - blob
  - push
  - pull
---

# Git 

**TL;DR**

Git is a distibuted version control system (VCS) tools used for tracking code in a software development project.

## What Is a Git?

Git is one of many VCS that are there in the market but it simply is the most popular among the developers. It allows flawless management for large and small projects. The basic difference between git and other VCS is mainly the way they store their files. Generally, VCS other than Git store files in the form of a list as file-based changes (this is known as delta-version control system). 
But Git on the other saves the data in the form of snapshots of the file-system. Whenever you commit some changes to the project it will take the snapshot and save it with a reference and for efficiency, it does not take the snapshot if the file is not changed it just links it to the previous ones.
It was created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) in 2005 for the development of [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel).


## How does it work?

![Git_understanding](/files/Git_i_dont_know.png)</br>
Nvie: [Git understranding](https://medium.com/hackernoon/https-medium-com-zspajich-understanding-git-data-model-95eb16cc99f5)

Git is a lot more complicated than it looks at its front end command line. Let's have a look at it.

#### Data Model

When a repository is created and some changes are made and committed. Git generates a 40-Character checksum (SHA1) hash. These hashes are created for every object and the first two characters of the checksum are for the directory name and the rest of them are for the file name. 
There are three types of objects created by git. First, is **blob** object which stores the snapshot of the files that we committed (there can n objects for n committed files). Second, it creates **tree** object which contains the list of all committed files having a pointer to blob objects. The third and final object is the **commit** object that has the pointer to the tree object.

#### Branching

It is an independent line of development for a particular project having its commits. So how does git does the branching? For a layman, it looks like a list of commits but it is not exactly how it works. Git only keeps the track of the latest commit on a branch that can easily be used to reconstruct the whole commit list. It then used a pointer named **head** which has reference to the checkout branch and it is also used for tracking.

#### Index

According to the git's point of view, it has mainly three areas: **Working directory, staging area and the repository**. When we work on a project on our local machine, it is stored in your computer's filesystem which can be called as **working directory**.  



## Problems the Git Flow Solves

- [Poor code quality](/problems/poor-code-quality)
- Unhappy clients
- Knowledge hoarding
- ["Not my problem" mentality](/problems/not-my-problem-mentality)
- [Meaningless work](/problems/meaningless-work)

## How to Implement the Git Flow

There are lots of different applications that support Git Flow branching model and have specific feature settings for Git Flow (such as [SourceTree](https://www.sourcetreeapp.com/), [SmartGit](https://www.syntevo.com/smartgit/) or [GitKraken](https://www.gitkraken.com/)). Pick the application suitable for your operation system to initialize the Git Flow.

Customize your project setup by following these steps:

1. Start using git-flow by cloning an existing git repository.
2. Create an empty develop branch to complement the default master branch. Push it to the server.
3. Development of new features starts from the develop branch. Each feature resides in its own branch. Push the feature branches to the git repository for backup.
4. Merge the feature branch back into develop branch when the feature is finished.
5. Create a release branch when the features are ready for a release. The parent is the develop branch.
6. Merge the release branch into the master branch and tag it with a version number. After that, it is merged back into the develop branch so the progress since the release is saved. The release branch will be deleted.
7. If you need to make some critical changes, create a hotfix branch. Fork the branch directly off of the master branch. When you are finished with the changes, merge the hotfix branch to both master and develop branch (or the current release branch). Tag the master branch with an updated version number.

## Common Pitfalls of the Git Flow

- Not every team member uses Git Flow Workflow. It is crucial for smooth project development to ensure that all the team understands and uses the same workflow.
- The Git Flow Workflow is customized for a specific product. The setting is too complicated for a new developer.
- The team has too many features and is unable to finish them before the release. Development is drifting away from production.

## Resources for the Git Flow

- Atlassian: [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- Nvie: [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
- Git Tower: [Learn Version Control with Git](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/git-flow)
- Daniel Kummer: [Git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
