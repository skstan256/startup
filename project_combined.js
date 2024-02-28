function setUsername() {
    const usernameEl = document.querySelector('#usernameDisplay')
    usernameEl.textContent = localStorage.getItem('username') ?? 'Anonymous';
}

function demoReminder() {
    window.alert("Reminder: Commit your project! (3:30pm)")
}

function projectOnLoad() {
    setUsername()
    demoReminder()
}