const { MongoClient } = require('mongodb');
const config = require('./dbconfig.json');


async function main() {
    const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
    const client = new MongoClient(url);
    const db = client.db('startup');
    const userCollection = db.collection('users');
    
    (async function testConnection() {
        await client.connect();
        await db.command({ping: 1});
     })().catch((ex) => {
        console.log(`Unable to connect to database with ${url}. Error message: ${ex.message}`);
        process.exit(1);
     });

     const user = {
        projects: [
            {
                name: 'cs260',
                thought_log: [
                    {text: ''},
                    {text: ''},
                    {text: ''}
                ],
                to_do_list: [
                    {text: 'Deploy Simon', completed: false},
                    {text: 'Finish Data Services', completed: true}
                ],
                reminders: [
                    {text: 'Commit!', remindAt: new Date()}
                ]
            }
        ]
    }
    await userCollection.insertOne(user);
}

main().catch(console.error);