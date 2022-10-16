const jwt = require('jsonwebtoken')
const config = require('../db/default');

const verifyToken = async (req, resp, next) => {
    const token = req.body.token || req.query.token || req.headers["Authorization"];

    if (!token) {
        resp.status(200).send({ sucsess: false, msg: "A token is required for authentication." });
    }
    try {
        const descode = jwt.verify(token, config.jwtSecret);
        req.user = descode;
    } catch (error) {
        resp.status(400).send("Invalid Token");
    }
    return next();
}

module.exports = verifyToken;