const Multer = require('multer');

module.exports = function () {
    return Multer({
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
}