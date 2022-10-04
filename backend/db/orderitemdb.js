const mongoose = require('mongoose');
const ordermodel = require('../db/orderdb')
const productmodel = require('../db/productdb')
const messuremodel = require('../db/messurementdb')

const orderitemSchema = new mongoose.Schema({
    oid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ordermodel' }],
        required: [true, "orderid is required"]
    },
    pid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'productmodel' }],
        required: [true, "product id is required"]
    },
    qty: {
        type: Number,
        require: true
    },
    mid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'messurementmodel' }],
        required: [true, "messurement is required"]
    }
});

module.exports = registartion = mongoose.model('tbl_category', orderitemSchema);