const mongoose = require('mongoose');
const rgmodel = require('../db/registrationdb')
const coupanmodel = require('../db/coupancodedb')
const orderstatusmodel = require('../db/orderstatusdb')

const feedbackSchema = new mongoose.Schema({
    Rid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'rgmodel' }],
        required: [true, "User is required"]
    },
    Address: {
        type: String,
        required: true
    },
    totalprice: {
        type: Number,
        required: true
    },
    ccid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'coupanmodel' }],
        // required: [true, "coupancode is required"]
    },
    finalprice: {
        type: Number,
        required: true
    },
    pinid: {
        type: Number,
        required: true
    },
    rid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'rgmodel' }],
        required: [true, "delivery boy is required"]
    },
    payment_status: {
        type: String,
        required: true
    },
    payment_type: {
        type: String,
        required: true
    },
    payment_id: {
        type: Number
    },
    osid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'rgmodel' }],
        required: [true, "order status is required"]
    },
    cancel_at: {
        type: date
    },
    cancel_by: {
        type: String
    },
    delivery_on: {
        type: Date
    },
    refund_status: {
        type: String
    },

});

module.exports = registartion = mongoose.model('tbl_feedback', feedbackSchema);