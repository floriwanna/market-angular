module.export = function (db) {
    let router = require('express').Router;

    router.get('/', (req, res, next) => {
        res.write('checkout');
        res.end();
    });
    return router;
}