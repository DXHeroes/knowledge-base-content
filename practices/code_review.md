#Code Review

##Short Description

##Keywords

##What Is a Code Review
Code review is a software quality assurance practice in which developers check each other’s code. Code reviewing saves time and money because the team is able to find potential bugs that can slip undetected through testing. It lets the team learn and gain new information and a new point of view. It also accelerates the growth of junior developers.

**The viewers check the code for:**
- Changes in the code
- Mistakes or potential mistakes
- Consistency with the assignment
- The quality of comments
- Adherence to coding standards
- Security Breach

##Why You Might Want the Code Review
Code reviewing is a very important tool for developing process. It improves code quality and makes the codebase more stable. For developers, code review can be a great opportunity to get feedback from others (it can be done by pair programming).

**Code review:**
- helps developers work together and build relationships
- can be a way to onboard and train new team members
- enables to mentor less experienced developers
- reduces the product cost
- improves software quality
- helps with sharing knowledge across the team
- can be a part of a job interview - it shows how advanced the developer is

##Issues the Code Review Solves
- [Poor code quality](/issues/poor-code-quality)
- Toxic team culture
- Knowledge hoarding
- Not my problem mentality
- Meaningless work

##How to Implement the Code Review
- Code review is usually done via [pull requests](/practices/pull-requests) and before merging.
- There are many tools to help you create pull requests, such as [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), [Gitcolony](https://www.gitcolony.com/), or [PullRequest](https://www.pullrequest.com/).
- There are two approaches: the first one is to develop something and send it to another developer to check it. The second one is checking the code during pair programming.
- It is really important that the developers talk to each other and ensure that they understand the code.

**8 tips for code reviewing:**
1. Know what to look for and ensure that you understand what the code does
2. Test the code before code reviews
3. Do not review for more than 60 minutes at a time or you lose focus
4. Review fewer than 400 lines at a time
5. Set goals and expectations
6. Automate what can be automated with the right tools
7. Establish a systematic method of how to fix found mistakes
8. Give feedback that helps rather than criticize

##Common Pitfalls of the Code Review
- Developers do not want their code to be reviewed because they rely on automated tests more than the coleague’s opinion
Firma ho nedělá, resp. Třeba si vývojář sám schvaluje pull requests (třeba v Gitu)
Podcenění CR - nezafunguje, protože ten, co má dělat CR příliš důvěřuje tomu developerovi a odsouhlasí mu to, nezkontroluje pořádně
V CR se zaměřuju na stylistické chyby místo funkčních
Pokud tým není úplně homogenní a nemá jasná pravidla, zbytečně se dohadujou nad blbostma (mezera nebo tabulátor)
Neexistují obecná pravidla pro CR
Dělá se nad příliš malými změnami, dávám pull request ke každé maličké změně v kódu. Mělo by se udělat, až když jsou výraznější změny. Pak to zabírá moc času
Pokud ho neudělám hned, můžu ztratit nit

##Resources for the Code Review
- [Perforce: 9 Best Practices for Code Reviews] (https://www.perforce.com/blog/qac/9-best-practices-code-reviews)
- [Smartbear: Resources: Code Review] (https://smartbear.com/learn/code-review/)
- [Medium:Code Review Best Practices] (https://medium.com/palantir/code-review-best-practices-19e02780015f)
