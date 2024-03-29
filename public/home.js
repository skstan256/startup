function setUsername() {
    const usernameEl = document.querySelector('#usernameDisplay');
    displayUsername = localStorage.getItem('username');
    if (displayUsername.length === 0) {
        displayUsername = "Anonymous";
    }
    usernameEl.textContent = displayUsername;
}

async function getUserData() {
    const response = await fetch('/api/home/data');
    if (response.ok) {
        userData = await response.json();
        // TODO: figure out if this needs to be in local storage
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log('Received user data')
    }
    else {
        // TODO: figure this part out (look at Simon's login.js)
        
    }
    
}

// RUN AT START
getUserData();

