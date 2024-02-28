function setUsername() {
    const usernameEl = document.querySelector('#usernameDisplay')
    usernameEl.textContent = localStorage.getItem('username') ?? 'Anonymous';
}

function demoReminder() {
    window.alert("Reminder: Commit your project! (3:30pm)")
}

function setDemoThoughts() {

}


function addThought() {
    // select thought group
    const thoughtText = document.querySelector("#thought-field")
    const thought = document.createElement('li')
    thought.className = "list-group-item";
    thought.innerHTML = `<span class="list-group-item-text">${thoughtText}</span><menu class="list-group-item-controls"><button type="button" class="btn btn-link"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-link"><i class="bi bi-trash"></i></button></menu>`;
    // appendChild to thought group
}

function projectOnLoad() {
    setUsername()
    demoReminder()
}