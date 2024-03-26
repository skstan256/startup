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
    }
    
}

function logout() {
    
}

