const mongoose = require('mongoose');
const registermodel = require('../db/registrationdb');
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

    changepassword: async (req, resp) => {
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
    updatepassword: async (req, resp) => {
        try {
            const userEmail = req.body.Email;
            const Password = req.body.Password;
            const data = await registermodel.findOne({ Email: userEmail });
            if (data) {
                const salt = await bcrypt.genSalt(10);
                newpass = await bcrypt.hash(Password, salt);
                const userdata = await registermodel.updateOne({ Email: userEmail }, { $set: { Password: newpass } });
                if (userdata) {
                    resp.send("Your Password has been  updated");
                }
                else {
                    resp.send("Some problem to updated Password");
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
};

