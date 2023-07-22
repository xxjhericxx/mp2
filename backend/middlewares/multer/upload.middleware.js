const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    console.log(`${Date.now()}_${Math.floor((Math.random() * 100000000) + 10000000)}${path.extname(file.originalname)}`);
    cb(null, `${Date.now()}_${Math.floor((Math.random() * 100000000) + 10000000)}${path.extname(file.originalname)}`)
  }
});

exports.upload = multer({storage: storage});