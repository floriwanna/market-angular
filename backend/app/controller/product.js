module.exports = (db) => {
    let router = require('express').Router();
    let productModel = require('./../model/productModel')(db);

    router.get('/list', (req, res, next) => {
        productModel.all().then(x => {
            res.json(x);
            res.end();
        }).catch(err => next(err));
    })

    return router;
}