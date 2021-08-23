#! /bin/env node
module.exports = async function () {
    const path = require('path');
    let root = path.dirname(__dirname);
    let dataDir = path.join(root, 'data');

    let config = require('config');
    console.log(config);
    const MongoClient = require('mongodb').MongoClient;

    let dbUrl;

    // SET DB
    if (config.util.getEnv('NODE_ENV') == 'test') {
        console.log("I'm test env");

        const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

        const replset = await MongoMemoryServer.create({ replSet: { count: 4 } });
        dbUrl = replset.getUri();
    } else {
        dbUrl = config.dbUrl;
    }

    const dbConn = `${dbUrl}/${config.dbName}`;
    console.log(dbConn);

    MongoClient.connect(dbConn, {
        useUnifiedTopology: true
    }, function (err, client) {
        const App = require('./app');
        let app = new App(client.db('market'), config.secret);
        app.listen(config.port);
    })
}();
