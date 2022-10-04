const mongoose = require('mongoose');
const rgmodel = require('../db/registrationdb')

const feedbackSchema = new mongoose.Schema({
    Rid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'rgmodel' }],
        required: [true, "customer is required"]
    },
    comment: {
        type: String,
        // default: "Active",
        required: true
    },
});

module.exports = registartion = mongoose.model('tbl_feedback', feedbackSchema);