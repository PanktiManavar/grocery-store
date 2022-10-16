const express = require('express');
const router = express.Router();
const feedbackapi = require('../api/feedback');

router.post('/api/feedbackinsert', feedbackapi.insertfeedback);
router.get('/api/feedbackselectbyid/:id', feedbackapi.selectfeedbackById);
router.get('/api/feedbackselect', feedbackapi.selectfeedback);

module.exports = router;