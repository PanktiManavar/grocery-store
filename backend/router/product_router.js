const express = require('express');
const router = express.Router();
const productapi = require('../api/product');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')


router.post('/api/productinsert', productapi.insertproduct);
router.get('/api/productselectbyid/:id', productapi.selectproductById);
router.get('/api/productselect', productapi.selectproduct);
router.put('/api/productdelete/:id', productapi.deleteproduct);
router.put('/api/productupdate/:id', productapi.updateproduct);
router.get('/api/ProductSelectBySubdId/:id', productapi.selectProductbCategoryID)

module.exports = router;
