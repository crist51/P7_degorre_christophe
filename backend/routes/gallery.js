const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const galleryCtrl = require('../controllers/gallery');
//const likeCtrl = require('../controllers/like');

router.post('/', auth, multer, galleryCtrl.createGallery);
router.get('/', auth, galleryCtrl.getAllGallery);
router.get('/:id', auth, galleryCtrl.getOneGallery);
//router.put('/:id', auth, multer, galleryCtrl.modifyGallery);
router.delete('/:id', auth, galleryCtrl.deleteGallery);

//router.post('/:id/like', auth, likeCtrl.likeGallery);

module.exports = router;
