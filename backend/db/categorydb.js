const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    cname: {
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

module.exports = registartion = mongoose.model('tbl_category', categorySchema);