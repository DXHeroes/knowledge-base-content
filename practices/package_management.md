---
slug: package-management
aspect: processes
stages:
- development
short_description: Package management allows you to automatically download, install, and update software using remote repositories and in a consistent manner. Package managers are software tools that eliminate maintaining the software manually.
tags:
- package
- manager
- archive
- configure
- install
- upgrade
- lock file
keywords:
- install
- configure
- update
- archive
- metadata
- repository
---

# Package Management

## What Is a Package Management

Package managers are tools for automating installing, upgrading, configuring, or removing programs in a consistent manner. A package manager creates archive files for your data that can be downloaded from a global registry into your local environment. It eliminates manual installations and updates.

The archive file (package) contains metadata: summary, software description, list of files, version, authorship, targeted architecture, file checksums, licensing, configuration files, and a list of dependencies necessary for running the software. Package manager ensures that the data is authentic by verifying their digital certificates (and checksums). It can also look up, download, install, and update existing software from a remote repository. It can group packages by functions. It automatically manages the dependencies to ensure that the package is installed with all the required functionalities.

Package managers are necessary for installing software on Linux. This is a different approach to Windows, where you download .exe files from a website and run it on your system. In the beginning, every new program had to be compiled, linked, and run. Unix started to use shared libraries but the dependencies still had to be maintained by developers. At the beginning of the 90s, a package manager was born so the developers did not have to run commands every time on every machine with the same configurations. Instead, the package manager shipped the configurations to other computers. By mid-2010s, package managers made their way to Windows.

Here are some examples of package managers:

- [apk-tools](http://apk-tools.sourceforge.net/) for UNIX like RAM-based embedded systems
- [dpkg](https://wiki.debian.org/Teams/Dpkg) for Debian (and now Ubuntu)
- [npm](https://en.wikipedia.org/wiki/Npm) and [Yarn](https://yarnpkg.com/lang/en/) for Javascript
- [Bundler](https://bundler.io/) for Ruby
- [Apache](https://maven.apache.org/) for Java
- [Composer](https://getcomposer.org/) for PHP
- [Steam](https://store.steampowered.com/) - a game platfor, works on Windows NT, OS X, and Linux
- [Mac App Store](https://www.apple.com/) - official digital distribution platform for OS X apps
- [NuGet](https://www.nuget.org/) - for Windows, available as a plugin for Visual Studio

## Why You Might Want the Package Management

Package managers:

- simplify work for developers
- allow you to upgrade the packages very fast, you do not have to upgrade one by one
- save the time
- also have some advanced features - for example, they can make a basic audit
- can maintain the project versions (automatically upload them online) so everyone uses the newest version
- allow you to manage someone else’s open-source code with certainty that the build is consistent within the developers and environments

## Issues the Package Management Solves

- [Increased cost](/issues/increased-cost)
- [Poor code quality](/issues/poor-code-quality)
- [Meaningless work](/issues/meaningless-work)

## How to Implement the Package Management

1. Usually, the user requests a package using the package manager (PM). 
2. The PM finds and downloads the required package from a software repository. Those repositories are available online and every PM has associated configuration files that point to repository location. 
3. The PM installs the package and advises necessary manual steps. 

## Common Pitfalls of the Package Management

- The package is not specified and when the new version is published, the package breaks. You have to specify the major version at least. 
- The dependencies are not updated. Important security bugs fixes could be missing. 
- The packages are downloaded and then their code is modified by hand. The changes disappear after the next installation. 
- The dependency security audit is being ignored. 
- Many different packages are being used or each developer uses a different package. They can contain different properties and act differently. 
- Libraries needed for development are added to the global dependencies. 
- Lock File is not respected. 

**What Is a File Locking**

File locking is a useful feature for restricting other users from changing a specific computer file. The locked file can be managed only by one person at a time. This prevents interceding updates on the same files. Modern file locking systems allow multiple users to access the file but only the first one can modify it. Not respecting the lock file means that if the developer makes some changes and a previous file version is locked, the changes are not saved and the other users are going to download a not updated version (the locked one).

## Resources for the Package Management

- [freeCodeCamp: An introduction to how JavaScript package managers work](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/) 
- [Devopedia: Package Manager](https://devopedia.org/package-manager#Linode-2017) 
- [Opensource: The evolution of package managers](https://opensource.com/article/18/7/evolution-package-managers) 
