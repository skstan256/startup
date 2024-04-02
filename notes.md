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
- `<button onclick="callsThisFunction()"`
  
### Async, Await
- await: will block execution until it resolves
- async: to fix await functions. You wrap the whole thing with a promise (like a then). A function marked with async WILL ALWAYS RETURN A PROMISE. IF YOU DON'T GIVE IT ONE, IT WILL GENERATE ONE. If you're returning a promise already, you don't need to wrap it in a promise
- rules for using await: top level module function OR called from an async function
- `console.log(await cow()); ` is like making a promise and then dealing with the result, but 
- look at the slides...
- async - wraps what the function returns with a promise if you don't return your own promise
- await - tells it to wait until it comes back (requires all the calls above (?) it to also be async)

```
async function cow() {
    return moo;
}
console.log(cow());
//OUTPUT: Promise {<fulfilled>: 'moo'}

async function cow() {
    return new Promise((resolve) => {
        resolve('moo');
    });
}
console.log(cow());
//output: Promise {<pending>}
console.log(await cow());
//output: moo

```

### Debugging Javascript
- console.log debugging
- source debugging
the stuff you want to do:
- put in a breakpoint
- have the webpage open, then inspect and have the console open. It will literally show you what happens when you press buttons, and will show you error messages and stuff! You can even put in break points by clicking on the line number! You can click/hover to see the value of specific variables in the code. You can also interact with local variables in the console while paused on a breakpoint (ex. execute `fib[fib.length]` to see that it is undefined)
- if the script relies on anything in the DOM right away, run the script at the end of the body
- in general, JavaScript won't throw exceptions for type conversion stuff; it will just do its best (which normally works but normally does really weird stuff)

### Startup JavaScript:
- have fake Websocket stuff - look at setInterval function for example of how to 
- look at login.js for how to store stuff in local storage - associated with domain name and port
- localStorage.getItem() null operator alt value - find line of code in example
- if you're running a function that will freeze stuff up (like playing a sound), need to have it be async - use 

## Midterm Review
- await() blocks until it comes back
- know a couple console commands - chmod changes the mode so, for example, an executable can run
- know DNS record things - SOA, TXT, CNAME, A
- turn BYU text blue `<div class="header">BYU</div>` would be `div.header{...}`
- Padding: around the content
- Arrow syntax - if it's all on the same line, it just returns that value - don't need to tell it to return
- Pre-increment and post-increment is a thing in JavaScript
- DOM textContent - creates a text node child with the text. If the element had children before, blows those children away. Basically, just sets the text for an element
JS functions:
YES:
- const f = (x) => {}
- function f(x) {}
- const f = function(x) {}
NO:
- function f(x) = {}

- Outside in - marriage before pals
- Regex: v.match(/A|f/i)  -- anything on the inside of the slashes is the regular expression. The outside is a flag
- then/catch/finally -- if what it calls has a timeout, the rest of the code will keep moving, and it'll do the then/catch/finally later when it comes back
- JavaScript: {x:1}. JSON: {"x":1} (must be string, MUST BE DOUBLE QUOTES)
- DNS Subdomain: c260.cs.byu.edu
- column-reverse: puts the column elements in reverse

## LOOK AT:
- arrow syntax

## Arrow syntax:
(parameters) => {function}
```
// standard syntax
a.sort(function (v1, v2) {
    return v1 - v2;
})
// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```
Same line - doesn't need a return statement:

```
() => 3; //returns 3

() => {
    3; //returns undefined
}

() => {
    return 3; //returns 3
}

```
# How does the Internet Work?
- URL --> goes to the Domain Name System (DNS) to look up the IP address
- DNS record - part of a big registry that tells how to get to the IP address from a name
- Use the IP address to talk to the server
- IP addresses are leased -- can't buy them
Layer Example Purpose
- Application - HTTPS - Functionality like web browsing
- Transport - TCP/UDP - Moving connection information packets
- Internet - IP - Establishing connections
- Link - Fiber, hardware - Physical connections
Cont.
- TCP: makes sure all data is received in the order it's sent. Expensive, lots of handshaking back and forth. Ex. downloading a video. If stuff comes in the wrong order, everything will be messed up
- UDP: faster, but stuff might get missed, or out of order
Server vs. Service:
- Server: the hardware (?) - the laptop, ex. that's doing it
- Service: software that's running on the hardware server
Ports:
- IP address gets you to the machine, but need to do different things with the machine
- machine must be listening on the port to make a connection
- It's like piers on the dock
- Certain ports are assigned for certain things (by the internet authority?), ex. port 443 for https, port 80 for http, etc. Every major protocol has a different port it's assigned by default
- Each port is like a way into a house. You want to keep most closed most of the time.
Caddy:
- one port goes to a gateway
- caddy moves you to another port based on what you're doing - ex. simon.domainname vs. startup.domainname
Misc:
- Example top level domains: com, org, uk, click, gold
- localhost: 127.0.0.1
DNA record tyes:
- A/AAAA: Address. Specific IP addresses
- CNAME: Canonical name. Alias
- NS: Name server. Authority for queries and proof of ownership
- TEXT: Metadata. Used for policies and verification.
- SOA: Start of authority. Propagation information

# Web Services - Fetch, URL, ports, HTTP
## Fetch
- throw it out, then use the callback function when it comes back
- response object comes back - you get the actual content by calling .text
```
fetch('url')
.then(r => r.text())  # 
.then(j => console.log(j.value))
```
- needs an API
- check, with your API, that it doesn't need payment or an API key
```
const r = await fetch('url')
const j = await r.json()
console.log(j.content)
```
- fetch returns a promise, that, when it's fulfilled, has the content you requested
- FIGURE OUT IF MOST ONCLICK FUNCTIONS SHOULD BE ASYNC (use promises or await)
- 3rd party request
- objects have methods, services have endpoints
- always have some sort of fallback - use nullish coalescing, try/catch
SSH 22 -> sshd
http 80 -> Caddy -> HTTP 3000 Simon
https 443 -^          \> HTTP 4000 Start up

Only Caddy can talk to ports 3000 and 4000
## URL: Uniform Resource Locator
Scheme   Domain   Port Path     Param. Anchor
https:// byu.edu :443 /api/city ?q=pro #3

Anchor 
## Ports
TODO: get list from slides

## Requests
Method  Path          Version
POST /api/city?q=provo HTTP/1.1
Host: cs260.click
User-Agent: curl/7.77.0  <- Header
...

{"user":"tim"}  <- Body

Types:
- get: get existing
- post: create new resource
- put: update current
- (TODO: GET THE REST)

Status Codes:
- 2XX: 200 Success
- 3XX: 301/302 Redirect
- 4XX: Bad request
- 5XX: Server Error

## Express - Java wrapper for requests
Five major objects:
- express
- app - express application
- req - request object
- res - response object
- router - adding child routing

`npm init -y` 

`npm install express`

(also in slides)

`const express = require('express');` 

`app.get('*', (req, res)...`

- you can have it running, then hit a breakpoint on your backend, then take you back
- http: client sends a request, server sends a response
- express: creates two Javascript objects that represent the request and response
- browser/client/frontend -> service/server/backend
- res.redirect(...), other methods: .sendFile(), .status().send()

### Middleware
- req -> middleware -> next  -->  req -> middleware -> response
- syntax: `app.use([path,] callback(req, res, next))`
- path is what it matches to
- everything that matches will be added to a linked list
- only one can send a response - it will move on/wait forever if nobody responds, and it will crash if more than one responds
- it's easy to get confused on if you're doing stuff on the frontend or the backend - ex. it might log on the backend
- order of the functions matters! Whichever functions match will be added to that list and run in order
- DEBUGGING FRONT: DO IN CHROME BROWSER. DEBUGGING BACK: DO IN VS CODE

### Static Files
`app.use(express.static('public', {root : __dirname}));`
- It can load up files that you've deployed
- In the assignment stuff and simon, THERE'S A NEW STYLE OF DEPLOY FILE - have to edit it and 


## Service Design
### UML Diagram:
- sequencediagram.org
- stores a diagram in a URL
- make a diagram if you're having trouble with frontend vs backend
- http: from user to server; web socket: from server to user
### Examples of service endpoints:
- Create account
- Login
- Logout
- Get user (figure out which user credentials belong to)
- Get scores
- Save scores
### Leverage Standards: don't try to write everything yourself
- Transfer protocols - HTTP, HTTPS, UDP
- HTTP verbs - GET, PUT, POST, DELETE
- MIME types - application/json, image/png
- HTTP headers - cache, accept, cors
- Data format - JSON, YAML
Have a very good reason for going away from these standard tools - it could end up costing big points

## Endpoint Design:
- Endpoints - like a method or function
Rules:
- Grammatical - noun/resource based - verbs are used for actions and don't appear in names for things, etc.
- Readable - /store/provo/order/28502 - design stuff so people can read what it is - a specific order from provo
- Simple - single responsibility principle - it does one thing, and it does it well
- Documented - Open API - you can keep your documentation there
- ^ Not expected to do this for this class, but in a professional setting, you would
- See if the RLL uses this? Or should?
### Three Styles of Endpoints
- Remote procedure call (RPC) - only one endpoint, and you tell the endpoint which command to execute with which parameters (see slides for code) - basically like a huge switch statement, which can get messy
- Representational State Transfer (REST) - nobody actually does REST right. When they say they're doing REST, they mean they're taking advantage of HTTP as much as possible - verbs as actions, readable paths made out of nouns - but that's only a part of REST
- GraphQL - put all of the logic onto the client and give them full access to the data. Just have one endpoint, tell the client how to format requests -kinda like SQL queries
### Cross Site Request Forgery:
- log on to false website, which puts requests to the normal website and funnels it back
- same origin policy

## Express:
Express provides support for:
- Routing requests for service endpoints
- Manipulating HTTP requests with JSON body content
- Generating HTTP responses
- Using middleware to add functionality

## Daemons and Debugging
- Code is running in TWO PLACES:
- Frontend: Chrome - use Chrome debugger - you have to change actual code IN VS CODE though - refresh web page when you update the frontend code
- Backend: Node.js - use VS Code debugger
- don't lose track of what's running where!
- see slides for test project code
- TODO: put frontend code in a public directory (easy way to organize it)
- TODO: put backend code in the root
- WE WON'T BE USING LIVE SERVER ANYMORE - WE'RE LAUNCHING OUR OWN SERVER
- crucial: `app.use(express.static('public'));`
- update frontend code: don't restart the server; refresh the web page
- update backend code: restart server
- YOU CAN SET A BREAKPOINT MIDWAY THROUGH A LINE
- RUN NODE JS: from VS Code - can run or debug
- with Express, you can just give it a JavaScript object and it will turn it into JSON for you
- there are no functions or undefined in JSON
- f2: rename
- from the browser, you can't hide your frontend code, but it does hide your background code
- you use your backend code
- nodemon: look at instructions if you want to use it

### Daemons - PM2
- a gremlin-like program not associated with any user so that it keeps running in the background
- YOU HAVE TO DEPLOY A SERVICE, NOT JUST THE FRONTEND NOW - `deployService.sh` or similar
- `pm2 save`
- THE DAEMON PM2 STUFF IS ALREADY SET UP FOR SIMON AND STARTUP - shouldn't have to touch pm2 at all - in the `deployService.sh`

## Deployment
- In case of system failure, you can debug in the production environment, but GO BACK AND CHANGE IT IN THE DEVELOPMENT ENVIRONMENT! NEVER make 'permanent' changes in the production environment. The next time you push, you'll erase it.
Github -trigger-> Continuous integration --testing,auto-deploy-> staging
                                          '--manual-deploy-> production
- continuous deployment is also a thing
- interruptive deployment: stop, replace, start, pray it works
- rolling drain and replace: multiple servers with load balancer; drain, stop, start...repeat -- basically, have multiple servers going, then stop all requests to a specific server (let it 'drain'), so you can safely stop it, update it, start it again, then move on to the next one
- canary: gradual with error monitoring -- sends like 99% of traffic to old version and 1% to new version. If it still works, have the load balancer gradually increase the traffic going to the new version, then tear the old one down
- blue/green: have two different production environments -- one new version, one old version. If the new version fails, fall back on the blue. You can also have one for staging, then switch to production
- A/B: for doing marketing tests, etc. -- based on some criteria, the load balancer sends some traffic to B instead of A

## Uploading Files
### This is a bad idea because...
- limited space
- no backup
- servers are transient
- multiple servers hosting data
Instead, use a storage service
- AWS S3
- Persistent database
- Memory database

## Databases:
- relational queries, ex. MySQL
- memory cached objects, ex. Redis
- ranked free text (free text search), ElasticSearch
- JSON objects, MongoDB
- key value pairs, DynamoDB
- graph based data, Neo4J
- time series data, InfluxDB

### Structure of Mongo:
- basically an array of JSON objects (called documents)
- you can embed documents in other documents

## Getting set up
- WATCH VIDEO (the one open on YouTube)
- GO THROUGH THE SLIDES - DON'T FORGET THE CREDENTIAL PART (AND IGNORING THE CREDENTIALS ON GIT)
- `npm init -y`
- `npm install mongodb` (or install mongo? look at slides and stuff)
- LOOK AT SLIDES FOR JS CODE FOR MONGO
- LOOK AT SLIDES FOR TESTING CONNECTION CODE, INSERTING DATA CODE
- store your credentials in a config file **and then add that file to gitignore!!**

### Scratch - how to organize database ideas
- user -> projects, username, password
- project -> thought log, reminders, to-do list

## Automated Testing
- Development-only dependencies are a thing
### Frontend (Playwright)
- It can go through and emulate steps - so you don't have to log in and play to step 35 to test
- UI Testing - Playwright
  - getByTestId - test ids are different from the normal ids, so if you change the normal ids, the test id is still there
  - getByRole - can select a button, etc.
- Device Testing - Browser Stack
- See slides for code
### Backend/Endpoint (Jest)
- see slides for code
- jest just kinda inserts itself into things
- supertest (like jest's little brother) starts up the server so jest can run its stuff - `request(app)`

## WebSocket
- HTTP protocol can really only go to from the client to the server. The server can't talk to the client, just reply when the client asks for something
- WebSocket: starts from a client, goes to the server, asks to update from a HTTP to a WebSocket protocol
- Live Server actually uses WebSocket - pushes the new code to the browser
- LOOK AT SLIDES TO GET CODE FOR WEBSOCKET
- your server needs to keep track of all the web socket connections it has (
- request/response: HTTP
- WebSocket - real time response, notifications
- It'll kill the connection if there's too long of a pause, so you can do ping/pong to say 'I'm still alive'
- You don't go directly between clients - each client talks to the server, which talks to the other clients
- You initially connect on a certain port, but then they move you to another port
- `const protocol = window.location.protocol === 'http:'? 'ws' : 'wss';`

## Security
OWASP: Open Worldwide Application Security Project
As disciples of Jesus Christ, we should care about this stuff! It affects real people's lives!
OWASP 10:
1. Broken access control - URL bypass control - if you know the magic URL, it doesn't check if you're actually authorized and allows you to access content in someone else's account. Resource path allows access -- using '.' in paths to get out of the directory you're supposed to
2. Cryptographic failures
   - transmitting data as clear text
   - not encrypting at rest (when it's stored persistently) or transit
   - weak cryptography (SHA1, MD5)
   - misused cryptography (no salt, wrong params)
3. Injection
   - user supplied data is not sanitized and is programatically executed
4. Insecure Design
   - Not aware of best practices
   - Unlimited trial accounts - people sign up over and over again - DOS attack (denial of service)
   - Customer data not segmented - just in one attractive target
   - Single layer defense
5. Security Misconfiguration
   - Development info exposed - ex. printing the stack trace 
   - Using default configurations
   - Unnecessary features installed - increases attack surface area
   - System not hardened - not cleaning up and looking at every parameter
6. Vulnerable Components
   - Unnecessary/unused packages imported
   - Untrusted/verified sources
   - Out of date software
   - Not tracking vulnerability bulletins
   - Package versions not locked
7. ID and Auth Failures
   - Credential stuffing (compromised list) - can stop it by throttling number of passwords
   - Brute force attacks (guess a password)
   - Permitting weak passwords
   - Weak credential recovery
   - Credentials in URL
   - Not expiring auth tokens
8. Software Integrity Failures
   - Unverified CDN usage
   - Unverified packages (nmp install)
   - Unverified updates
   - Insecure CD/CI platforms
9. Logging failure
   - not logging critical requests
   - not monitoring system performance
   - logs not audited
10. Server Side Request Forgery

The line of death: the host name is the only thing you can trust (and even then it can be misleading)

# React
## Web Frameworks:
- Simplify common patterns
- Provide common components
- Improve performance
- Increase device coverage
- They come and go over time, but right now React is going strong
## React:
- Came out of Instagram/Facebook
- Jordan Walke
- "The best drug is getting little things done that have been weighing on you. Instant high."
- Can use a specialized form of bootstrap that works with React
- Actually includes some security stuff
JSX
- combining JavaScript and HTML
- doesn't run natively
- you have to transpile (convert) JSX to JS using Babel
Babel
- can use in codepen
Startup:
- CSS will stay the same
- You'll have a different run command and build command to have it transpile your code
- Only going to have one HTML file. Have some kind of switch statement to change what happens based on the state of the user
- Declare components - see Hello world component function codepen
- Single page application, and you turn each one of your pages into a component. At the top level, you switch between components
- `const [color, setColor] = React.useState("red");`, `onClick={changeColor}`, -- look at the simple function codepen!
- `style={{background:color}}`

## React Router
- React makes a single page application
- Just displays different components - component DOM injection
- LOOK AT SLIDES FOR EXAMPLE OF REACT ROUTER
- Uses NavLinks - `<NavLink to="/users"> Users <`
- `npm run build`
## Vite (pronounced 'veet')
- LOOK AT SLIDES TO GET THE NPM COMMAND (DIFFERENT THAN THE ONES IN THE PAST)
- ^ Run it as a peer to your folder, then copy over everything you want to keep - copy over index.html, package.json?
- copy your current html into different components - move over one page at a time
- FIND THE VIDEO THAT GOES THROUGH PORTING SIMON TO REACT - [bottom of this page](https://learn.cs260.click/page/essentials/simon/simon_md)
- bring in your DOM router
- better to debug frontend from the browser
- have to have a vite.config.js file (code in slides) when debugging so that the frontend actually calls the backend - otherwise, when it tries to go to `/api/home` or whatever, it will try to find it on the frontend
- have to put in the `proxy: {}` part in the vite.config.js file
- YOU'LL HAVE A NEW DEPLOYMENT SCRIPT!


# Deploying to Start-Up Website:
Simon: `./deployService.sh -k /Users/sarah/cs260.pem -h webbrain.click -s simon`
Start-Up: `./deployService.sh -k /Users/sarah/cs260.pem -h webbrain.click -s startup`

# Misc.
- FOR YOUR HTML PROJECT, DON'T FORGET TO UPDATE THE README
- [Public APIs](https://github.com/public-apis/public-apis)
- Content, padding, border, margin
- Code Pen has debug mode
- look into fly-cut for mac
- the browser just loads one html page. Everything starts from there - calling cs files and JavaScript files
- startup: do a setInternal() => 
```
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true, // only sent over HTTPS
    httpOnly: true, // prevents client-side scripts from accessing data
    sameSite: 'strict', // only sent for same-site requests
  });
```
## Misc. MongoDB Notes
- Can open a JavaScript debug terminal in VS Code, then run `node <filename>`




