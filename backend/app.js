const express = require('express');
// const { reverse } = require('lodash');
const parseJSON = require("body-parser").json();
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const {
  ObjectID
} = require('mongodb');
const utils = require('./app/service/validator');

function App(db, secret) {
  let app = express();

  const usersCollection = db.collection('users');
  const customerCollection = db.collection('customer');

  app.use('/', require('./app/controller/public')(db));

  app.post('/admin/signin', parseJSON, (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      res.statusCode = 400;
      res.end();
    }
    usersCollection.findOne({
      username: req.body.username
    }, (err, doc) => {
      if (err)
        return next(err);
      if (!doc) return next(new Error("invalid username"));
      if (doc.deactivated) return next(new Error("user is deactivated"));

      bcrypt.compare(req.body.password, doc.password, (err, verifies) => {
        if (err) return next(err);
        if (!verifies) return next(new Error("invalid password"));

        let token = JWT.sign({
          username: doc.username,
          permissions: doc.permissions,
        }, secret);
        res.json(token);
      })
    });
  });

  app.post("/signin", parseJSON, (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      res.statusCode = 400
      res.end();
      return;
    }
    customerCollection.findOne({
      username: req.body.username
    }, (err, doc) => {
      if (err)
        return next(err);
      if (!doc || doc["password"]) return next(new Error("invalid username"));
      if (doc.deactivated) return next(new Error("user is deactivated"));
      bcrypt.compare(req.body.password, doc.password, (err, verifies) => {
        if (err) return next(err);
        if (!verifies) return next(new Error("invalid password"));

        let token = JWT.sign({
          username: doc.username,
        }, secret);
        res.json(token);
      })
    });
  })

  app.post('/signup', parseJSON, (req, res, next) => {

    if (!utils.checkBodyStructure(req.body, ['username', 'password', 'email'])) {
      res.statusCode = 400;
      res.end();
      return
    }

    customerCollection.findOne({
      email: req.body.email
    }, (err, doc) => {
      if (!doc) {
        // Add new user
        bcrypt.hash(req.body.password, 10, (err, encrypted) => {

          customerCollection.insertOne({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: encrypted,
            username: req.body.username
          }, (err) => {
            if (err) return next(err);
            // res.status(200).end();
          });
        })
      } else {
        /*
        This is because, the costumer can order without registration.
        But he would have to validate his email address every purchase 
        */
        if (doc["password"]) {
          res.write('User already registered');
          res.statusCode = 409;
          res.end();
          return;
        }
        bcrypt.hash(body.password, bcrypt.genSalt(), (err, encrypted) => {
          customerCollection.updateOne({
            _id: ObjectID(doc._id)
          }, {
            '$set': {
              name: req.body.name,
              lastname: req.body.lastname,
              password: encrypted,
              username: req.body.username
            }
          })
        })
      }
    })
    res.end()

  })

  return app;

}

module.exports = App;