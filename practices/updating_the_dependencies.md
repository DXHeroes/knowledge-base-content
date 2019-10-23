---
slug: updating-the-dependencies
stages: 
- development
short_description: Not updating dependencies makes your product more and more difficult to maintain and it can bring security risks.
tags:
- updating the dependencies
- software documentation
- good developer experience
- update
- maintain
- package management
- library
- dependency
- dependenciesversion
- dxscanner
keywords:
- libraries
- dependencies
- database
covered_by_dx_scanner: true
---

# Updating the Dependencies

**TL;DR**

Not updating dependencies makes your product more and more difficult to maintain and it can bring security risks.

## Why Is Updating the Dependencies Important

Updating the dependencies should be a regular part of your job. Use our DX Scanner practice called DependeciesVersion to find out if the libraries you are using are updated.

**What is a dependency?**  
 A dependency is something your product needs to function. It could be a plugin, a database, or an external library. Some of the dependencies you use may need some updates which you should regularly check. Otherwise, your product can malfunction.

Not updating the dependencies will make your product hard to maintain and your developers can end up doing [meaningless work](/problems/meaningless-work). If the upgrade is not very difficult, it should not take you more than just a few hours.

![Dependencies Updates](/files/dependencies.png)  
[Updating Dependencies Sucks](https://depfu.com/blog/updating-dependencies-sucks)

The upgrade releases can be often and keeping up with them can be challenging. Use tools for each library to automate this job:

- for JavaScript: [npm-check-updates](https://github.com/tjunnone/npm-check-updates)
- for Java: [Dependabot](https://dependabot.com/java/)
- for C#: [NuGet](https://www.nuget.org/)

## Why You Might Want to Keep Dependencies Updated

**What are the reasons for updating the dependencies?**

- Your product can malfunction
- You will not be able to use new features added in the latest versions
- The performance improvements are frequently made
- There can be some security issues fixes
- The maintenance of an old version could be reduced
- Bugs are fixed in the new versions

Maintaining an application with a large codebase requires a lot of discipline and having your dependencies up to date should be a top priority for your team and organization. Not making this a regular practice will slowly make your codebase more difficult to maintain which hinders your team’s productivity and satisfaction.

## Problems the Updated Dependencies Solve

- [Increased cost](/problems/increased-cost)
- [Poor code quality](/problems/poor-code-quality)
- [Meaningless work](/problems/meaningless-work)
- [Demotivated team](/problems/demotivated-team)

## How to Keep the Dependencies Updated

1. **Check out the new versions**
   - Review the changelogs
   - How new is it? Is it stable enough yet?
2. **Check the requirements**
   - The new version may require some new hardware or network resources to operate.
3. **Plan the upgrade**
   - Estimate the time - how long will it take to do the upgrade?
   - Ensure you have a plan to roll back the changes in case of an upgrade failure.
   - Protect the current state of your product.
4. **Log**
   - Always document all your steps. Use a [Logbook](/practices/Operation Logbooks) and write down the changes for your team members. It can also be useful for upgrading other products.

## Common Pitfalls of Updating the Dependencies

- The updates are so complex they require an update of other dependencies
- Updating features instead of updating dependencies that seem less important
- Rolling back to the previous version instead of fixing a crashed application
- Trying to resolve version conflicts of dependency instead of focusing on keeping the product working as it used to

## Resources for Updating the Dependencies

- Medium: [Give your outdated libraries some respect](https://medium.com/feedzaitech/give-your-outdated-libraries-some-respect-7dd74173b42e)
- Code Trotter: [How to efficiently update your npm dependencies ?](https://code-trotter.com/web/how-to-efficiently-update-your-npm-dependencies)
- Gap Intelligence: [Application Dependencies: When and Why You Should Upgrade](https://www.gapintelligence.com/blog/application-dependencies-when-and-why-to-upgrade-them/)
- Depfu: [Updating Dependencies Sucks](https://depfu.com/blog/updating-dependencies-sucks)
