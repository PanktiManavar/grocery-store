const express = require('express');
const router = express.Router();
const orderapi = require('../api/order');
const auth = require('../middleware/auth')

router.post('/api/orderinsert/:id', orderapi.insertorder);
router.get('/api/viewOrder', orderapi.vieworder);
router.get('/api/deleteOrder/:id', orderapi.deleteorder);

module.exports = router;