const mongoose = require('mongoose');

const orderitemSchema = new mongoose.Schema({
    oid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tbl_order' }],
        required: [true, "orderid is required"]
    },
    Pid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tbl_product' }],
        required: [true, "product id is required"]
    },
    qty: {
        type: Number,
        require: true
    },
    mname: {
        type: String,
        required: true
    }
});

module.exports = registartion = mongoose.model('tbl_orderitem', orderitemSchema);