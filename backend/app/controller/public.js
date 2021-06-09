module.exports = (db) => {
  let router = require('express').Router();

  router.get('/', (req, res, next) => {
    res.set('content-type', 'text/html');
    res.write('Hi there!');
    res.end();
  });

  router.post('/', (req, res, next) => {
    res.set('content-type', 'text/html')
    res.write('post');
    res.end();
  })

  return router;

}