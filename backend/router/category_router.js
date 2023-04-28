const express = require('express');
const router = express.Router();
const categoryapi = require('../api/category');
const auth = require('../middleware/auth')

router.post('/api/categoryinsert', categoryapi.insertCategory);
router.get('/api/categoryselectbyid/:id', categoryapi.selectCategoryById);
router.get('/api/categoryselect', categoryapi.selectcategory);
router.get('/api/categoryActiveselect', categoryapi.selectActivecategory);
router.get('/api/categoryDeactiveselect', categoryapi.selectDeactivecategory);
router.put('/api/categorydelete/:id', categoryapi.deletecategory);
router.put('/api/categoryupdate/:id', categoryapi.updatecategory);
router.get('/searchcategory/:key', categoryapi.serchproduct);

module.exports = router;