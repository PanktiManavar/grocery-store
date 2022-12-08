const express = require('express');
const router = express.Router();
const orderapi = require('../api/order');
const auth = require('../middleware/auth')

router.post('/api/orderinsert/:id', orderapi.insertorder);

module.exports = router;