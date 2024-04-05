// get the current project
const projectID = localStorage.getItem("currProject");
// if no project is selected/remembered, return to the home page
if (!projectID) {
    window.location.href = '/home.html';
}


function setUsername() {
    const usernameEl = document.querySelector('#usernameDisplay');
    displayUsername = localStorage.getItem('username');
    if (displayUsername.length === 0) {
        displayUsername = "Anonymous";
    }
    usernameEl.textContent = displayUsername;
}

function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(true);
        }, milliseconds);
    });
}

function demoReminder() {
    window.alert("Reminder: Commit your project! (3:30pm)");
}

async function remind(reminder) {
    await delay(100000)
    window.alert(reminder);
}

function loadThought(thoughtText) {
    // select thought group
    const thoughtLog = document.querySelector("#thought-log");
    const thought = document.createElement('li');
    thought.className = "list-group-item";
    // TODO: MAKE THIS MORE SECURE - SANITIZE INPUT?
    thought.innerHTML = String(`<span class="list-group-item-text">${thoughtText}</span><menu class="list-group-item-controls"><button type="button" class="btn btn-link"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-link"><i class="bi bi-trash"></i></button></menu>`);
    // appendChild to thought group
    thoughtLog.appendChild(thought);
    
}

// read in thoughts from a database - mocked from local storage
function addDemoThoughts() {
    const demoThoughts = ["We're no strangers to love...", "You know the rules, and so do I..."];
    localStorage.setItem('thoughtLog', JSON.stringify(demoThoughts))
    return demoThoughts;
}

function readInThoughts(thoughts) {
    for (const thought of thoughts) {
        loadThought(thought);
    }
}

async function addThought() {
    // select thought group
    const thoughtLog = document.querySelector("#thought-log");
    const thoughtText = document.querySelector("#thought-field");
    const response = await fetch('/api/project/thought', {
        method: 'post',
        body: JSON.stringify({projectID: projectID, thought: thoughtText}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (response.ok) {
        const thought = document.createElement('li');
        thought.className = "list-group-item";
        // TODO: MAKE THIS MORE SECURE - SANITIZE INPUT
        thought.innerHTML = String(`<span class="list-group-item-text">${thoughtText.value}</span><menu class="list-group-item-controls"><button type="button" class="btn btn-link"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-link"><i class="bi bi-trash"></i></button></menu>`);
        // appendChild to thought group
        thoughtLog.appendChild(thought);
        thoughtText.value = '';
    }
    else {
        // if project is unauthorized, clear the projectID and return home
        localStorage.removeItem('currProject');
        window.location.href = '/home.html';
    }
    
    
    
    

}

function displayQuote(quote) {
    const quoteBox = document.querySelector("#quote-box");
    quoteBox.textContent = quote;
}


function displayCat() {
    const catBox = document.querySelector("#cat-box");
    catBox.innerHTML = '';
    const catImg = document.createElement("img");
    catImg.src = 'https://cataas.com/cat';
    catBox.appendChild(catImg);
}

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onmessage = async (quote_msg) => {
        const quote_msg_data = quote_msg.data; // TODO: FIGURE OUT RIGHT WAY TO ACCESS DATA
        displayQuote(quote_msg_data);
        displayCat();
    }
}

async function getProject() {
    const response = await fetch('/api/project', {
        method: 'post',
        body: JSON.stringify({projectID: projectID}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (response.ok) {
        const project = JSON.parse(response.body.project);
        readInThoughts(project.thoughtLog);
    }
    else {
        // if project is unauthorized, clear the projectID and return home
        localStorage.removeItem('currProject');
        window.location.href = '/home.html';
    }
    
}




setUsername();
//readInThoughts();
configureWebSocket();
displayCat();
getProject();
