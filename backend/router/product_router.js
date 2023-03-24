const express = require('express');
const router = express.Router();
const productapi = require('../api/product');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')


router.post('/api/productinsert', productapi.insertproduct);
router.get('/api/productselectbyid/:id', productapi.selectproductById);
router.get('/api/productselect', productapi.selectproduct);
router.get('/api/productActiveselect', productapi.selectActiveproduct);
router.get('/api/productDeactiveselect', productapi.selectDeactiveproduct);
router.put('/api/productdelete/:id', productapi.deleteproduct);
router.put('/api/productupdate/:id', productapi.updateproduct);
router.get('/api/ProductSelectBySubdId', productapi.selectProductbCategoryID)
router.get('/api/ProductBnameEmpty', productapi.selectBnameEmptyProduct)
router.get('/api/ProductWithoutEmptyBname/:id', productapi.selectproductWithoutEmpty)
module.exports = router;
