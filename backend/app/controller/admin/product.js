const parseJSON = require("body-parser").json();
const Multer = require('multer');

module.exports = function (db, secret) {
    let router = required('express').Router();

  let productsCollection = db.collection("products");

    router.get("/:id", (req, res, next) => {
    productsCollection.find({}).toArray((err, docs) => {
      if (err) return next(err);
      res.json(docs);
    });
  });

  router.put("/add", parseJSON, (req, res, next) => {
    console.error("Agregar validacion del body")
    let product = {
      id: ObjectId(),
      name: req.body.name,
      unit_price: req.body.unit_price,
      description: req.body.description,
      images: req.body.images
    };

    productsCollection.insert(product, (err) => {
      if (err) return next(err);
    });

    res.status(201).end();
  });

   let upload = Multer({
    fileFilter: (req, file, cb) => {
      // console.log(file)
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  })

  router.post("/image", upload.any(), (req, res, next) => {
    // console.log(req.files)
    let bucket = require('mongodb').GridFSBucket;
    let gbucket = new bucket(db);
    let Redeable = require('stream');

    let filename = `${(new Date()).getMonth()}-${(new Date()).getDate()}-${(new Date()).getHours()}-${(new Date()).getMinutes()}-${(new Date()).getSeconds()}.${req.files[0].originalname.split('.')[1]}`

    let uploadStream = gbucket.openUploadStreamWithId(ObjectId(), filename)
    let id = uploadStream.id;
    uploadStream.end(req.files[0].buffer, err => {
      if (err) return next(err)

      let chunksQuery = db.collection('fs.files').find({ _id: id });
      chunksQuery.toArray(function (error, docs) {
        console.log(docs)
        res.json(id)
      });
    });
  });



  return router;

}
