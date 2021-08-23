const { MongoMemoryServer } = require('mongodb-memory-server');
const MongoClient = require('mongodb').MongoClient;

module.exports = (async () => {

    let mongoMemory;
    let con;

    mongoMemory = await MongoMemoryServer.create();
    con = await MongoClient.connect(mongoMemory.getUri(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return con.db('test');
})();