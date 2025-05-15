
const express = require('express');
const router = express.Router();
const loginController = require('./controllers');

router.post('/register', loginController.registrarUsuario);
router.post('/login', loginController.loginUsuario);


module.exports = router;