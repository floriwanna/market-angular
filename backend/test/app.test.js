process.env.NODE_ENV = 'test';
const index = require('../index');
const app = new require('../app')({ collection: (name) => { return [] } }, 'secret');
const chai = require('chai')
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('first HTTP test', () => {
    it('GET - /', () => {
        chai.request(app).get('/').end((err, res) => {
            res.should.have.status(200);
            res.text.should.equal('Hi there!');
            done();
        })
    })
});