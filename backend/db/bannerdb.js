const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    bimg: {
        type: String,
        required: true,
    },
    bname: {
        type: String,
        // default: "Active",
        required: true
    },
    blink: {
        type: String,
        require: true
    },
    datetime: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        default: "Active"
        //required: true
    },
});

module.exports = registartion = mongoose.model('tbl_banner', bannerSchema);