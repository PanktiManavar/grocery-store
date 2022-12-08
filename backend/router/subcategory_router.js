const express = require('express');
const router = express.Router();
const subcategoryapi = require('../api/subcategory');
const auth = require('../middleware/auth')

router.post('/api/subcategoryinsert', subcategoryapi.insertsubcategory);
router.get('/api/subcategoryselectbyid/:id', subcategoryapi.selectsubcategoryById);
router.get('/api/subcategoryselect', subcategoryapi.selectsubcategory);
router.put('/api/subcategorydelete/:id', subcategoryapi.deletesubcategory);
router.put('/api/subcategoryupdate/:id', subcategoryapi.updatesubcategory);
router.get('/api/subcategoryByCategoryid/:id', subcategoryapi.selectSubcategoryByCategoryID);

router.get('/searchsubcategory', subcategoryapi.serchproduct);

module.exports = router;