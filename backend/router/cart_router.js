const express = require('express');
const router = express.Router();
const mastercartapi = require('../api/cart');


router.post('/api/cartinsert', mastercartapi.insertcart);
router.put('/api/cartupdate/:id', mastercartapi.updatecart);
router.delete('/api/cartdelete/:id', mastercartapi.deletecart);
router.get('/api/cartgetbyid/:id', mastercartapi.selectcartById);
router.get('/api/cartview', mastercartapi.viewcart);
router.get('/api/lastrecordview', mastercartapi.lastrecord);

module.exports = router;