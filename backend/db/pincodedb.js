const mongoose = require('mongoose');

const pincodeSchema = new mongoose.Schema({
    pcode: {
        type: Number,
        required: true,
        unique: true
    },
    status: {
        type: String,
        default: "Active",
    },
});

module.exports = registartion = mongoose.model('tbl_pincode', pincodeSchema);