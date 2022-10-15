const mongoose = require('mongoose');
const rgmodel = require('../db/registrationdb')

const mastercartSchema = new mongoose.Schema({
    Rid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'rgmodel' }],
        required: [true, "user id is required"]
    }
})

module.exports = registartion = mongoose.model('tbl_mastercart', mastercartSchema);