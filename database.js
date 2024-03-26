const { MongoClient } = require('mongodb');
const config = require('./dbconfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);


const db = client.db('webbrain');
const userCollection = db.collection('users');


(async function testConnection() {
   await client.connect();
   await db.command({ping: 1});
})().catch((ex) => {
   console.log(`Unable to connect to database with ${url}. Error message: ${ex.message}`);
   process.exit(1);
});


