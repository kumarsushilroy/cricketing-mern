
const express = require('express');
const { createUser, LoginUser, getUser } = require('../Controllers/User');

const router = express.Router();

//CREATE USER
router.route('/create/user').post(createUser);

//LOGIN USER
router.route('/login/user').post(LoginUser);


module.exports = router;