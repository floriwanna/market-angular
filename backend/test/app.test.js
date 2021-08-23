process.env.NODE_ENV = 'test';
const app = new require('../app')({ collection: (name) => { return [] } }, 'secret');
const request = require('supertest');

describe('first HTTP test', function() {
    it('GET - /', function(){
        return request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type','text/html; charset=utf-8')
        .expect('Hi there!'); 
    });
});