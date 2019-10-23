---
slug: package-management
stages:
  - development
short_description: Package management allows you to automatically download, install, and update software using remote repositories and in a consistent manner. Package managers are software tools that eliminate maintaining the software manually.
tags:
  - package management
  - library
  - install
  - lockfile
  - git flow
  - linting
  - dockerizing
  - packing applications
  - lockfile
  - updating the dependencies
keywords:
  - metadata
  - repository
  - lock file
  - lockfile
  - package management
  - semver
  - automating installing
  - automatic configuring
covered_by_dx_scanner: true
---

# Package Management

**TL;DR**

Archive and share your files with Package Manager. The archive file contains all the data and you do not have to do any manual installations.

## What Is a Package Management

Package Managers are tools for automating installing, upgrading, configuring, or removing programs in a consistent manner. A Package Manager creates archive files for your data that can be downloaded from a global registry into your local environment. It eliminates manual installations and updates.

The archive file (package) contains metadata: summary, software description, list of files, version, authorship, targeted architecture, file checksums, licensing, configuration files, and a list of dependencies necessary for running the software. Package Manager ensures that the data is authentic by verifying their digital certificates (and checksums). It can also look up, download, install, and update existing software from a remote repository. It can group packages by functions. It automatically manages the dependencies to ensure that the package is installed with all the required functionalities.

![Package Manager](/files/package_manager.png)  
[Package Manager](https://devopedia.org/package-manager)

Package Managers are necessary for installing software on Linux. This is a different approach to Windows, where you download .exe files from a website and run it on your system. In the beginning, every new program had to be compiled, linked, and run. Unix started to use shared libraries but the dependencies still had to be maintained by developers. At the beginning of the 90s, a Package Manager was born so the developers did not have to run commands every time on every machine with the same configurations. Instead, the Package Manager shipped the configurations to other computers. By mid-2010s, Package Managers made their way to Windows.

Here are some examples of Package Managers:

- [npm](https://en.wikipedia.org/wiki/Npm) and [Yarn](https://yarnpkg.com/lang/en/) for Javascript
- [Bundler](https://bundler.io/) for Ruby
- [Apache](https://maven.apache.org/) for Java
- [Composer](https://getcomposer.org/) for PHP
- [NuGet](https://www.nuget.org/) - for .NET
- [apk-tools](http://apk-tools.sourceforge.net/) for UNIX like RAM-based embedded systems
- [dpkg](https://wiki.debian.org/Teams/Dpkg) for Debian (and now Ubuntu)

## Why You Might Want the Package Management

Package Managers:

- simplify work for developers
- allow you to upgrade the packages very fast, you do not have to upgrade one by one
- save the time
- also have some advanced features - for example, they can make a basic audit
- can maintain the project versions (automatically upload them online) so everyone uses the newest version
- allow you to manage someone else’s open source code with certainty that the build is consistent within the developers and environments

## Problems the Package Management Solves

- [Increased cost](/problems/increased-cost)
- [Poor code quality](/problems/poor-code-quality)
- [Meaningless work](/problems/meaningless-work)
- [Demotivated team](/problems/demotivated-team)

## How to Implement the Package Management

1. Usually, the user requests a package using the Package Manager (PM).
2. The PM finds and downloads the required package from a software repository. Those repositories are available online and every PM has associated configuration files that point to repository location.
3. The PM installs the package and advises necessary manual steps.

## Common Pitfalls of the Package Management

- **Specification**  
  The package is not specified and when the new version is published, the package breaks. You have to specify the major version at least.
- **Updating**  
  The dependencies are not updated. Important security bugs fixes could be missing.
- **Modifications**  
  The packages are downloaded and then their code is modified by hand. The changes disappear after the next installation.
- **Security**  
  The dependency security audit is being ignored.
- **Different packages**  
  Many different packages are being used or each developer uses a different package. They can contain different properties and act differently.
- **Libraries**  
  Libraries needed for development are added to the global dependencies.
- [**Lockfile**](/practices/lockfile)  
  [Lockfile](/practices/lockfile) is not respected.

**What Is a Lockfile?**

A lockfile keeps the information about installed packages and it should be committed into your Package Manager source repositories. It is generated automatically for any operations. It is used for describing the dependency tree so the coworkers are guaranteed to install exactly the same dependencies. It also lets you "travel back in time" and check any former dependency tree. It allows your Package Manager to skip repeated metadata resolutions for previously-installed packages and, therefore, makes the installation much faster. Not committing the lockfile to your source control results in installing two different modules from the same dependency definition.

## Resources for the Package Management

- freeCodeCamp: [An introduction to how JavaScript package managers work](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/)
- Devopedia: [Package Manager](https://devopedia.org/package-manager#Linode-2017)
- Opensource: [The evolution of package managers](https://opensource.com/article/18/7/evolution-package-managers)
- npm Documentation: [npm-package-lock.json A manifestation of the manifest](https://docs.npmjs.com/files/package-lock.json)
