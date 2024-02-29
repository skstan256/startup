function setUsername() {
    const usernameEl = document.querySelector('#usernameDisplay');
    usernameEl.textContent = localStorage.getItem('username') ?? 'Anonymous';
}

function demoReminder() {
    //window.alert("Reminder: Commit your project! (3:30pm)");
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
function readInThoughts() {
    currThoughts = JSON.parse(localStorage.getItem('thoughtLog')) ?? ["We're no strangers to love...", "You know the rules, and so do I..."];
    for (const thought of currThoughts) {
        loadThought(thought);
    }
}

function addThought() {
    // select thought group
    const thoughtLog = document.querySelector("#thought-log");
    const thoughtText = document.querySelector("#thought-field");
    const thought = document.createElement('li');
    thought.className = "list-group-item";
    // TODO: MAKE THIS MORE SECURE - SANITIZE INPUT?
    thought.innerHTML = String(`<span class="list-group-item-text">${thoughtText.value}</span><menu class="list-group-item-controls"><button type="button" class="btn btn-link"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-link"><i class="bi bi-trash"></i></button></menu>`);
    // appendChild to thought group
    thoughtLog.appendChild(thought);
    thoughtText.value = '';
    // save thought to local storage
    
}


function projectOnLoad() {
    setUsername()
    demoReminder()
    readInThoughts()
}