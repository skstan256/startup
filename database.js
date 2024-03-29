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
   // create a document containing user data
   const userDataDoc = {
      projects: []
   };
   await userData.insertOne(userDataDoc);
   const userDataID = userDataDoc._id;

   // hash the password before inserting into database
   const passwordHash = await bcrypt.hash(password, 10);

   const user = {
      username: username,
      password: passwordHash,
      userDataID: userDataID,
      projects: [],
      token: uuid.v4(),
   };

   await credentials.insertOne(user);
   
   return user;
}

async function createProject(token) {
   // get user data
   
   const projectDoc = {
      thoughtLog: [],
      toDoList: [],
      reminders: []
   };
   // TODO: FINISH
}
// TODO: figure out if checking token here would be better (more secure)
async function getUserData(userDataID) {
   return userData.findOne({_id: userDataID});
}

async function getUserDataIDByToken(token) {

   return userData.findOne({_id: userDataID});
}

async function updateUserData(userDataID, newData) {
   // TODO: maybe eventually update smarter than replacing the whole thing...
   userData.replaceOne({_id: userDataID}, newData);

}


module.exports = {
   getUser,
   getUserByToken,
   createUser,
   getUserData,
   updateUserData,
   createProject,
}

