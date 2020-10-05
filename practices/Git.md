---
slug: Git
stages:
  - development
short_description: Git is a distributed version control system (VCS) tool used for tracking source code during development. Utilizing Git improves collboration among fellow developers.
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

Git is a distributed version control system (VCS) tool used for tracking source code during development. Utilizing Git improves collboration among fellow developers.

## What Is Git?

Git is one of many VCS that are there in the market but it simply is the most popular among the developers. It allows flawless management for large and small projects. The basic difference between Git and other VCS is mainly the way they store their files. Generally, VCS other than Git store files in the form of a list as file-based changes (this is known as delta-version control system). 
But Git on the other hand saves the data in the form of snapshots of the file-system. Whenever you commit some changes to the project it will take the snapshot and save it with a reference and for efficiency, it does not take the snapshot if the file is not changed it just links it to the previous ones.
It was first created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) in 2005 for the development of [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel).


## How Does Git Work?

![Git_understanding](/files/Git_i_dont_know.png)</br>
Nvie: [Git understranding](https://medium.com/hackernoon/https-medium-com-zspajich-understanding-git-data-model-95eb16cc99f5)

Git is lot more complicated than it looks at it's front end command line. Let's have a look at it.

#### Data Model

When you make a repository, do some changes, and create a commit, Git generates a 40-Character checksum (SHA1) hash. These hashes are created for every object and the first two characters of the checksum are for the directory name and the rest of them are for the file name. 
There are three types of objects created by Git. 
- First, is **blob** object which stores the snapshot of the files that we committed (there is a set of n objects for n committed files). 
- Second, it creates **tree** object which contains the list of all committed files having a pointer to blob objects. 
- The third and final object is the **commit** object that has the pointer to the tree object.

#### Branching

A **branch** is an independent line of development for a particular project with its commits. How does Git does the branching? On the surface, it looks like a list of commits. However, Git only tracks the latest commit on the branch. Knowing the newest change, Git can easily reconstruct the whole commit list. A pointer named **head** which has a reference to the checkout branch (checkout branch tells Git to record all new commits on that branch) and is also used for tracking. 

#### Index

According to the git's point of view, it has mainly three areas: **Working directory, staging area, and the repository**. When we work on a project on our local machine, it is stored in your computer's filesystem which can be called **working directory**. The changes that are made to the project will remain in the working directory unless we add them to the staging area using the `git add` command. The staging area can be described as the initial state of the new commit. The staging area can be used to fine-tune the commits by adding or removing until it suits you, after which you can do `git commit` to save it to the directory as an object. For this process, git doesn't use any directory but on the other hand, it uses **index** which can be used to track changes.



## Problems Git Helps to Solve
* Lack of version control
* Poor Code quality
* Lack of teamwork / Lack of team contribution
* Dependency oriented development (Wait times)

## How to Implement Git
There are a lot of ways that you can start. For your guidance, I have compiled a beginner guide.🙂

1. First, download Git. For windows, you can download it from [here](https://git-scm.com/downloads). For Linux use this command `sudo apt-get update $ sudo apt-get install git`. For MAC you can download it from [here](https://sourceforge.net/projects/git-osx-installer/files/).
2. Create an empty repository by using the `git init` command or you can checkout a repository by `git clone /path/to/repository` command while using a remote server you can use `git clone username@host:/path/to/repository`.
3. Now make the changes in the repository according to your need. (This step will follow the workflow that was discussed above)
4. The changes made by you can be proposed (add to **INDEX**) using `git add <filename>`.
5. To commit these changes you can use `git commit -m "Commit message"`.
6. Now the changes that you have made are in the **head** to send it to the remote repository use `git push origin master`. If you have not cloned the repository you can use `git remote add origin <server>`.
7. If you want to add a feature to your project but don't want to disturb the original project you can make a branch out of the main project by using `git checkout -b feature_x` command. You can switch to the original project by using the `git checkout master` command. Remember unless you push the branch using `git push origin <branch>` it will not be publicly available.


Hurrayy!! you created your first branch commit with knowing what exactly goes in the backend.🎉

## Some Pitfalls of the Git 

- User interface maturity
- Access controls
- Developer updated Git binary files by hand and lost content history
- Not enough understanding of Git commands😂

## Resources for Git 

- [Git-101](https://rogerdudler.github.io/git-guide/)
- [Git Data model](https://medium.com/hackernoon/https-medium-com-zspajich-understanding-git-data-model-95eb16cc99f5)
- [Git Branching](https://medium.com/hackernoon/understanding-git-branching-2662f5882f9)
- [Git Index](https://medium.com/hackernoon/understanding-git-index-4821a0765cf)

