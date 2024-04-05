const { MongoClient, ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbconfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup')

const credentials = db.collection('credentials');
//const userData = db.collection('userData');
const projects = db.collection('projects');

// REMEMBER TO ADD NEW FUNCTIONS TO MODULE.EXPORTS AT THE BOTTOM

(async function testConnection() {
   await client.connect();
   await db.command({ping: 1});
})().catch((ex) => {
   console.log(`Unable to connect to database with ${url}. Error message: ${ex.message}`);
   process.exit(1);
});


async function getUser(username) {
   return await credentials.findOne({username: username});
}

async function getUserByToken(token) {
   return await credentials.findOne({token: token});
}


async function createUser(username, password) {

   // hash the password before inserting into database
   const passwordHash = await bcrypt.hash(password, 10);

   const user = {
      username: username,
      password: passwordHash,
      projectDisplays: [],
      token: uuid.v4(),
   };

   await credentials.insertOne(user);
   
   return user;
}

async function createProject(token, name) {
   // get user data
   const user = await getUserByToken(token)
   // insert the project
   const projectIDOrig = new ObjectId();
   const projectID = projectIDOrig.toString();
   const projectDoc = {
      userID: user._id,
      projectID: projectID,
      name: name,
      thoughtLog: [],
      toDoList: [],
      reminders: [],
   };
   await projects.insertOne(projectDoc);
   // create project display with name
   const projectDisplay = {
      name: name,
      projectID: projectID,
   };
   
   await credentials.updateOne(
      {_id: user._id},
      { $push: {projectDisplays: projectDisplay}}
   );

   return projectID;
}

async function getProjectByID(projectID) {
   
   return projects.findOne({projectID: projectID});
}

async function addThought(projectID, thought) {
   
   await projects.updateOne(
      {projectID: projectID},
      { $push: {thoughtLog: thought}}
   );

}

async function getUserOfProject(projectID) {
   //const formattedID = new ObjectId(projectID)
   const projUser = await projects.findOne({projectID: formattedID});
   return projUser.userID;
}

async function isUserOfProject(token, projectID) {
   const userOfToken = await getUserByToken(token);
   const projectUserID = await getUserOfProject(projectID);

   return (userOfToken._id === projectUserID);
}

async function getThoughtsOfProject(projectID) {
   let currProject = await getProjectByID(projectID);
   return currProject.thoughtLog;
}


async function getUserProjects(token) {
   const user = await getUserByToken(token);
   if (user) {
      return user.projectDisplays;
   }
   
}




module.exports = {
   getUser,
   getUserByToken,
   createUser,
   createProject,
   getUserProjects,
   addThought,
   isUserOfProject,
   getProjectByID,
   getThoughtsOfProject
}

