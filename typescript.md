---
slug: typescript
stages:

- development
short_description: TypeScript is a new way to write JavaScript. It was designed to develop large JavaScript applications. It is a superset of JavaScript - it means that existing JavaScript programs are also valid TypeScript programs.
  tags:
- typescript
- front-end build tools
- library
- install
- linting
keywords:
- build
- typescript
- superset
  covered_by_dx_scanner: true
---

# TypeScript

**TL;DR**

TypeScript is a new way to write JavaScript. It was designed to develop large Javascript applications. It is a superset of JavaScript - it means that existing JavaScript programs are also valid TypeScript programs.

## What Is TypeScript

TypeScript is an offspring of JavaScript and it was created to develop large applications and to improve weaknesses of JavaScript. Developers are making quite a fuss about TypeScript since its founding in 2012. It is definitely a programming language on the rise. As a superset of JavaScript, you can basically rename .js files to .ts files and start using TypeScript. So why do we need TypeScript when we already have JavaScript? **What is the difference?**

**JavaScript**

- Helps you create interactive web pages
- Developed by [EMCA's Technical Committee 39](https://tc39.es/) - many different stakeholders
- Has different implementations by many different vendors (Google, Microsoft, Oracle, and others)
- Goal: To become a common language of the web (lingua franca)
- JavaScript code needs to be compiled to run in browsers
- It is a scripting language
- To check for bugs, you have to run the code
- Specifically designed tool for small scripts

**TypeScript**

- Superset of JavaScript
- Developed by a single vendor Microsoft
- Goal: To catch errors early through a type system and to make JavaScript development more efficient
- TypeScript code does not need to be compiled and it runs in any browser
- It is an object-oriented programming language
- Unlike JavaSript, TypeScript has a Static typing feature, an interface, and supports modules and optional parameter function
- Points out the compilation errors only during development
- Has a transpiler that automatically checks your code for bugs
- Designed for large projects

In summary, TypeScript simplifies the JavaScript code and it has more effective tools. JavaScript was designed for small front-end applications. When using it for bigger projects, developers started spending more time fixing bugs than writing new code. They needed a strongly typed language - and TypeScript was born.

![TypeScript](/files/typescript.jpeg)  
[TypeScript](https://codeburst.io/how-to-type-with-typescript-d32dec033d21)

## Why You Might Want TypeScript

TypeScript supports:

- Classes and Modules
- Type-checking
- autocompletation
- source documentation
- ES6 features
- JavaScript libraries
- JavaScript packaging, and lot more

TypeScript code can be run on any browser, device, or in any operating system. It is not specific to any virtual machine. By automatically checking for bugs, TypeScript helps you to create a clean and error-free code.

## Problems TypeScript Solves

- [Increased cost](/problems/increased-cost)
- [Poor code quality](/problems/poor-code-quality)
- [Meaningless work](/problems/meaningless-work)
- [Demotivated team](/problems/demotivated-team)

## How to Implement TypeScript

To migrate to TypeScript from JavaScript, follow these steps:

1. Set up a TypeScript configuration to build your existing JavaScript code into a new directory
2. After you configure your project to allow TypeScript code, convert the files you want to use
3. Change the file extension from .js to .ts
4. Convert common.js imports/exports to ES6 style
5. Compile the file and add types to fix any warnings generated (you can use editor extensions)
6. Declare basic types for any dependencies that do not have types available
7. Convert ES3-style function classes into TypeScript classes
8. Add types to all functions and method signatures, as well as declare interfaces or type aliases where useful
9. Ensure that unit, module, and integration tests pass
10. Open another file and repeat steps 3 to 9

TypeScript has a well-written documentation. Learn how to use TypeScript: [TypeScript Documentation](http://www.typescriptlang.org/docs/home.html)

## Common Pitfalls of TypeScript

- TypeScript takes a longer time to compile, comparing to another programming languages
- It is not part of the browser by default
- It is less popular than JavaScript - there are fewer developers for your TypeScript project

## Resources for TypeScript

- TypeScript: [TypeScript](http://www.typescriptlang.org/)
- Wikipedia: [TypeScript](https://en.wikipedia.org/wiki/TypeScript)
- Medium: [Typescript — Why should one use it ?](https://medium.com/tech-tajawal/typescript-why-should-one-use-it-a539faa92010)
- Medium: [What is TypeScript and When to Use It](https://medium.com/datadriveninvestor/what-is-typescript-and-when-to-use-it-6a5ad9062f3e)
- ably: [How TypeScript is making programming better](https://www.ably.io/blog/typescript-is-making-programming-better)
