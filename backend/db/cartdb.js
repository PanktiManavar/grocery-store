const mongoose = require('mongoose');
const productmodel = require('../db/productdb')
const mastercartmodel = require('../db/mastercart')

const cartSchema = new mongoose.Schema({
    Mcid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'mastercartmodel' }],
        required: [true, "master cart id is required"]
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