const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth')
//const likeCtrl = require('../controllers/like');

router.post('/', /*auth,*/ postCtrl.createPost);
router.get('/', /*auth,*/ postCtrl.getAllPost);
router.get('/:id', /*auth,*/ postCtrl.getOnePost);
router.put('/:id', /*auth,*/ postCtrl.modifyPost);
router.delete('/:id', /*auth,*/ postCtrl.deletePost);

//router.post('/:id/like', auth, likeCtrl.likePost);

module.exports = router;