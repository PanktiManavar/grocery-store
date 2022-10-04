const mongoose = require('mongoose');

const orderstatusSchema = new mongoose.Schema({
    osname: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = registartion = mongoose.model('tbl_orderStatus', orderstatusSchema);