const express = require('express');
const router = express.Router();
const categoryapi = require('../api/category');
const auth = require('../middleware/auth')

router.post('/api/categoryinsert', auth, categoryapi.insertCategory);
router.get('/api/categoryselectbyid/:id', auth, categoryapi.selectCategoryById);
router.get('/api/categoryselect', auth, categoryapi.selectcategory);
router.patch('/api/categorydelete/:id', auth, categoryapi.deletecategory);
router.patch('/api/categoryupdate/:id', auth, categoryapi.updatecategory);

module.exports = router;