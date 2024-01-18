# Notes for 260

## Startup Misc.
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

