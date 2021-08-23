const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const MongoMemoryServer =require('mongodb-memory-server').MongoMemoryServer;

// This is an Example test, do not merge it with others and do not delete this file

describe('Single MongoMemoryServer', () => {
  let con;
  let mongoServer;

  beforeEach(async () => {
    mongoServer = await MongoMemoryServer.create();
    con = await MongoClient.connect(mongoServer.getUri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterEach(async () => {
    if (con) {
      await con.close();
    }
    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  it('should successfully set & get information from the database', async () => {
    const db = con.db(mongoServer.instanceInfo.dbName);
console.log(mongoServer.instanceInfo.dbName)
    
assert.notStrictEqual(db, undefined);
    const col = db.collection('test');
    const result = await col.insertMany([{ a: 1 }, { b: 1 }]);
    // assert.strictEqual(result.result).toMatchSnapshot();
    assert.strictEqual(await col.countDocuments({}),2);
  });
});