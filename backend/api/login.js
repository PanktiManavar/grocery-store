const express = require('express');
const login = require('../db/registrationdb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../db/default');
const { jwtSecret } = require('../db/default');

const createToken = async (id) => {
    try {
        const token = await jwt.sign({ _id: id }, config.jwtSecret);
        return token;
    } catch (error) {
        res.send(error.message);
    }
}
const token =
    module.exports = {
        login: async (req, res) => {
            try {
                if (req.body.Email && req.body.Password) {

                    //Select to hide output
                    let result = await login.findOne({ Email: req.body.Email });
                    if (result) {
                        const validpassword = await bcrypt.compare(req.body.Password, result.Password);

                        // console.log(validpassword); If your password is matched then it returns true.
                        if (validpassword) {

                            if (result.Status === "Active") {
                                if (result.UserType === "customer") {
                                    // res.send("Customer Login Successfull");
                                    mess = "Customer Login Successfull";
                                } else if (result.UserType === "deliveryboy") {
                                    // res.send("Delivery boy Login Successfull");
                                    mess = "Delivery boy Login Successfull";
                                } else if (result.UserType === "Admin") {
                                    // res.send("Admin Login Successfull");
                                    mess = "Admin Login Successfull";
                                } else {
                                    res.send("User are not defined");
                                }
                                // res.send({ result, role: result.UserType });
                                // res.send("login sucess")
                                const tokendata = await createToken(result._id);

                                const response = {
                                    success: true,
                                    msg: mess,
                                    data: result, tokendata
                                }
                                res.status(200).send(response);
                                // localStorage.setItem('token', token);
                            }
                            else {
                                res.send(JSON.stringify("User are not Active"));
                            }

                        } else {
                            res.send(JSON.stringify("Invalid Username or Password!"));
                        }

                    } else {
                        // throw createError(404, 'usernot found');
                        res.send(JSON.stringify("User not found"))
                    }

                    //console.log({ result, auth: token})
                } else {
                    return res.send('Invalid creadential');
                }
            } catch (err) { console.log("server error") }
        },
    }