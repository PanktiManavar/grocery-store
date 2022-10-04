const express = require('express');
const router = express.Router();
const brandapi = require('../api/brand');

router.post('/api/brandinsert', brandapi.insertbrand);
router.get('/api/brandselectbyid/:id', brandapi.selectbrandById);
router.get('/api/brandselect', brandapi.selectbrand);
router.delete('/api/branddelete/:id', brandapi.deletebrand);
router.patch('/api/brandupdate/:id', brandapi.updatebrand);

module.exports = router;