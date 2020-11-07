#! /bin/env node

const path = require('path');
let root = path.dirname(__dirname);
let dataDir = path.join(root, 'data');

let config = require('config');
console.log(config);
const MongoClient = require('mongodb').MongoClient;

// let db = new DB.Db(dataDir, { name: dataDir });
if (config.util.getEnv('NODE_ENV') == 'test') {
    console.log("I'm test env");
}

const dbConn = `${config.dbUrl}/${config.dbName}`
MongoClient.connect(dbConn, { useUnifiedTopology: true }, function (err, client) {
    const App = require('./app');
    let app = new App(client.db(), config.secret);
    app.listen(config.port);
})