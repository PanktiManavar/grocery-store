const jwt = require("jsonwebtoken");
const config = require("../db/default");
const users = require('../db/registrationdb');

module.exports = {
    isAuthenticatedUser: async (req, res, next) => {
        const { token } = req.cookies;

        if (!token) {
            // return next(new ErrorHander("Please Login to access this resource", 401));
            res.status(200).send({ sucsess: false, msg: "A token is required for authentication. Please Login to access this resource" });
        }

        const decodedData = jwt.verify(token, config.jwtSecret);

        req.users = await users.findById(decodedData.id);

        next();
    },
    authorizeRoles: (...UserType) => {
        return (req, res, next) => {
            if (!UserType.includes(req.users.UserType)) {
                return next(
                    res.status(200).send({ sucsess: false, msg: `Role: ${req.users.UserType} is not allowed to access this resouce` })
                );
            }
            next();
        };
    }
};