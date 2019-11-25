---
slug: staged-rollout
stages:
  - development
short_description: A staged Rollout enables you to release the upcoming product version slowly in a gradual way. You can slowly increase the percentage of users who receive the update.
tags:
  - staged rollout
  - deploy
  - release
  - continuous delivery
  - testing
  - feedback
  - pilot project
keywords:
  - staged rollout
  - product version
  - users
  - analyze
  - release
  - deploy
  - update
---

# Staged Rollout

**TL;DR**

Test your product on just a few users. To get the best results, do not let them know they are part of your Staged Rollout. Let them think it is just a regular update.

## What Is a Staged Rollout

A Staged Rollout is a method of updating your application, while reaching only a certain percentage of users. It enables you to release a single product version very slowly - over a period of days. It is a much safer approach than a sudden big-bang release.

A Staged Rollout gives you time to analyze your product stability and its performance against business goals. You can then decide if you want to roll out the update to more users, wait for more data, or stop the Rollout. You can test if your update is going to be a success and you can also reveal major errors. A Staged Rollout is one of the relatively pain-free ways to make continuous delivery. Examples of the major companies that do the Staged Rollouts regularly are Netflix and Uber.

## Why You Might Want the Staged Rollout

- Slowly increasing the number of users receiving your product update prevents spreading errors. It is always better if only 10% of users experience update errors than all of your customers.
- Staged Rollout enables you to assess your product performance in a measurable way, unlike when you push the release out to every user at the same time.
- Staged Rollout lets you be more strategic with your product releases.
- It reduces risks - you can test changes before you move into full implementation.
- It gives you time to make improvements and to introduce the changes to your stakeholders.
- It minimizes negative effects on productivity. If you want to implement some changes in your company, the tested group may be not as productive as usual. But it is still better than when all of the users have to get used to the change at the same time.

## Problems the Staged Rollout Solves

- [Poor code quality](/problems/poor-code-quality)
- Unhappy clients
- Knowledge hoarding
- ["Not my problem" mentality](/problems/not-my-problem-mentality)
- [Meaningless work](/problems/meaningless-work)

## How to Implement the Staged Rollout

When implementing the Staged Rollout, follow these rules:

1. Selection of test users is a strategic issue. The users are selected randomly, there is no way to target users based on some property.
2. The users cannot tell if they received a regular update or if they were selected for a Staged Rollout.
3. Every Staged Rollout targets a different user group.
4. Staged Rollouts can only be used in production.
5. Staged Rollouts can only be used when updating an existing application.
6. You can start with a minimum percentage of users (you can target as low as 0.01%) and if everything looks fine, keep increasing the percentage until you reach 100%.
7. You can use the Staged Rollout as an A/B testing. For example, if you have a new feature in your game application, make a Staged Rollout to a subset of players. You can then compare the performance of your game app with and without the feature.

**Halt the Staged Rollout**  
You can always halt (pause) the Rollout if you see that there is something wrong. That means that you can prevent more users from experiencing issues. Users that have not installed the new product version will not receive any updates. You have time to analyze the problems without spreading. Before you make the Staged Rollout, ensure you have a rollback plan. You should always be able not to implement the changes and head into a different direction with your product. Backup plans are a must!

## Common Pitfalls of the Staged Rollout

- Staged Rollouts can be performed only on existing apps. You need real users for testing so you cannot use Staged Rollouts for a new app.
- Not every software is suitable for this method, such as large database migrations.

## Resources for the Staged Rollout

- Medium: [The art of staging a rollout](https://medium.com/bleeding-edge/the-art-of-staging-a-rollout-8e203b337b75) -[Space Technologies: What is Staged Rollout?](https://www.spaceotechnologies.com/release-app-update-staged-rollout-benefits-startups/)
- Google Support: [Release app updates with staged rollouts](https://support.google.com/googleplay/android-developer/answer/6346149?hl=en)
- Instabug blog: [Progressive Release: How to Release Your App With Less Stress](https://instabug.com/blog/progressive-mobile-app-release-process/)
- 360 Technosoft: [What Is A Staged RollOut And Why Should You Consider It?](https://www.360technosoft.com/blog/what-is-a-staged-rollout-and-why-should-you-consider-it)
