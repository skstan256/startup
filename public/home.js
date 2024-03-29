function setUsername() {
    const usernameEl = document.querySelector('#usernameDisplay');
    displayUsername = localStorage.getItem('username');
    if (displayUsername.length === 0) {
        displayUsername = "Anonymous";
    }
    usernameEl.textContent = displayUsername;
}

async function getUserProjects() {
    const response = await fetch('/api/home/projects');
    if (response.ok) {
        userData = await response.json();
        // TODO: figure out if this needs to be in local storage
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log('Received user data')
        // TODO: FINISH - DISPLAY USER PROJECTS
        // access by key
    }
    else {
        // TODO: figure this part out (look at Simon's login.js)
        
    }
    
}

async function createProject() {
    const name = document.querySelector('#project-field');
    const nameEl = document.createElement('td');
    nameEl.textContent = name.value;
    const dateAccessed = document.createElement('td');
    // TODO: IMPLEMENT DATE ACCESSED
    dateAccessed.textContent = '---'
    const buttons = document.createElement('td');
    buttons.innerHTML = '<button type="button" class="btn btn-link"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn btn-link"><i class="bi bi-trash"></i></button>';
    // append all the parts to the row
    const rowEl = document.createElement('tr');
    rowEl.append(nameEl);
    rowEl.append(dateAccessed);
    rowEl.append(buttons);
    // append the row to the project list
    const projects = document.querySelector('#projects');
    projects.append(rowEl);
    name.textContent = '';
    const response = await fetch('/api/home/create', {
        method: 'post',
        body: JSON.stringify({projectName: name}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (response.ok) {
        console.log('Project sent')
    }
    // TODO: add a display that confirms it's been 
}

// RUN AT START
getUserProjects();

