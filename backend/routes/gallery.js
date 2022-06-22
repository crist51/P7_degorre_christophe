const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const galleryCtrl = require('../controllers/gallery');

router.post('/', auth, multer, galleryCtrl.createGallery);
router.get('/', auth, galleryCtrl.getAllGallery);
router.get('/:id', auth, galleryCtrl.getOneGallery);
//router.put('/:id', auth, multer, galleryCtrl.modifyGallery);
router.delete('/:id', auth, galleryCtrl.deleteGallery);


module.exports = router;
