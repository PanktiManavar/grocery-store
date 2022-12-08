const express = require('express');
const router = express.Router();
const login = require('../api/login');

router.post('/api/loging', login.login);
// router.get('/api/logout', login.logout);

module.exports = router;