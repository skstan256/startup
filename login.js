async function loginUser() {
    loginOrCreate(`/api/auth/login`)
}

async function createUser() {
    loginOrCreate(`/api/auth/create`)
}

async function loginOrCreate(endpoint) {
    const username = document.querySelector("#username")?.value;
    const password = document.querySelector("#password")?.value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({username: username, password: password}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (response.ok) {
        localStorage.setItem("username", username);
        window.location.href = "home.html";
    }
    else {
        // TODO: figure this part out (look at Simon's login.js)
        const body = await response.json();
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
        // YOU ARE HERE
    }
    
}

function logout() {
    localStorage.removeItem('username');
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}

async function getUser(username) {
    const response = await fetch(`api/user/${username}`);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}

