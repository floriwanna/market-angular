const e = require("express");
const {
    add, debounce
} = require("lodash");

const parseJSON = require("body-parser").json();
module.exports = (db) => {
    let router = require('express').Router();

    router.get('/', (req, res, next) => {
        res.write('checkout');
        res.end();
    });

    router.post('/add', parseJSON, (req, res, next) => {
        const finishAddignSale = () => {
            let products = [];
            if (req.body.products instanceof Array)
                products = req.body.products;
            else
                products.push(req.body.products);

            let sale = {
                customer: customer_id,
                date: Date.now(),
                products: products,
                total: products.reduce((t, c) => {
                    return t + c.price;
                }, 0),
                paymentid: null,
            };

            db.sales.insertOne(sale, (err) => {
                if (err) return next(err);
            });

            db.customer.findOne({ _id: customer_id }, (err, doc) => {
                if (err) next(err);

                if (!doc) {
                    if (doc.lasts_shoppings.length == 10)
                        doc.lasts_shoppings.pop();
                    doc.lasts_shoppings.unshift({
                        sale_id: sale._id,
                        date: sale.date,
                        tot_products: sale.products.length
                    })
                    db.customer.updateOne({ _id: customer_id }, {
                        $set: { lasts_shoppings: doc.lasts_shoppings },
                        $currentDate: { lastModified: true }
                    });
                }
            });

            res.status(201).json({
                id: sale._id
            }).end();
        }


        if (!req.body === undefined || !req.body.email ||
            !req.body.products) res.status(403).end();

        let customer_id;

        if (req.body.customer_id) {
            finishAddignSale(req.body.customer_id);
            next();
        }

        db.customer.findOne({
            email: req.body.email,
        },
            (err, doc) => {
                if (err) next(err);

                if (!doc) {

                    let customer = {
                        email: req.body.email,
                        name: null,
                        lastname: null,
                        password: null,
                        username: req.body.email,
                        sales: []
                    };

                    db.customer.insertOne(
                        customer, (err) => {
                            if (err) return next(err);
                        });
                    customer_id = customer._id;
                } else
                    customer_id = doc._id;

                finishAddignSale(customer._id);

            });



    });
    return router;
}