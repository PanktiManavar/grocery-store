const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const commonapi = require('../api/comman');

router.get('/api/countdata', commonapi.datacount);
router.get('/api/addqty', commonapi.addqty)
module.exports = router;