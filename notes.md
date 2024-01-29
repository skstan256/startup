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

