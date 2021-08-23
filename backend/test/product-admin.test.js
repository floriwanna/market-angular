const assert = require('assert');
process.env.NODE_ENV = 'test';
const productController = require('./../app/controller/admin/product');
const request = require('supertest');

describe('product', () => {
    describe('add',()=>{
        let db;
    
        let productAdminApp;
        before(async () => {
            db = await require('./mock-db');
            productAdminApp = require('express')();
            productAdminApp.use('/', require('./../app/controller/admin/product')(db, 'secret'));
            // productAdminApp.listen(933);
        });

        let id;

        it('post new', () => {
            // assert.strictEqual(db.databaseName, 'test', 'no es el mismo nombre');
            return request(productAdminApp)
                .post('/add')
                .send({
                    name: 'test',
                    unit_price: 23,
                    description: 'test descripction'
                }).expect(201).then(res => id = res.id);
        });

        it('get/:id', async () => {
            // assert.strictEqual(db.databaseName, 'test', 'no es el mismo nombre');
            return request(productAdminApp).get(`/${id}`).expect(200);
    });
    });
});
