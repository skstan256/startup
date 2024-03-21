const { MongoClient } = require('mongodb');

const config = require('./dbconfig.json');
const url = `mongodb+srv://cs260:cs260password@cluster0.ffl8ijs.mongodb.net/`;
const client = new MongoClient(url);