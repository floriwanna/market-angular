const parseJSON = require("body-parser").json();
const UploadImage = require('../../service/upload-img');
const ObjectId = require('mongodb').ObjectID;

module.exports = function (db) {
  let router = require('express').Router();

  let productsCollection = db.collection("products");

  router.get('/', (req, res, next) => {
    res.send("Admin Products").end();
  })
  router.post("/add", parseJSON, (req, res, next) => {
    console.error("Agregar validacion del body")
    let product = {
      name: req.body.name,
      unit_price: req.body.unit_price,
      description: req.body.description,
      images: req.body.images
    };

    productsCollection.insertOne(product, (err) => {
      if (err) return next(err);
    });

    res.status(201).json({
      id: product._id
    }).end();
  });

  router.get("/:id", (req, res, next) => {
    productsCollection.find({}).toArray((err, docs) => {
      if (err) return next(err);
      res.status(200).json(docs).end();
    });
  });


  router.post("/image", UploadImage, (req, res, next) => {

    let bucket = require('mongodb').GridFSBucket;
    let gbucket = new bucket(db);
    let Redeable = require('stream');

    let filename = `${(new Date()).getMonth()}-${(new Date()).getDate()}-${(new Date()).getHours()}-${(new Date()).getMinutes()}-${(new Date()).getSeconds()}.${req.files[0].originalname.split('.')[1]}`

    let uploadStream = gbucket.openUploadStreamWithId(ObjectId(), filename)
    let id = uploadStream.id;
    uploadStream.end(req.files[0].buffer, err => {
      if (err) return next(err)

      let chunksQuery = db.collection('fs.files').find({
        _id: id
      });
      chunksQuery.toArray(function (error, docs) {
        console.log(docs)
        res.json(id)
      });
    });
  });



  return router;

}