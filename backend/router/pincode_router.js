//Pincode_route.js

const express = require('express');
//const { selectpincode } = require('../api/pincode');
const router = express.Router();
const pincodeapi = require('../api/pincode');

router.post('/api/pincodeinsert', pincodeapi.insertPincode);
router.get('/api/pincodeselect', pincodeapi.selectpincode);
router.get('/api/pincodeselectbyid/:id', pincodeapi.selectPincodeById);
router.delete('/api/pincodedelete/:id', pincodeapi.deletepincode);
router.patch('/api/pincodeupdate/:id', pincodeapi.updatepincode);

module.exports = router;