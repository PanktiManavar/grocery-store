const express = require('express');
const router = express.Router();
const subcategoryapi = require('../api/subcategory');

router.post('/api/subcategoryinsert', subcategoryapi.insertsubcategory);
router.get('/api/subcategoryselectbyid/:id', subcategoryapi.selectsubcategoryById);
router.get('/api/subcategoryselect', subcategoryapi.selectsubcategory);
router.delete('/api/subcategorydelete/:id', subcategoryapi.deletesubcategory);
router.patch('/api/subcategoryupdate/:id', subcategoryapi.updatesubcategory);

module.exports = router;