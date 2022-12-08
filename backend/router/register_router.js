//register_router.js

const express = require('express');
const router = express.Router();
const registerapi = require('../api/register');

router.get('/api/registerselectbyid/:id', registerapi.selectRegisterById);
router.get('/api/registerselect', registerapi.selectregister);
router.put('/api/registerupdate/:id', registerapi.updateregister);
router.put('/api/registerdelete/:id', registerapi.deleteregister);
router.put('/api/updatepassword', registerapi.updatepassword);

module.exports = router;