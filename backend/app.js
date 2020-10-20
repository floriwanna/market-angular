const express = require('express');
// const { reverse } = require('lodash');
const parseJSON = require("body-parser").json();
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
function App(db, secret) {
  let app = express();


  const usersCollection = db.collection('users');
  const customerCollection = db.collection('customer');

  app.get('/', (req, res, next) => {
    res.write('Hi there!')
    res.end();
  });

  app.post('/admin/login', parseJSON, (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      res.statusCode(400)
      res.end();
    }
    usersCollection.findOne({ username: req.body.username }, (err, doc) => {
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

  app.post("/login", parseJSON, (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      res.statusCode(400)
      res.end();
    }
    customerCollection.findOne({ username: req.body.username }, (err, doc) => {
      if (err)
        return next(err);
      if (!doc) return next(new Error("invalid username"));
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

  return app;
}
module.exports = App;