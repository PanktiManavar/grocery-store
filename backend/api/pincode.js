//Pincode api

const mongoose = require('mongoose');
const pincodemodel = require('../db/pincodedb')

module.exports = {
    insertPincode: async (req, res) => {
        pincode = new pincodemodel(req.body);

        checkexists_pincode = await pincodemodel.findOne({ pcode: req.body.pcode });

        if (checkexists_pincode) {
            return res.send(JSON.stringify("Pincode Already exists!"));
        } else {
            const result = await pincode.save();
            if (result) {
                return res.send(JSON.stringify('Pincode Register Successsfully'));
            }
        }
    },

    selectpincode: async (req, resp) => {
        try {
            const result = await pincodemodel.find();
            if (result) {
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

    selectActivepincode: async (req, resp) => {
        try {
            const result = await pincodemodel.find({ status: "Active" });
            if (result) {
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

    selectDeactivepincode: async (req, resp) => {
        try {
            const result = await pincodemodel.find({ status: "Deactive" });
            if (result) {
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

    selectPincodeById: async (req, resp) => {
        try {
            const result = await pincodemodel.findById(req.params.id);
            if (result) {
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
    deletepincode: async (req, resp) => {
        try {
            const resultp = await pincodemodel.findById(req.params.id);

            if (resultp.status == "Active") {
                const updateinfo = await pincodemodel.findByIdAndUpdate(req.params.id, { $set: { status: "Deactive" } }, { new: true });
                if (updateinfo) {
                    resp.send(updateinfo)
                }
                else {
                    resp.send("Status does not update")
                }
            } else if (resultp.status == "Deactive") {
                const updateinfo = await pincodemodel.findByIdAndUpdate(req.params.id, { $set: { status: "Active" } }, { new: true });
                if (updateinfo) {
                    resp.send(updateinfo)
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
    updatepincode: async (req, resp) => {
        try {
            const result = await pincodemodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (result) {
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

    serchproduct: async (req, resp) => {
        try {
            var search = req.params.key;
            var result = await pincodemodel.find(
                {
                    pcode: { $regex: search }
                    , status: "Active"
                })
            if (result) {
                resp.send({ result: result });

            }
            else {
                resp.send("Not found");
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
};