---
slug: staged-rollout
aspect: processes
stages:
- development
short_description: A staged rollout enables you to release the upcoming product version slowly in a gradual way. You can slowly increase the percentage of users who receive the update.
tags:
- staged rollout
- update
- product version
- continuous delivery
keywords:
- staged rollout
- product version
- users
- analyze
- release
- update
---
# Staged Rollout
## What Is a Staged Rollout
A staged rollout is a way for updating your application while reaching only a certain percentage of users. It enables you to release a single product version very slowly - over a period of days. It is a much safer approach than a sudden big-bang release.

A staged rollout gives you time to analyze your product stability and its performance against business goals. Then you can decide if you want to roll out the update to more users, wait for more data, or stop the rollout. You can test if your update is going to be a success and you can also reveal major errors. A staged rollout is one of the relatively pain-free ways to make continuous delivery. One of the major companies that do the staged rollouts regularly is Netflix.

## Why You Might Want the Staged Rollout
- Slowly increasing the number of users of your product update prevents spreading errors. It is always better if only 10% of users experience update errors than all of your customers.
- Staged rollout enables you to control your product performance in a measurable way, unlike when you push the release out to every user at the same time.
- Staged rollout lets you be more strategic with your product releases.
- It reduces risks - you can test changes before you move into full implementation.
- It gives you time to make improvements and to introduce the changes to your stakeholders.
- It minimizes negative effects on productivity. If you want to implement some changes in your company, the tested group may be not as productive as usual. But it is still better than when all of the users have to get used to the change at the same time.

## Issues the Staged Rollout Solves
- Team involvement
- Meaningless work
- Unhappy clients
- Unsuccessful product
- Unnecessary functions
- Expensive development

## How to Implement the Staged Rollout
When implementing the staged rollout, follow these rules:
1. Selection of test users is a strategic issue. The users are selected randomly, there is no way to target users based on some property.
2. The users cannot tell if they received a regular update or if they were selected for a staged rollout.
3. Every staged rollout targets a different user group.
4. Staged rollouts can only be used in production.
5. Staged rollouts can only be used when updating an existing application.
6. You can start with a minimum percentage of users (you can target as low as 0.01%) and if everything looks fine, keep increasing the percentage until you reach 100%.
7. You can use the staged rollout as an A/B testing. For example, if you have a new feature in your game application, make a staged rollout to a subset of players. You can then compare the performance of your game app with and without the feature.

**Halt the staged rollout**
You can always halt (pause) the rollout if you see that there is something wrong. That means that you can prevent more users from experiencing wrong behaviors. Users that have not installed the new product version will not receive any updates. You have time to analyze the problems without spreading. Before you make the staged rollout, ensure you have a rollback plan. You should always be able not to implement the changes and head into a different direction with your product. Backup plans are a must!

## Common Pitfalls of the Staged Rollout
- Staged rollouts can be performed only on existing apps. You need real users for testing so you cannot use staged rollouts for a new app.
- Not every software is suitable for this method, such as large database migrations.

## Resources for the Staged Rollout
- [Medium: The art of staging a rollout](https://medium.com/bleeding-edge/the-art-of-staging-a-rollout-8e203b337b75)
-[Space Technologies: What is Staged Rollout?](https://www.spaceotechnologies.com/release-app-update-staged-rollout-benefits-startups/)
- [Google Support:  Release app updates with staged rollouts](https://support.google.com/googleplay/android-developer/answer/6346149?hl=en)
- [Instabug blog: Progressive Release: How to Release Your App With Less Stress](https://instabug.com/blog/progressive-mobile-app-release-process/)
