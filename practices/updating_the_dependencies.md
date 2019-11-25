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

Failure to update dependencies makes your product increasingly difficult to maintain and it can bring security risks.

## Why Updating the Dependencies Is Important

Updating dependencies should be a regular part of your job. Use our DX Scanner practice called DependeciesVersion to find out if the libraries you are using are updated.

**What is a dependency?**
A dependency is something your product needs to function. It could be a plugin, a database, or an external library. Some dependencies that you use may need updates which you should check regularly. Otherwise, your product can malfunction.

Failure to update the dependencies will make your product hard to maintain and can lead to your developer's time being taken up by routine, [meaningless work](/problems/meaningless-work). A straightforward upgrade should not take more than just a few hours.

![Dependencies Updates](/files/dependencies.png)
[Updating Dependencies Sucks](https://depfu.com/blog/updating-dependencies-sucks)

Upgrades can be released often, and keeping up with them can be challenging. Use tools for each library to automate this job:

- for JavaScript: [npm-check-updates](https://github.com/tjunnone/npm-check-updates)
- for Java: [Dependabot](https://dependabot.com/java/)
- for C#: [NuGet](https://www.nuget.org/)

## Why Keep Dependencies Updated?

**What are the reasons for updating the dependencies?**

- Your product can malfunction
- You will not be able to use new features added in the latest versions
- You may miss out on performance improvements provided by updates
- Security issue fixes can be missed or delayed
- Maintenance overheads of old versions could be reduced
- Bug fixes are often contained in the new versions

Maintaining an application with a large codebase requires a lot of discipline, and having your dependencies up to date should be a top priority for your team and organization. Failure to make this a regular practice will slowly make your codebase more difficult to maintain, hindering your team’s productivity and satisfaction.

## Problems the Updated Dependencies Solve

- [Increased cost](/problems/increased-cost)
- [Poor code quality](/problems/poor-code-quality)
- [Meaningless work](/problems/meaningless-work)
- [Demotivated team](/problems/demotivated-team)

## How to Keep Dependencies Updated

1. **Check out the new versions**
   - Review the changelogs
   - How new is it? Is it sufficiently stable?
2. **Check the requirements**
   - The new version may require new or expanded hardware or network resources.
3. **Plan the upgrade**
   - Estimate the time - how long will it take?
   - Ensure you have a plan to roll back the changes in case of an upgrade failure.
   - Protect the current state of your product, and minimize disruption to business as usual processes.
4. **Log**
   - Document your steps. Use a [Logbook](/practices/Operation Logbooks) and write down the changes made by your team members. It can also be useful to establish best practice for upgrading other products.

## Common Pitfalls of Updating Dependencies

- The updates are so complex that they also require an update of other dependencies
- Updating features instead of updating dependencies that seem less important or attractive
- Rolling back to the previous version instead of fixing a crashed application
- Trying to resolve version conflicts of dependency instead of focusing on keeping the product working as it used to

## Resources for Updating the Dependencies

- Medium: [Give your outdated libraries some respect](https://medium.com/feedzaitech/give-your-outdated-libraries-some-respect-7dd74173b42e)
- Code Trotter: [How to efficiently update your npm dependencies ?](https://code-trotter.com/web/how-to-efficiently-update-your-npm-dependencies)
- Gap Intelligence: [Application Dependencies: When and Why You Should Upgrade](https://www.gapintelligence.com/blog/application-dependencies-when-and-why-to-upgrade-them/)
- Depfu: [Updating Dependencies Sucks](https://depfu.com/blog/updating-dependencies-sucks)
