const express = require('express');
const router = express.Router();
const pincodeapi = require('../api/pincode');

router.post('/api/pincodeinsert', pincodeapi.insertPincode);
router.get('/api/pincodeselect', pincodeapi.selectpincode);
router.get('/api/pincodeActiveselect', pincodeapi.selectActivepincode);
router.get('/api/pincodeDeactiveselect', pincodeapi.selectDeactivepincode);
router.get('/api/pincodeselectbyid/:id', pincodeapi.selectPincodeById);
router.put('/api/pincodedelete/:id', pincodeapi.deletepincode);
router.put('/api/pincodeupdate/:id', pincodeapi.updatepincode);

module.exports = router; 