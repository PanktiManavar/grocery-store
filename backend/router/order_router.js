const express = require('express');
const router = express.Router();
const orderapi = require('../api/order');
const auth = require('../middleware/auth')

router.post('/api/orderinsert', orderapi.insertorder);
router.get('/api/viewallOrder', orderapi.viewallorder);
router.get('/api/deleteOrder/:id', orderapi.deleteorder);
router.get('/api/viewpersonorder/:id', orderapi.viewOneCustomerOrder);
router.put('/api/updateorder/:id', orderapi.updateorder);
router.get('/api/ViewOrderByid/:id', orderapi.vieworderByOId);
router.put('/api/adddelivery/:id', orderapi.updateorder);
router.get('/api/orderdatacount', orderapi.orderdatacount);
module.exports = router;