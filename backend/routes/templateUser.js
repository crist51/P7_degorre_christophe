const express = require('express');
const router = express.Router();

const templateUserCtrl = require('../controllers/templateUser');
const auth = require('../middleware/auth')

router.get('/:id', auth, templateUserCtrl.getOneTemplateUser);
router.get('/', auth, templateUserCtrl.getAllTemplateUser);
router.put('/:id', auth, templateUserCtrl.modifyTemplateUser);
router.delete('/:id', auth, templateUserCtrl.deleteTemplateUser);

//la route create user est : ('./user')

module.exports = router;