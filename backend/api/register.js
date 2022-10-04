const mongoose = require('mongoose');
const registermodel = require('../db/registrationdb');

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
            // return console.log(result);
            if (result) {
                // resp.send("Data updated");
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
            const result = await registermodel.deleteOne();
            if (result) {
                //console.log(result);
                resp.send("Registered User Deleted");
            }
            else {
                resp.send("Not found");
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
};

