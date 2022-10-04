//register_router.js

const express = require('express');
const router = express.Router();
const registerapi = require('../api/register');

router.get('/api/registerselectbyid/:id', registerapi.selectRegisterById);
router.get('/api/registerselect', registerapi.selectregister);
router.patch('/api/registerupdate/:id', registerapi.updateregister);
router.delete('/api/registerdelete/:id', registerapi.deleteregister);

module.exports = router;