const mongoose = require('mongoose');
const productmodel = require('../db/productdb')
const rgmodel = require('../db/registrationdb')

const cartSchema = new mongoose.Schema({
    Rid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tbl_registrations' }],
        required: [true, "user id is required"]
    },
    Pid: {
        //type: mongoose.Schema.Types.ObjectId,
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tbl_product' }],
        required: [true, "Category is required"]
    },
    qty: {
        type: Number,
        default: 1
        // required: true
    },
    mname: {
        type: String,
        required: true
    },
});

module.exports = registartion = mongoose.model('tbl_cart', cartSchema);