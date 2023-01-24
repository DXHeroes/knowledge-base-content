---
slug: gitignore
stages:
  - development
short_description: The .gitignore file is a text file that tells Git which folders or files to ignore in a project when sharing it through git. It helps to keep your code clean and secure...
tags:
- gitignore
- development
- 
keywords:
- gitignore
- .gitignore
- developer practices
- 
covered_by_dx_scanner: false
---

# .gitignore

**TL;DR**
The .gitignore file is a text file that tells Git which folders or files to ignore in a project when sharing it through git.

## What Is .gitignore?
The .gitignore text file specifies intentionally untracked files to ignore while sharing your code. To be clear, it ignores certain items from git commands like git push. Using it, you can dedicate which files/folders you don't want to share using git. 

Keeping folders or files from your git records makes your code cleaner (You don't share module files that everyone will install on their own) and safer (You don't accidentally leak info or environment details). Moreover, you can remove pointless stuff from your commits like MacOS .DS_store
changes.

Usually, devs use .gitignore to hide:

* log files
* temporary files
* hidden files
* personal files
* etc.

However, the .gitignore file itself IS tracked by Git.


## Why You Might Want .gitignore?

It is a good practice to use a .gitgnore file to protect your code from leaks and to keep it clean. It is almost mandatory on any open source projects or big collaboration projects. Otherwise, your code becomes a big pile of personal, log, or hidden files. Cluttering your code is never a good idea.

Moreover, it keeps your private files from public git records. Without it, you can accidentally leak your API key, production info, or environment settings which can hurt your project. Just to put it in perspective, [over  100000 GitHub repos have leaked their API or cryptographic keys](https://www.zdnet.com/article/over-100000-github-repos-have-leaked-api-or-cryptographic-keys/), and the average API key leak costs around [$1.2 million per year](https://securityboulevard.com/2023/01/wallarm-releases-new-end-to-end-solution-to-reduce-risk-and-time-to-remediate-leaked-api-keys-and-secrets/#:~:text=While%20API%20key%20leakage%20incidents%20are%20not%20new%2C,keys%20is%20both%20a%20security%20and%20financial%20imperative).

## Problems .gitignore Helps to Solve

* API Key Leak
* [Poor code quality](/problems/poor-code-quality)

## How to Implement .gitignore?
If you are using GitHub, you can create a .gitignore file while creating new repo using GitHub templates. Just scroll down to where the license option is and select Add .gitignore
![Github](/files/getignore.png)
[Github](https://www.github.com/)

You can create your .gitignore file manually. Start with creating a blank text file and name it *.gitignore*. Be sure to add the dot at the start. Then each line is a pattern where: 
- "*" is used as a wildcard match
- "/"  is used to ignore pathnames relative to the .gitignore file
- "#" is used to add comments to a .gitignore file
- "!" is used to create an exception
- "?" matches a single non-specific character

So, for example, we want to untrack all .log files and the .env file. Your .gitignore file should look like this:

*.log

.env

Look into popular [Github templates](https://github.com/github/gitignore) and adjust them according to your needs.

You can also create a global .gitgnore file using the following command "git config --global core.excludesfile ~/.gitignore_global". Global .gitignore behaves like normal .gitignore, but it is across multiple repos.

## Common Pitfalls of Implementing .gitignore
- The pattern matching is not correctly set
- Important security file is accidentally shared
- .gitignore is not set up

## Resources for .gitignore
- [Git documentation](https://git-scm.com/docs/gitignore)
- [Tool to create .gitignore online](https://www.toptal.com/developers/gitignore)
- [Git Ignore and .gitignore](https://www.w3schools.com/git/git_ignore.asp)
- [Gitignore Explained: What is Gitignore and How to Add it to Your Repo](https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/)