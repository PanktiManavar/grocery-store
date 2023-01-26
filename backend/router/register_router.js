//register_router.js

const express = require('express');
const router = express.Router();
const registerapi = require('../api/register');

router.get('/api/registerselectbyid/:id', registerapi.selectRegisterById);
router.get('/api/registerselect', registerapi.selectregister);
router.put('/api/registerupdate/:id', registerapi.updateregister);
router.put('/api/registerdelete/:id', registerapi.deleteregister);
router.put('/api/updatepassword/:id', registerapi.updatepassword);
router.get('/api/deliveryboylist', registerapi.selectdeliveryboy);
router.get('/api/customerlist', registerapi.selectCustomer);
router.post('/api/optsend', registerapi.otpsend);
router.put('/forgotpassword/:id', registerapi.forgotpassword);


module.exports = router;