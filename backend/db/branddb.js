const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    bname: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        default: "Active",
        //required: true
    },
});

module.exports = registartion = mongoose.model('tbl_brand', brandSchema);