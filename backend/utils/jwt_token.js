// Create Token and saving in cookie

const config = require("../db/default");
const { jwtSecret, jwtExpired } = require('../db/default');
const jwt = require('jsonwebtoken');

const sendToken = async (user, statusCode, mess, res) => {
    const token = await jwt.sign({ _id: user.id }, jwtSecret);

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + 5 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    const response = {
        success: true,
        msg: mess,
        data: user, token
    }
    res.status(statusCode).cookie("token", token, options).json({
        response
    });

};

module.exports = sendToken;
