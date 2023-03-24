const express = require('express');
const router = express.Router();
const orderapi = require('../api/order');
const auth = require('../middleware/auth')

router.post('/api/orderinsert', orderapi.insertorder);
router.get('/api/viewOrder/:id', orderapi.vieworder);
router.get('/api/viewallOrder', orderapi.viewallorder);
router.get('/api/deleteOrder/:id', orderapi.deleteorder);
router.get('/api/viewpersonorder/:id', orderapi.viewOneCustomerOrder);

module.exports = router;