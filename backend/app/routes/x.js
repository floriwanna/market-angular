const { Router } = require("express")
const parseJSON = require("body-parser").json();

module.exports = (db, secret) => {
    const router = Router;

    router, post('/', parseJSON, (req, res, next) => {

    })
    return router;
}