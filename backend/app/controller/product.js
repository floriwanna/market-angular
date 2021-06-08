module.exports = (db) => {
    let router = require('express').Router();
    let productModel = require('productModel')(db);

    router.get('/list', (req, res, next) => {

    })
    return router;
}