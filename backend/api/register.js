const mongoose = require('mongoose');
const registermodel = require('../db/registrationdb');
const nodemailer = require('nodemailer')
var bcrypt = require('bcryptjs');

module.exports = {
    selectRegisterById: async (req, resp) => {
        try {
            const result = await registermodel.findById(req.params.id);
            if (result) {
                console.log(result);
                resp.send({ result: result });
            }
            else {
                resp.send("Not found");
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    selectregister: async (req, resp) => {
        try {
            const result = await registermodel.find();
            if (result) {
                //console.log(result);
                resp.send({ result: result });
            }
            else {
                resp.send("Not found");
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    selectdeliveryboy: async (req, resp) => {
        try {
            const result = await registermodel.find({ UserType: "deliveryboy" });
            if (result) {
                //console.log(result);
                resp.send({ result: result });
            }
            else {
                resp.send("Not found");
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    selectCustomer: async (req, resp) => {
        try {
            const result = await registermodel.find({ UserType: "customer" });
            if (result) {
                //console.log(result);
                resp.send({ result: result });
            }
            else {
                resp.send("Not found");
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    //update by id
    updateregister: async (req, resp) => {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = { new: true };
            const result = await registermodel.findByIdAndUpdate(id, update, options);
            if (result) {
                //resp.send("Data updated");
                resp.send({ result: result });
            }
            else {
                resp.send("User Registration is not updated");
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    deleteregister: async (req, resp) => {
        try {
            const resultp = await registermodel.findById(req.params.id);

            if (resultp.Status == "Active") {
                const updateinfo = await registermodel.findByIdAndUpdate(req.params.id, { $set: { Status: "Deactive" } }, { new: true });
                if (updateinfo) {
                    resp.send("Update status in deactive")
                }
                else {
                    resp.send("Status does not update")
                }
            } else if (resultp.Status == "Deactive") {
                const updateinfo = await registermodel.findByIdAndUpdate(req.params.id, { $set: { Status: "Active" } }, { new: true });
                if (updateinfo) {
                    // resp.send(updateinfo)
                    resp.send("Update status in Active")
                }
                else {
                    resp.send("Status does not update")
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    //this otp is for user all ready register or forgot password
    otpsend: async (req, res, next) => {
        const User = await registermodel.findOne({ Email: req.body.Email });
        if (!User) {
            res.send({ error: "There is no user with this email" });
        }

        var userid = User._id
        var OTP = Math.floor((Math.random() * 1000000) + 1);
        var mailoption = {
            from: 'krishnakpatel3121@gmail.com',
            to: `${req.body.Email}`,
            subject: 'Account verfication for Forgot Password ',
            text: `To change Your Password for Online Grocery store, Your OTP IS : ${OTP}`
        }
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'krishnakpatel3121@gmail.com',
                pass: 'fhgbexpsfhklyyjh'
            },
            port: 465,
            host: 'smtp.gmail.com'
        });

        transporter.sendMail(mailoption, (e, info) => {
            if (e) {
                return console.log(e)
            }
            else {
                res.send({ OTP, userid })
            }
        })
    },

    otpsendregister: async (req, res, next) => {
        const User = await registermodel.findOne({ Email: req.body.Email });
        if (User) {
            res.send({ error: "User are already exits Please enter Another id for Registration" });
        }
        var OTP = Math.floor((Math.random() * 1000000) + 1);
        var mailoption = {
            from: 'krishnakpatel3121@gmail.com',
            to: `${req.body.Email}`,
            subject: 'Account verfication for Registration',
            text: `You have Register to Online Grocery store, Your OTP IS : ${OTP}`
        }
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'krishnakpatel3121@gmail.com',
                pass: 'fhgbexpsfhklyyjh'
            },
            port: 465,
            host: 'smtp.gmail.com'
        });

        transporter.sendMail(mailoption, (e, info) => {
            if (e) {
                return console.log(e)
            }
            else {
                res.send({ OTP })
            }
        })
    },

    //this api for change password
    updatepassword: async (req, resp) => {
        try {
            const userid = req.params.id;
            const Password = req.body.Password;

            const data = await registermodel.findById(req.params.id);
            if (data) {
                const validpassword = await bcrypt.compare(req.body.OldPassword, data.Password);
                if (validpassword) {
                    const salt = await bcrypt.genSalt(10);
                    newpass = await bcrypt.hash(Password, salt);
                    // return console.log(newpass);
                    const userdata = await registermodel.findByIdAndUpdate(req.params.id, { $set: { Password: newpass } }, { new: true });
                    if (userdata) {
                        resp.send({ respons: userdata });
                    }
                    else {
                        resp.send("Some problem to updated Password");
                    }
                }
                else {
                    resp.send({ error: "Enter valid exits Password" });
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    forgotpassword: async (req, resp) => {
        try {
            const uid = req.params.id;
            const Password = req.body.Password;
            const options = { new: true };

            const salt = await bcrypt.genSalt(10);
            newpass = await bcrypt.hash(Password, salt);
            // return console.log(newpasss);
            const result = await registermodel.findByIdAndUpdate(uid, { $set: { Password: newpass } }, options);
            if (result) {
                resp.send({ result: result });
            }
            else {
                resp.send({ error: "Password are not Update Please try again !!!" });
            }
            // }
        }
        catch (err) {
            console.log(err.message);
        }
    },
};

