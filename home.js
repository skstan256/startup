function setUsername() {
    const usernameEl = document.querySelector('#usernameDisplay');
    const displayUsername = localStorage.getItem('username');
    if (displayUsername.length === 0) {
        displayUsername = "Anonymous";
    }
    usernameEl.textContent = displayUsername;
}

async function getUserProjects() {
    const response = await fetch('/api/home/projects');
    if (response.ok) {
        console.log('Received user data')
        return response.json();
    }
    else {
        window.location.href = '/index.html'
    }
    
}

async function createProject() {
    const name = document.querySelector('#project-field');

    const response = await fetch('/api/home/create', {
        method: 'post',
        body: JSON.stringify({projectName: name.value}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (response.ok) {
        console.log('Project sent');
        const projectID_JSON = await response.json();
        const projectID = projectID_JSON.projectID;
        const nameEl = document.createElement('td');
        // TODO: FIGURE OUT HOW TO MAKE THIS SECURE (OR MAYBE JUST WAIT FOR REACT)
        // name.value
        nameEl.innerHTML = `<button class="btn btn-secondary" onclick="goToProject(\'${projectID}\')">${name.value}</button>`
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
        name.value = '';
    }
    else {
        // TODO: FIGURE OUT WHAT TO PUT HERE
    } 
    
    // TODO: add a display that confirms project has been added successfully
}

function displayProject(project) {
    const name = project.name;
    const projectID = project.projectID;
    const nameEl = document.createElement('td');
    // TODO: FIGURE OUT HOW TO MAKE THIS SECURE (OR MAYBE JUST WAIT FOR REACT)
    // name.value
    nameEl.innerHTML = `<button class="btn btn-secondary" onclick="goToProject(\'${projectID}\')">${name}</button>`
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
}
async function displayProjects(){
    const response = await getUserProjects();
    const projectDisplays = response.projectDisplays;
    projectDisplays.forEach(displayProject);
}

function goToProject(projectID) {
    localStorage.setItem('currProject', projectID);
    window.location.href = '/project_combined.html';
}

// RUN AT START
displayProjects();

