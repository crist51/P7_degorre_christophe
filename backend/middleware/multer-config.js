
const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif' : 'gif',
  
  'image/bmp' : 'bmp',
  'image/webp' : 'webp',  
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');//images étant le dossier ou ce trouvers les images
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + '_' + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');