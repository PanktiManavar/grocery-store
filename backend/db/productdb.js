const mongoose = require('mongoose');
const subcategorymodel = require('../db/subcategorydb')
const brandmodel = require('../db/branddb')
const messurementmodel = require('../db/messurementdb')
const productSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: true
    },
    descripation: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    mid: {
        // type: mongoose.Schema.Types.ObjectId,
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'messurementmodel' }],
        required: [true, "messurement is required"]
        // required: true
    },
    qty: {
        type: String,
        required: true
    },
    bid: {
        //type: mongoose.Schema.Types.ObjectId,
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'brandmodel' }],
        required: [true, "brand is required"]
    },
    pimg: {
        type: String,
        //required: true
    },
    subid: {
        //type: mongoose.Schema.Types.ObjectId,
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'subcategorymodel' }],
        required: [true, "Sub-Category is required"]
    },
    status: {
        type: String,
        default: "Active",
        //required: true
    }
});

module.exports = registartion = mongoose.model('tbl_product', productSchema);