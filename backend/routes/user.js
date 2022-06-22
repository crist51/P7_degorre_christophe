const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');
const password = require ('../middleware/password.js')

router.post('/signin', password, userCtrl.signIn);
router.post('/signup', userCtrl.signUp);

//le route de read & put & delete  est : ("./TemplateUser")

module.exports = router;

