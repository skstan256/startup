const { MongoClient } = require('mongodb');
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


function getUser(username) {
   return credentials.findOne({username: username});
}

function getUserByToken(token) {
   return credentials.findOne({token: token});
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
   const user = getUserByToken(token)
   // insert the project
   const projectDoc = {
      userID: user._id,
      thoughtLog: [],
      toDoList: [],
      reminders: [],
   };
   await projects.insertOne(projectDoc);
   const projectID = projectDoc._id;
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
// TODO: figure out if checking token here would be better (more secure)
//async function getUserData(userDataID) {
   //return userData.findOne({_id: userDataID});
//}



async function getUserProjects(token) {
   user = getUserByToken(token);
   if (user) {
      return user.projectDisplays;
   }
   
}




module.exports = {
   getUser,
   getUserByToken,
   createUser,
   createProject,
   getUserProjects
}

