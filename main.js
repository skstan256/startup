function setUsername() {
    const usernameEl = document.querySelector('#usernameDisplay')
    usernameEl.textContent = localStorage.getItem('username') ?? 'Anonymous';
}