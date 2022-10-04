const express = require('express');
const router = express.Router();
const productapi = require('../api/product');

router.post('/api/productinsert', productapi.insertproduct);
router.get('/api/productselectbyid/:id', productapi.selectproductById);
router.get('/api/productselect', productapi.selectproduct);
router.delete('/api/productdelete/:id', productapi.deleteproduct);
router.patch('/api/productupdate/:id', productapi.updateproduct);

module.exports = router;