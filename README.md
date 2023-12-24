# Learn Programming Reference Repo
This repository contains practice files and examples for various programming languages and associated frameworks, libraries, and tools. 
Utilize this repository as a educational refresher when needed. 
All lessons and tutorials used are linked in the resources section. 

## JavaScript 
### What is JavaScript?
JavaScript is the foundational programming language when it comes to web development allowing developers to build complex web applications. 
* It is a scripting language meaning it does not need to be compiled, rather it can interpreted at runtime. 
* Most modern JavaScript interpreters utilize a technique called just-in-time compiling that improves performance.
* It is high-level meaning it is heavily abstracted typically making it easier to learn and use. 
* It can act as both a server-side and client-side language.
    * On the client-side JavaScript is commonly used to dynamically modify HTML and CSS via the DOM API.
    * On the server-side JavaScript may be used to pull data from a database. 

### Interpreting JavaScript
To run a JavaScript file in the terminal [Node.js](https://nodejs.org/en) must be installed, then use the following command:
```
node filename.js
```

However, to avoid having to rerun the command above after modifying the code a watch flag can be used. 
This is only supported in Node version 18.11 or higher. 
```
node --watch directory/fileName.js
```

## TypeScript
### What is TypeScript?
TypeScript is a variant of JavaScript released by Microsoft in 2012.

It adds types to the JavaScript programming language to help build more scalable and maintainable applications.

Before utilizing TypeScript programmers should have a strong understanding of the following JavaScript elements:
* Variables 
* Arrays
* Functions (Arrow functions)
* Objects
* Destructuring 

### Compiling TypeScript
TypeScript must be compiled into JavaScript so it can be read by a browser. 
TypeScript files have the .ts extension.
To compile TypeScript into JavaScript open up a terminal, make sure to change into the file directory, and then run:
```
tsc filename.ts
```
This will compile the TypeScript and then create a JavaScript file with the same name and a .js extension. 
To run that new file enter the following into the terminal:
```
node filename.js
```

To make this workflow more consice developers can generate a tsconfig file and utilize a watch flag. 

A tsconfig file is a json file with various options that can be modified to make working with TypeScript easier.  
To create a new tsconfig file open the terminal, make sure to change into the file directory, and then run:
```
tsc --init
```
* `rootDir` - Declare a path to a root folder that will contain all the pre-compiled TypeScript files, in the practice files this is the `src` folder within the TypeScript folder
* `outDir` - Declares a path to the output folder that will contain all the compiled JavaScript files, in the practice files this is the `dist` folder within the TypeScript folder

Once this has been modified in the tsconfig file simply run `tsc` in the terminal. 
To declare a watch flag so the `tsc` command won't need to be ran after every change to the code run the following:
```
tsc --watch
```
To review the command that allows the JavaScript to run with a watch flag check [Interpreting JavaScript](#interpreting-javascript).

## Resources
**TypeScript**
* [TypeScript for React/Next.js Developers | TypeScript Tutorial for Beginners](https://www.youtube.com/watch?v=WlxcujsvcIY) - Lama Dev
* [TypeScript Master Class]() - Net Ninja
