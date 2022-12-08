const mongoose = require('mongoose');

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
    mname: {
        type: String,
        required: true
    },
    qty: {
        type: String,
        required: true
    },
    bname: {//brand name
        type: String,
        //  required: true
    },
    pimg: {
        type: String,
        //required: true
    },
    subid: {
        //type: mongoose.Schema.Types.ObjectId,
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tbl_subcategory' }],
        required: [true, "Sub-Category is required"]
    },
    status: {
        type: String,
        default: "Active",
        //required: true
    }
});

module.exports = registartion = mongoose.model('tbl_product', productSchema);