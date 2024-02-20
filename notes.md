# Notes for 260

## Startup Misc.
- FOR EVERY DEPLOY, HAVE THINGS LISTED IN THE README, SAD FACE IF YOU COULDN'T GET IT TO WORK
- If there's an html element that does what you need it to do, use it!!
- You can copy code as long as you know what it does
- Never put something in your code that you don't understand
- You'll have less than 4GB of space to store data in your database
    - Check if local storage is a possibility
- Use basic implementation, basic data structures, basic control logic!
- Every other day, 3-5 commits or more per session

## GitHub Assignment:

When resolving a merge conflict, remember to save the file after you choose the resolution! Then use `git add` plus the filename, then commit, then push (I think?).

Basically, avoid merge conflicts like the plague...

## Asking Questions - Order of Authority
- Yourself (especially when you're stuck and debugging)
    - Figure out how to phrase your question - nobody will be able to help you anyway until you do
- Instructions, automated sources (internet, etc.)
- Peers
- Teaching Assistants - there's a schedule, and a specific TA will grade your stuff
- Instructors

## Discord
- RubberDuck in the duckpond - a bot that will answer some questions
- Try to put technical questions in a category in general

## The Seven Major Structures You Must Use in Your Startup
- HTML - the structure
- CSS - how the structure is visualized. The style. Makes it pretty.
- JavaScript - interaction - how the user and server do stuff
- Service - web service endpoints - ex. getting the weather info from another server
- Database/Login - Persistent app and auth data - will use mongo
- WebSocket - Data pushed from server, chat - bidirectional chat
    - Push notifications
    - The server can tell you things, instead of just you requesting things and the server sending it
    - Sending reminders at a certain time is an example of WebSocket!

## History of the Internet
### Tim Berners-Lee - the World Wide Web
- "I just had to take the hypertext idea and connect it to the TCP and DNS ideas and--ta-da!--the World Wide Web"
- Wanted to have links to sources in research documents - hyperlinks
- He was the right person at the right time with the right skills and the right inspiration
- Didn't realize it would get so big
### Håkon Wium Lie - CSS
- There were browser wars - the browser chose how the web page rendered the html tags (like whether text is bolded), so everyone was trying to make their browser look better. Different web pages would look different on different browsers
- If you create something that's extensible, people can do incredible things with it
### Brendan Eich - JavaScript
- "Always bet on JS"
- One of the most popular languages
- Runs on a bunch of different things - in fact, on pretty much anything
- It's engrained into almost everything, backwards compatible (which kinda made it screwed up, but it would have screwed up more things if it wasn't)

## Technology Stacks
- All the applications you use - ex. React, MongoDB, etc.

## Operating Systems
- The web runs on Linux!

## The Console
- AKA Terminal, shell, command module
- GUIs are nice, but slow
- The best programmers love the console!
- Does two main things: navigate your disk (access your files), and run console applications
- Mac -- get warp
- on warp - use # to ask questions!

Two Extensions to Download for VS Code:
- Live Server
- GitLens

## Commands:
- echo: output the parameters of the command
- cd: change directory
- mkdir: make directory
- get full list on slides
- use | to chain commands together

## SSH Stuff
Public IP Address: 184.72.128.199
ssh -i ~/FILE_NAME_HERE.pem ubuntu@184.72.128.199

## HTML
`index.html` - what's loaded first if you don't specify - have this page!

All html documents are a tree:
    html
head     body
title

Anything inside an element is a child of the element

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>First HTML</title>
    </head>
```

- "First HTML" is a child of title
- Start tag, end tag
- Nice diagram in slides
- `<p>` is paragraph
- VS Code will make you a starter html page if you type
- Use the Live Server extension for VS Code
- You usually don't do formatting in HTML anymore (like size, bolded, etc.) - you do it in CSS
- h1: highest heading; h9: lowest heading
- Absolute links - the exact location of your page on the internet. Won't work if you move the page's location
- Relative link - can access files in the same directory. If you move them all to a different directory, they can all still access each other
- details about html elements in instructions and slides
- span - inline - italics, bolds, etc.
- if you want to use reserved characters, you have to use an entity tag
- Codepen - YOU MUST FORK IT OVER TO YOUR ACCOUNT SO YOU CAN SAVE IT

# HTML, cont.
START WORKING ON THE HTML DELIVERABLE RIGHT NOW! DON'T FORGET YOU NEED 10 COMMITS SPREAD OUT ACROSS THE WEEK - IT'S DUE ON MONDAY!
- Can't have tabs (like I was thinking of) in vanilla html - displays one page at a time, links to different pages, loses things when it switches pages
- AKA, you need to copy over the header and footer to every page. Every page will redo it
- form tag - way for a user to provide
- YOU HAVE TO INCLUDE (IN YOUR FOOTER) THE AUTHOR NAME (YOU) AND A LINK TO YOUR REPO
- put placeholders for everything you can't actually do yet (calling third party services, etc.)
- hardcode examples into it - ex. - hardcode a table with dummy data showing high scores as a placeholder for calling the database
- buttons that don't do anything
- look at the github repo you cloned - the html part of Simon
- ./deployfiles.sh -k PEM_LOCATION -h WEBSITE_URL -s simon
- CTRL-C to get out of the command you're currently doing
- You have to deploy Simon
- [the simon instructions](https://learn.cs260.click/page/simon/simonHtml/simonHtml_md)
- develop html in VS code, and use the Live Server extension to see what the page looks like
- body is all the stuff that you see; stuff in the head you don't see, but you can put styling there and stuff
- Project: it will be really incomplete with a lot of placeholders

# CSS
- You can put styling on the element itself as an attribute, but that's a bad idea
- look at slides for a diagram of rule syntax (for styling)
- the way most people do CSS - a stylesheet that you link to. Ex. `<link rel="stylesheet" href="styles.css" \>`
- things override other things if they're more specific
- if things have the same specificity, then whichever one comes later is used
A rule (tells the styles for paragraphs, the <p> tag)
```
p {
    color: #ff338d;
}

#js {
    text-align: center;
}
```
Types of selectors (see slides for full list):
- element: all elements of a specific name, ex. `p` and `div`
- ID: the element with that specific ID - shown w/ #
- class
- list
- descendant
- child
- pseudo - also selecting based on user state; ex. hover - changes when the user hovers cursor over the element
- content, padding, border, margin
- ON THE FINAL - INWARD TO OUTWARD - PADDING, BORDER, MARGIN - PBM - 'PALS BEFORE MARRIAGE'

You can download google fonts, then put it in your css stylesheet, and use the font
```
@font-face {
    font-family: "x";
    src: url(url here);

body {
    font-family: x [BACK-UP FONTS HERE]
}
```
Unicode and UTF-8:
- Unicode: one character encoding for everything. Every character is 4 bytes. 4 billion possibilities.
- UTF-8: compresses unicode; now most characters are 1 byte
- `<meta charset="UTF-8" />` in html head

Animation:
- Put it in a tag, ex.
- see code examples in animation slides
- `@keyframes`

## Responsive Design

The website adapts to different screen sizes.
Five different ways:
```
<meta
    name="viewport"
    content= "width=device-width, initial-scale=1"
/>
```
^ This one works great for most things - stops device from automatically scaling.


`float: right;` or `float:inline-end;` -- equivalent, but inline-end works globally for languages that go right to left. Other end is `float: left;` and `float:inline-end`. Used in `aside{}`

## Display
- 
- none - hides it
- block - it expands to fill up the width of its rendered parent
- inline - width is its content size; doesn't expand to fill the whole width - ex. bold
- grid - it will change how many of the child objects are displayed per row based on how wide the screen is (ex. two images per row, four images per row)
- flex - works on the children of body (header, main, footer). You can tell them to grow and shrink or stay the same. `flex: 0 80px;` makes it stay 80px and not grow or shrink. The second number is in addition to the first number, which is a fraction of the whole. So `flex: 1 30px` will be at least 30 pixels, and will fill the rest of the space (?). 1 and 3 will make a ratio of 1:3 (?)
- you can put flex displays inside each other and switch which orientation (columns, rows - which might be the opposite of what you think they do?)
- look into overflow=scroll, there's also one to cut
- `@media` - can change how things render - can put an aside on the bottom instead of the side if the screen is too narrow, or get rid of it completely if the screen is too small
```
body {
    display: flex;
    flex-direction: column;
}
```
- (misc. - class is for objects with similar attributes. Ex. class=container)

# CSS, cont. (Feb. 7)
- If you're trying to figure out what is applying to what, USE THE BROWSER DEBUGGER!
- Don't add pixel values - make it responsive
- **use the browser debugger to see what your css looks like on different screen sizes**
- if the body is 100% and the margin isn't 0, it might not look centered on all screen sizes
- text-align vs align-content and justify-content - check if it aligns vertically, horizontally, etc.

## CSS Frameworks
- frameworks - bundles of CSS stuff (ex. bootstrap, tailwind)
- need to put a link in your code - see in slides - <link rel= href= />
- then use the class - ex. `class=btn btn-primary`
- can bring in javascript that works with the framework - that gets drop down menus to work, and stuff. Look into that
- USE ACCORDIAN ON THE PROJECT PAGE?
- @media queries

# JavaScript
## History
- ES5, ES6
- Inspired by Scheme
- Interpreted
- Dynamically typed
- Has nothing to do with Java (was called that because Java was hot at the time)
- browsers are naturally JavaScript interpreters - you can go to about:blank, inspect, and go to console
- Node.js - runs JavaScript
## Playgrounds:
- CodePen
- VSCode (Live Server)
- Node.js
- browser console - you can even do breakpoints and debugging
## How to:
- NAME IT 
- link to html
- you have to load the script before you use it
- declare variable - ex. - `let y = 1;`
- declare constant variable. - ex. - `const z = "cow"`
- functions are first order objects - you can treat a function like an int or a boolean - ex. you can return a function
- `null` is the empty value
- `undefined` is a type - it means nobody has declared it yet
- you can set a variable to a different type, no problem
- object: key-value pairs - a map/dict - like JSON - actually, JSON comes from JavaScript
- array: primitive type is object, inherits stuff from object, but has more attributes (?)
- 
## How to link (GET CODE EXAMPLES FROM SLIDES)
- script file
- script tag
- script attribute
## Misc.
- `console.log("")` - logs the string
- `debugger;` - like a hardcoded breakpoint

# JavaScript, cont.
- falsy are things like false, 0, -0, '', NaN, null, undefined
- truthy = !falsy
- be careful when comparing objects, because it will compare memory locations, not content
- && - logical and
- equality ===
- ! negates
- c syntax for for loops:
- for (let i = 1; i < 3; i++)
- switch statements are a thing - put break unless you want to do the cases beneath it too
- you can have inner functions within a function (so that only that function can use it, and you don't have to worry about other things using it)
- you can assign a function to a variable (ex. you can have a variable pointing to a function) - called an anonymous function
- `function f() {...}` vs `f = function () {...}`
- you have to tell it to return things (like in Python)
- you can do optional parameters and default parameters -- you can return a parameter that the user never gave (it will be undefined)
- lambda functions/arrow functions - a simplified function that you can pass as a parameter. No name, but you could have a variable pointing to it
- ` const arrow = () => 1;`
- `const` means you can't redefine the variable to be something else (you can mutate the object, but it has to stay the same object)
- `let` means you can change what the variable points to
- closure/factory methods are very important - maybe figure out how they work
- string literal: `let s = "text of string"`
- has string functions similar to Python
- regex is a thing
- arrays:
```
let numbers = [];
for (let i = 1; i < 11, i++) {
    numbers.push(i);
}
```
- the map operation maps one thing to another thing (not to be confused with a map object in other languages. JS's object is 
- reduce - `numbers.reduce((a, c) => a + c'
- TODO: look up map and reduce
- filter - `numbers.filter((n) => n % 2)` returns a new array with the elements for which the lambda function returns true. So this will return all odd numbers
- it's common to just have try with finally
- for all threads, have them in some sort of catch statement, or else it will bring down your whole program if there's an exception
- only throw exceptions that are exceptional
- has its own version of f'' strings in Python
- using or - stops as soon as it finds something truthy, doesn't execute anything else
- can set variables with or statements - `x = x || 5`
- Nullish: undefined or null
- `??` is the or for nullish - returns the first thing that isn't nullish
- can short circuit with nullish
- `z ?? (z=x)` If z is nullish, define z to be x
- Nullish assignment operator - `y ??=` - if null, assign to value
- spread operator - take all the stuff in one item and put the things in another item `...` ex. `new_array = [...old_array, 5]`
- `console.table(table_object)` - will print it as a table instead of straight text
- objects in JS are kinda like dictionaries - they have key value pairs, you can access
- `x.r?.() || other_function` checks if r is nullish, and if it is, doesn't call r -- instead does the fallback function
- you can make custom iterators - `*`
- MAKE SURE YOU UNDERSTAND DESTRUCTURING - lets you set things inside an object to different variables
- `[x] = a` sets a to the first value in x (?)
- `[x, , y, ..z] = [1, 2, 3, 4, 5, 6, 7]` will assign first item to x, 3rd item to y, the rest of the array to z (skips second value)
- destructuring plus default parameters - if there aren't enough items in the object to put in the variables you're destructuring, you can set the variables to default values
- private field - underscore
- DON'T DO MODULES IN THE JAVASCRIPT DELIVERABLE
### DOM
- a tree built out of your html and css so it knows what applies to what
- `document` - represents the top level node
- you can inject things into an html element, or add completely new ones
- eventListener - will make things happen when the user does something
- there is a little alert box that comes up
- use local storage

### JavaScript deliverable:
- don't use modules
- use local storage - you can see it if you inspect, then go to the application tab > Storage > Local Storage
- it associates specific data with a specific URL
- make your app totally functional as much as you can
- use a fallback pattern - if it can't get to the server, use local storage

### Promises
- When you refresh, everything gets dumped and put in again
- JavaScript is SINGLE THREADED - or, well, there's only one rendering thread
- Everything must be ASYNCHRONOUS
- One thread per tab
- You don't want to make the user wait while a network thing comes back and the page is frozen
- Call stack (single threaded rendering stack) and Web API. You put stuff in the Web API that you don't want to block up the call stack
- the Web API knows how to wait for the network to respond, files to come back from the disk, etc.
- basically, I'm putting you in the Web API, call me when you're done
Promise object:
- pending: currently running asynchronously
- fulfilled: completed successfully
- rejected: failed to compute
- see slides for syntax diagram
- `new Promise((resolve, reject) => resolve(true))`
- resolve and reject are functions the promise object calls based on what the function returns (??) - see code example in slides. So in the callback function (in the promise object), you kinda throw a resolve or a reject. Then the `promiseName.then` kinda catches it and calls a function for resolve if you threw a resolve, or a reject function for reject
- you can also put a reject in a then/catch/finally
- `then` method -- when callback resolves, then call this
- just look at the slides...
- you can call a whole bunch of promises and have it work on them on the side and come back whenever they finish
- 
### Async, Await
- await: will block execution until it resolves
- async: to fix await functions. You wrap the whole thing with a promise (like a then). A function marked with async WILL ALWAYS RETURN A PROMISE. IF YOU DON'T GIVE IT ONE, IT WILL GENERATE ONE. If you're returning a promise already, you don't need to wrap it in a promise
- rules for using await: top level module function OR called from an async function
- `console.log(await cow()); ` is like making a promise and then dealing with the result, but 
- look at the slides...


# Deploying Simon to Start-Up Website:
`./deployFiles.sh -k /Users/sarah/cs260.pem -h webbrain.click -s simon`

# Misc.
- FOR YOUR HTML PROJECT, DON'T FORGET TO UPDATE THE README
- [Public APIs](https://github.com/public-apis/public-apis)
- Content, padding, border, margin
- Code Pen has debug mode
- look into fly-cut for mac
- the browser just loads one html page. Everything starts from there - calling cs files and JavaScript files


