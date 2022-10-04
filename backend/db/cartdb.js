const mongoose = require('mongoose');
const cartmodel = require('../db/categorydb')
const productmodel = require('../db/productdb')
const rgmodel = require('../db/registrationdb')
const messuremodel = require('../db/messurementdb')

const cartSchema = new mongoose.Schema({
    Rid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'rgmodel' }],
        required: [true, "Category is required"]
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
    mid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'messuremodel' }],
        required: true
    },
});

module.exports = registartion = mongoose.model('tbl_cart', cartSchema);