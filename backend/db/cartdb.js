const mongoose = require('mongoose');
const productmodel = require('../db/productdb')
const rgmodel = require('../db/registrationdb')

const cartSchema = new mongoose.Schema({
    Rid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'rgmodel' }],
        required: [true, "user id is required"]
    },
    Pid: {
        //type: mongoose.Schema.Types.ObjectId,
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'productmodel' }],
        required: [true, "Category is required"]
    },
    qty: {
        type: Number,
        required: true
    },
    mname: {
        type: String,
        required: true
    },
});

module.exports = registartion = mongoose.model('tbl_cart', cartSchema);