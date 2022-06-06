const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');
const password = require ('../middleware/password.js')

router.post('/signup', password, userCtrl.signup);//passwordsheama est a tester
router.post('/login', userCtrl.login);

//le route de read & put & delete  est : ("./TemplateUser")

module.exports = router;

