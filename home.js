function setUsername() {
    const usernameEl = document.querySelector('#usernameDisplay');
    displayUsername = localStorage.getItem('username');
    if (displayUsername.length === 0) {
        displayUsername = "Anonymous";
    }
    usernameEl.textContent = displayUsername;
}


