const mongoose = require('mongoose');

const coupanSchema = new mongoose.Schema({
    ccode: {
        type: String,
        required: true
    },
    ctype: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    cart_min_value: {
        type: Number,
        required: true
    },
    expired_on: {
        type: Date,
        required: true
    },
    added_on: {
        type: Number,
        required: true
    },
});

module.exports = registartion = mongoose.model('tbl_coupancode', coupanSchema);