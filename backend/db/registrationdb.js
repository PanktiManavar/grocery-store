const mongoose = require('mongoose');

const Registrationschema = new mongoose.Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    MobileNo: {
        type: Number,
        required: true,
        unique: true
    },
    Gender: {
        type: String,
        required: true,
        //enam: ["m", "f"]
    },
    Address: {
        type: String,
        required: true
    },
    Pincode: {
        type: Number,
        required: true
    },
    UserType: {
        type: String,
        required: true
        // default: "customer",
        // enam: ["customer", "deliveryboy"]

    },
    Status: {
        type: String,
        default: "Active",
    }
});

module.exports = registartion = mongoose.model('tbl_registrations', Registrationschema);