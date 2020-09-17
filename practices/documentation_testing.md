---
slug: documentation-testing
stages:
  - research
  - development
short_description: Documentation testing is a process of improving your existing documentation through feedback. Understanding how to get feedback is crucial for building good documentation and positive developer experience.
tags:
  - technical writing
  - software documentation
  - introduction
  - information
  - readme
  - feedback
  - writing
  - continuous delivery
  - value
  - good developer experience
keywords:
  - Developer experience
  - Tech writing
  - Getting started tutorial
  - Testing your Documentation
  - Tech writing feedback
covered_by_dx_scanner: false
---

# Documentation Testing

**TL;DR** Documentation testing is a process of improving your existing documentation through Passive Feedback Gathering and Active Testing. Understanding how to work with feedback is crucial for building good documentation and positive developer experience.

## What is Documentation Testing?

Documentation testing is a few processes of continuous feedback gathering and documentation improvements based on feedback. You can imagine it as active listening to your developers. Similarly, as you use testing for your code, you should be testing your docs to provide clear and precise information that contributes to positive developer experience.

Docs are a developer’s first impression of your product, yet they are often overlooked. Improving your Docs directly translate into improving first impressions. 

![Documentation example](/files/docs-example.png)
[Documentation example](https://zapier.com/engineering/great-documentation-examples/)

For clarity's sake, you can split Documentation testing into Active Testing and Passive Feedback Gathering.

### Passive Feedback Gathering
Under Passive Feedback Gathering, you can imagine two categories. One is ways to give voice to your developers through Feedbacks, ratings, or more advanced methods. The second part of Passive Feedback Gathering is data mining tools that help you understand developer behavior. These don’t need your direct activity. After you set them up, they work. However, it is good practice to review them once in a while.

Information gathered via Passive Feedback Gathering helps you make data-driven decisions that benefit your readers.

### Active Testing
Active Testing is testing of your documentation. It is similar to UX testing or Code testing. Unlike the other types of testing, Documentation testing is mainly manual testing. Through manual testing, you can build rapport and empathy with your readers.

## Why You Might Want Documentation Testing?
Through testing your documentation you understand the first impression of your product. Moreover, you gain insight into the decision funnel and you start to understand who is using your product and why. Documentation testing can help you find weak points in your documentation.

It is a series of good practices and even small teams without tech writers can improve their developer experience by adopting documentation testing.

## Problems Documentation Testing Helps to Solve

* Lack of understanding around your product
* Lack of developers using your product
* Damaged information flow
* Unclear instructions
* Lack of empathy towards developers
* Bad first impression 

## How to Implement Documentation Testing?
### Implementing Passive Feedback Gathering
Good starting points for Passive Feedback Gathering are allowing ratings on your Docs, monitoring On-Page Behaviour, looking at Off-page Behaviour, and analyzing click/download rates.
#### Ratings on Existing Docs
Start by adding a way to rate your existing documentation. Consider adding questions like: “Is this page helpful to you?” Or “Did this guide benefit you?”. Even a simple star rating can add crucial data for your decisions.
> Allowing ratings on your Docs helps to build rapport with your readers. Look at which pages are well-received and which need improvements.

#### On-Page Behaviour
The behavior on-page can tell you a lot about your Doc’s perception. Start using analytical software (popular options are: [Google Analytics](http://analytics.google.com), [GoSquared](https://www.gosquared.com/analytics/), [Clicky](https://clicky.com), [Statcounter](https://statcounter.com), or [Matomo](https://matomo.org)) to monitor your readers. 
> The time spent on each page, the bounce rate of your pages, referrals, and leaving pages can help you understand how people interact with your docs.

#### Off-page Behaviour
Understanding who is your reader is crucial to tailor your docs around them. Software like [Google Search Console](https://search.google.com/search-console/about) can show you why are your readers visiting your documentation.
> Tracking why people visit you is crucial to understand which issues and questions bring people to you. Knowing what brings people to you, you can tailor your docs to provide a better experience to your visitors.

#### Clicks and download tracking
Consider logging how many people download your code samples. For this logging, you can use software like [Google Tag Manager](http://tagmanager.google.com). With Google Tag Manager, you can use Custom events, for example, scroll rate or download rate, to gain better insight on your Docs performance.
> Track any action that is important for you. From Sign-ups to completing Demos, this information directly makes a difference in improving the developer experience.

### Implementing Active Testing
Active Testing activities can be both in-house and off-house. In-house testing is more controlled but can be affected by knowledge bias. Off-house testing gives you another point of view but it can be more resource (time, money, energy) demanding. A possible alternative to off-house testing can be surveys and questionnaires. 

#### In-house Testing
One of the best things you can always do is to test your documentation In-house. Read through your docs.  Let your developers try the demos and gather their thoughts. Take people from different backgrounds and with different skillsets. 5 to 6 people is enough to start improving your developer experience. Look at [UX Testing Goals](https://developerexperience.io/practices/ux-testing-goals) or at [Unit Testing](https://developerexperience.io/practices/unit-testing) for ideas.
> Anyone around you can help you with in-house testing. Test if you can understand your docs. Test if your sample codes work. Test what happens if you auto-translate your docs. What does happen if you strictly follow your docs? Is the provided information enough? Be emphatic. Use my favorite definition: _Empathy is connecting with emotions, not with experience._

#### Automatizated Testing
You can use frameworks like [dtf](http://cyborginstitute.org/projects/dtf/strategy/) to keep your Documentation unified in terms of glossary and clarity. If your Documentation is code example heavy, you can use tools like [rustdoc](https://doc.rust-lang.org/beta/rustdoc/documentation-tests.html) to automatically test your code samples. 
> Although Documentation testing should be manual, sample code testing, grammar checks, or word consistency tests can be automatic. Using frameworks like dtf or rustdoc allows your testers to focus more on information and empathy than on grammar and code syntax.

#### Questionnaires and surveys 
Questionnaires and surveys give your readers a way to directly give their feedback. You can gather interesting information through it. Moreover, if you reach out after the questionnaire you can improve community relationships.
> Forms, surveys, and questionnaires are powerful tools if used correctly. With a good form, you can build rapport and turn this rapport into a better dx. A good starting point is this [Hubspot Article](https://blog.hubspot.com/service/questionnaire) or this [Harvard Guide](https://psr.iq.harvard.edu/files/psr/files/PSRQuestionnaireTipSheet_0.pdf).

#### Outsourced Testing
If you don’t want to spend your resources on In-house Testing, you can try outsourcing it. Services like [Betatesting](https://betatesting.com/beta-testers), [Usertesting](https://www.usertesting.com), [Testfort](https://testfort.com/qa-documentation)or [Devskiller](https://devskiller.com) can connect you with a testing developer. You can reach out to the developer community at places like [Dev](https://dev.to) or [DXheroes Slack](https://join.slack.com/t/developerexperiencehq/shared_invite/enQtNzU5NjUyNDk2MDM1LTRmNjM5ZTllOTc1NmU5ZWRhNGNkODU1ZmY0ZWExYWUyN2YyNzM4ZTMzNjIyNWJhNTRmNjA5ZTVhMGRmZjM4ZjY). Alternatively, you can hire freelancers through platforms like [Freelancer](http://freelancer.com), [Upwork](https://www.upwork.com), [Fivver](https://www.fiverr.com), or [Peopleperhour](https://www.peopleperhour.com).
> You can always outsource the testings if you don’t want to use in-house testing or you want additional data. Outsourcing your testing is not as expensive as you may think, having around 5 - 6 testers is generally enough to understand the dx you provide. 

## Common Pitfalls of Documentation Testing
- Developers or tech writers doubt gathered data.
- Analytics are poorly set and don’t collect crucial data 
- Knowledge bias influences Documentation Testing.
- Developers or tech writers don’t listen to feedback.
> Documentation testing is not done regularly.

## Resources for Documentation Testing
* [I would rather be writing](https://idratherbewriting.com/2008/10/17/10-ways-to-gather-feedback-from-users/)
* [Medium article on Feedback gathering channels](https://medium.com/technical-writing-is-easy/how-to-collect-user-feedback-7549cc7829f)
* [Technical Writing tips](https://www.instructionalsolutions.com/blog/technical-writing-tips)
* [Software testing help](https://www.softwaretestinghelp.com/test-documentation-reviews/)
* [King’s talk on Empathy-Driven Developer Documentation](https://www.youtube.com/watch?v=_HCmFvxxKaQ)
* [Jen Lambourne: Research Like You're Wrong](https://www.youtube.com/watch?v=aCNbVf9Id5Y)
* [What is documentation testing](http://tryqa.com/what-is-documentation-testing/)
* [Process.st](https://www.process.st/software-documentation/)
