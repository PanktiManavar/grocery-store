const express = require('express');
const router = express.Router();
const messurementapi = require('../api/messurement');

router.post('/api/messurementinsert', messurementapi.insertmessurement);
router.get('/api/messurementselectbyid/:id', messurementapi.selectmessurementById);
router.get('/api/messurementselect', messurementapi.selectmessurement);
router.delete('/api/messurementdelete/:id', messurementapi.deletemessurement);
router.patch('/api/messurementupdate/:id', messurementapi.updatemessurement);

module.exports = router;