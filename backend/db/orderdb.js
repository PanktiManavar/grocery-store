const mongoose = require('mongoose');
const rgmodel = require('../db/registrationdb')
const coupanmodel = require('../db/coupancodedb')
const pincodemodel = require('../db/pincodedb');

const feedbackSchema = new mongoose.Schema({
    Rid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tbl_registrations' }],
        required: [true, "User is required"]
    },
    Address: {
        type: String,
        required: true
    },
    Totalprice: {
        type: Number,
        required: true
    },
    ccid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tbl_coupancode' }],
        // required: [true, "coupancode is required"]
    },
    Finalprice: {
        type: Number,
        required: true
    },
    Pinid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: pincodemodel }],
        required: [true, "Pincode is required"]
    },
    Odate: {
        type: String,
        require: true
    },
    Drid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tbl_registrations' }],
        // required: [true, "delivery boy is required"]
    },
    payment_status: {
        type: String,
        required: true
    },
    payment_type: {
        type: String
    },
    payment_id: {
        type: Number
    },
    ostatus: {
        type: String,
        required: true
    },
    cancel_at: {
        type: Date
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

module.exports = registartion = mongoose.model('tbl_order', feedbackSchema);