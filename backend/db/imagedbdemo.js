const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: String,
    img: String
});

module.exports = new mongoose.model('Image', imageSchema);

