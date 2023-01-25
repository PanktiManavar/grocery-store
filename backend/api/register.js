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

    otpsend: async (req, res, next) => {
        const User = await registermodel.findOne({ Email: req.body.Email });
        if (!User) {
            return res.send("There is no user with that email");
        }

        var OTP = Math.floor((Math.random() * 1000000) + 1);
        var mailoption = {
            from: 'palakmanavar@gmail.com',
            to: `${req.body.Email}`,
            subject: 'Account verfication for register',
            text: `Your OTP is ${OTP}`
        }
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'palakmanavar@gmail.com',
                pass: 'cqrvuokhkdfvizdy'
            },
            port: 465,
            host: 'smtp.gmail.com'
        });

        transporter.sendMail(mailoption, (e, info) => {
            if (e) {
                //return console.log("email not send sucessfully")
                return console.log(e)
            }
            else {
                return console.log("email send  sucessfully")
            }
        })
    },

    updatepassword: async (req, resp) => {
        try {
            const userEmail = req.body.Email;
            const OldPassword = req.body.OldPassword;
            const Password = req.body.Password;

            const data = await registermodel.findOne({ Email: userEmail });
            if (data) {
                const validpassword = await bcrypt.compare(req.body.OldPassword, data.Password);
                if (validpassword) {
                    const salt = await bcrypt.genSalt(10);
                    newpass = await bcrypt.hash(Password, salt);
                    const userdata = await registermodel.updateOne({ Email: userEmail }, { $set: { Password: newpass } });
                    if (userdata) {
                        resp.send({ respons: userdata });
                    }
                    else {
                        resp.send("Some problem to updated Password");
                    }
                }
                else {
                    resp.send("Enter valid Password");
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
};

