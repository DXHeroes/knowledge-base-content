---
slug: solid-practice
stages:
  - research
short_description: SOLID stands for the first five object-oriented design principles that help you make the software more understandable, easier to maintain, and easier to extend.
tags: 
  - SOLID principle
  - Object Oriented
  - Agile
  - Design Principles
keywords: 
  - SOLID
  - SOLID Principle
  - Liskov Substitution Principle 
  - Single-responsiblity Principle
  - Open-closed Principle
  - Interface Segregation Principle
  - Dependency Inversion Principle
  - Design Principles
---
covered_by_dx_scanner: false
---

# SOLID Principle

**TL;DR** SOLID is an acronym that stands for five object-oriented design principles that help you make the software more understandable, easier to maintain, and easier to extend. 

## What Is SOLID Principle
SOLID stands for five object-oriented design principles that together (when used with judgment) make your code more bug-proof, easier to understand, nicer to maintain, and simple to expand/scale.
 - **S**ingle-responsibility Principle 
 - **O**pen-closed Principle
 - **L**iskov Substitution Principle 
 - **I**nterface Segregation Principle
 - **D**ependency Inversion Principle

Robert C. Martin designed the principles in his paper named Design Principles and Design Patterns (link in Resources). The Acronym was created later by Michael Feathers. Let's look into what each principle means. To simplify them, you can use the `coffee maker` example provided in each section.

![Alt Name](/files/solid.jpg)
[SOLID Principle](https://www.youtube.com/watch?v=Tk9HVv8ZcOU)

### Single-responsibility Principle

Martin describes it as: *A class should have one, and only one, reason to change*. You can understand it as: *A class should have a single reason to exist (or the [job](/practices/jtbd) to do)* More abstractly, things should specialize. It's better to have `computeClass` and `outputerClass` than do this in one single class.

> Example: Instead of having the coffe machine class that does everything, have class for coffee grinding, coffee weighting, coffee brewing, and serving.

### Open-closed Principle

Originally: *Classes should be open for extension, but closed for modification*. What does it mean? TThat if you want more functionalities in your class/modules/functions, add them instead of changing existing ones. Let's look into the code:
```
class A ()
//makes coffe
else if(x.request == "tea"): 
```

The **else if**  violates the Open-closed Principle. If you want to add more functionalities in the future, you need to modify (add another if statement) the existing function and potentially create new bugs on the working product. Abstractly, if the new functionalities modify your already working code, you are creating more [sunk costs](/problems/sunk-cost).

> Example: Do not rewrite already working function `brewFrapucchino` to also handle tea/hot chocolate (chances are, your machine will forgot how to `brewCoffee`). Rather, extend on the feature.

### Liskov Substitution Principle 

Martin described this principle as: *If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.* Liskov Substitutions says that if you are using inheritance, then every subclass or derived class can substitute for their base or parent class anywhere in your code. You can understand it as an extension of the Open-closed principle.
That means derived classes should input/output the same parameters as their parent. When a subclass cannot perform the same actions as its parent Class, this can cause bugs and make your code less readable.

> Example: If you have `brewer` class and `coffeBrewer` subclass, Coffeebrewer should be able to execute any brewer function. You don't want your `coffeBrewer` to return `water` instead of `hotBevarage`.

### Interface Segregation Principle

In Design Principles and Design Patterns, the Interface Segregation is states as follows: *Clients should not be forced to depend on methods that they do not use.* If you are using interfaces, then (to comply with this principle) do not add additional functionalities to an existing interface through creating new methods. Instead, create a new interface and let your class implement multiple interfaces if needed.

> Example: Imagine that you have interface `Beverage` that abstractly holds all drinks in your coffee machine. Now, you want to add toppings (milk, sugar, rum, and so on). Don't add it into this intefrace since some drinks will be forced to have uselless methods. Instead, create interface `Topping` and implement it when needed.

### Dependency Inversion Principle

This principle helps you to seperate modules. Martin puts it into two main points:
- *High-level modules should not depend on low-level modules. Both should depend on the abstraction.*
- *Abstractions should not depend on details. Details should depend on abstractions.*

In simpler terms, a class should not be the same as a tool that executes the action. Instead, you implement an interface that connects the tool with the class. 

Also, while the tool needs to meet the interface's specification, neither the class nor interface should know how the tool works.

> Class `Brewer` should not care about kettle because there is just too many types of kettles. You should inject the used kettle into `Brewer` when needed.

## Why You Might Want SOLID Principle

Together, they are helping you to design future-proof code, so your code can easily scale and it's not a pain to maintain it. While a SOLID implementation counts on using all 5, each of them provides different benefits. Let's go through them together:

### Single-responsibility Principle

The Single-responsibility principle makes your code/software/architecture easier to implement. Moreover, it prevents unexpected bugs/effects of future changes. 

If Class has only one responsibility to do, its easier to read and maintain - its like following [KISS](practices/kiss-principle) in your class design. If you are still unsure, think about it this way. Would you rather to maintain class with thousands responsibilities or with one?

### Open-closed Principle

The open-closed principle makes you think about how to save time/energy/resources in the future. As any dev knows, task requirements change over time. A client asks for this, then for that. That is why your code should be open to extension (to match any new functional requirements) but **new things should not break already working stuff**. You don't lose the ability to run when you learn to swim. Your software should neither.

### Liskov Substitution Principle 

Liskov Substitution makes sure that new elements (functions, subclasses, and such) don't force you to implement any stricter validation than you already do have. That not only saves your time but also makes your code behavior clearer.

### Interface Segregation Principle

By itself, nterface Segregation Principle makes you think about reusability of your interfaces. 

### Dependency Inversion Principle

The intent behind Dependency Inversion Principle is to achieve separation of concerns of construction and use of objects. This can increase readability and code reuse, while lowering unused methods. Nobody likes maintainence of unsuded legacy code. 

## Problems SOLID Principle Helps to Solve

- [Poor code quality](/problems/poor-code-quality)
- [Unnecessary features](/problems/unnecessary-features)
- [Demotivated team)](/problems/demotivated-team)
- [Long feedback loop](/problems/long-feedback-loops)
- [Meaningless work](/problems/meaningless-work)
- [Sunk cost](/problems/sunk-cost)


## How to Implement SOLID Principle

The SOLID principles are no rules and sometimes, they don't solve everything. Use these principles with your judgment. like any design practice, it is easier to implement them from the start.
If you are thinking about SOLID on an existing code base, you can do it while [refactoring](/practices/refactoring) or see it as a part of your technical debt management.

> Please, see SOLID Principle as tool, not your end goal. SOLID won't make your project more profitable, but can help you to be more profitable.

Generally, a good starting point could be your code (or any code, you can always look into DXScanner](https://dxscanner.io/), any help is appreciated.). Determine whether the applications of SOLID or its violations are justified. Think about how you can designs the structure better through applying one or more principles, and see if the results are better.

### Single-responsiblity Principle

Keep your classes simple ([KISS](practices/kiss-principle)) - start at abstractions, split the classes and use interfaces and inheritance whenever you can. Don't allow class that can be changed from more than one reason. Business logic should change abstract things and things like infrastructure only low-level modules. 

### Open-closed Principle

Never (unless you have a good reason) force yourself to change working code. Instead, make things expandable - through new classes, methods, functions and interfaces. 

### Liskov Substitution Principle 

You could consider adding checks for Liskov Substitute violations during your [code reviews](/practices/code-review) or during [pair programing](/practices/pair-programming). Alternatively, you can add Liskov Substitution to your test cases. In them, you can call a specific part of your application with objects of all subclasses to make sure that none of them causes an error or significantly changes its performance.

### Interface Segregation Principle

Look into your code. Whenver you are re-usuing method, consider changing it into intefrace and implementing it. If you want to add new method, thing about its future. Will use use it again? Is it outside of the responsibility of the class? Then create interface out of it and enjoy the simple scalability.

### Dependency Inversion Principle

One debated suggestion is to use [Dependency injection](https://en.wikipedia.org/wiki/Dependency_injection). It has its set of advantages and disadvantages, but the main aim is to reduce 

## Common Pitfalls of SOLID Principle

- The principles are followed as strict rules, event when they create more pain.
- The principles don't have support behind them. You can not start designing/redesiging when others are not on the same board.
- SOLID often leads to more "first look" complex code.
- Some people take it to the extreme - interface for each class, which doubles your codebase.
- SOLID codebase is heavily demanding on system organization.
- SOLID is understand as end goal - which can increase sunk costs. 

## Resources for SOLID Principle

- [SOLID: The First 5 Principles of Object Oriented Design](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
- [Design Principles and Design Patterns: Robert C. Martin](https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf)
- [Getting a SOLID start](https://sites.google.com/site/unclebobconsultingllc/getting-a-solid-start)
- [SOLID Principles: Explanation and examples](https://itnext.io/solid-principles-explanation-and-examples-715b975dcad4)
- [The S.O.L.I.D Principles in Pictures](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)
- [SOLID as an antipattern: when guiding principles go bad](http://blog.spinthemoose.com/2012/12/17/solid-as-an-antipattern/)
- [In Defense of the SOLID Principles](https://blog.ndepend.com/defense-solid-principles/)

