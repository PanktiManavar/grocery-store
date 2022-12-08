const mongoose = require('mongoose');
const categorymodel = require('../db/categorydb')

const subcategorySchema = new mongoose.Schema({
    sname: {
        type: String,
        required: true,
        unique: true
    },
    cid: {
        // type: mongoose.Schema.Types.ObjectId,
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tbl_category' }],
        required: [true, "Category is required"]
    },
    status: {
        type: String,
        default: "Active",
    },
});

module.exports = registartion = mongoose.model('tbl_subcategory', subcategorySchema);