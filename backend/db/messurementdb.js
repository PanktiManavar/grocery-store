const mongoose = require('mongoose');

const messurementSchema = new mongoose.Schema({
    mname: {
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

module.exports = registartion = mongoose.model('tbl_unit_messurement', messurementSchema);