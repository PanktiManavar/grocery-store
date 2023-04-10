const express = require('express');
const router = express.Router();

const PayPalController = require('../api/Paypal');

router.post('/sendItem', PayPalController.sendItem);
router.get('/success', PayPalController.Payment_Success);
router.get('/cancel', PayPalController.Payment_Cancel);

module.exports = router;