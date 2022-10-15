const express = require('express');
const router = express.Router();
const categoryapi = require('../api/category');

router.post('/api/categoryinsert', categoryapi.insertCategory);
router.get('/api/categoryselectbyid/:id', categoryapi.selectCategoryById);
router.get('/api/categoryselect', categoryapi.selectcategory);
router.patch('/api/categorydelete/:id', categoryapi.deletecategory);
router.patch('/api/categoryupdate/:id', categoryapi.updatecategory);

module.exports = router;