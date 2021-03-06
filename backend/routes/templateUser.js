const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');


const templateUserCtrl = require('../controllers/templateUser');
const auth = require('../middleware/auth')

router.get('/:id', auth, templateUserCtrl.getOneTemplateUser);
router.get('/', auth, templateUserCtrl.getAllTemplateUser);
router.put('/:id', multer, auth, templateUserCtrl.modifyTemplateUser);
router.delete('/:id', auth, templateUserCtrl.deleteTemplateUser);

//la route create user est : ('./user')

module.exports = router;