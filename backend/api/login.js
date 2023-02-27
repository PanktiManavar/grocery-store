const express = require('express');
const login = require('../db/registrationdb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../db/default');
const sendToken = require('../utils/jwt_token');

module.exports = {
    login: async (req, res) => {
        try {
            if (req.body.Email && req.body.Password) {

                //Select to hide output
                let result = await login.findOne({ Email: req.body.Email });
                if (result) {
                    const validpassword = await bcrypt.compare(req.body.Password, result.Password);

                    if (validpassword) {

                        if (result.Status === "Active") {
                            if (result.UserType === "customer") {
                                mess = "Customer Login Successfull";
                            } else if (result.UserType === "deliveryboy") {
                                mess = "Delivery boy Login Successfull";
                            } else if (result.UserType === "Admin") {
                                mess = "Admin Login Successfull";
                            } else {
                                res.send("User are not defined");
                            }
                            //JWT token Call
                            sendToken(result, 200, mess, res);
                            // localStorage.setItem('token', token);
                        }
                        else {
                            res.send(JSON.stringify("User are not Active"));
                        }

                    } else {
                        res.send({ error: "Invalid Username or Password!" });
                    }
                } else {
                    res.send(JSON.stringify("User not found"))
                }
            } else {
                return res.send('Invalid creadential');
            }
        } catch (err) { console.log("server error") }
    },

    logout: async (req, res) => {

        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });

        res.status(200).json({
            success: true,
            message: "Logged out"
        });
    }
}