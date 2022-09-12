const e = require("express");
const {
    add
} = require("lodash");

const parseJSON = require("body-parser").json();
module.exports = (db) => {
    let router = require('express').Router();

    let salesCollection = db.collection("sales");
    /*
    router.get('/', (req, res, next) => {
        res.write('checkout');
        res.end();
    });
    */
    router.post('/add', parseJSON, (req, res, next) => {
        const addProduct = function () {
            let products = [];
            if (req.body.products instanceof Array)
                products = req.body.products;
            else
                products.push(req.body.products);


            let sale = {
                customer: customeid,
                date: Date.now(),
                products: products,
                total: products.reduce((t, c) => {
                    return t + c.price;
                }, 0),
                paymentid: null,
            };

            salesCollection.insertOne(sale, (err) => {
                if (err) return next(err);
            })

            res.status(201).json({
                id: sale._id
            }).end();
        }

        if (!req.body === undefined || !req.body.email ||
            !req.body.products) res.status(403).end();

        let customeid;
        if (req.body.customerid) {
            addProduct();
            next();
        }
        let customerColection = db.collection('customer');
        customerColection.findOne({
                email: req.body.email,
            },
            (err, doc) => {
                if (!doc) {

                    let customer = {
                        email: req.body.email,
                        name: null,
                        lastname: null,
                        password: null,
                        username: req.body.email
                    };

                    customerColection.insertOne(
                        customer, (err) => {
                            if (err) return next(err);
                        });
                    customeid = customer._id;
                } else
                    customeid = doc._id;

                addProduct();

            });



    });
    return router;
}