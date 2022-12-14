//Pincode api

const mongoose = require('mongoose');
const pincodemodel = require('../db/pincodedb')

module.exports = {
    insertPincode: async (req, res) => {
        //  console.log("insert")
        pincode = new pincodemodel(req.body);

        checkexists_pincode = await pincodemodel.findOne({ pcode: req.body.pcode });

        if (checkexists_pincode) {

            console.log(JSON.stringify("Pincode Already exists!"));
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

    selectPincodeById: async (req, resp) => {
        try {
            const result = await pincodemodel.findById(req.params.id);
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
    deletepincode: async (req, resp) => {
        try {
            const resultp = await pincodemodel.findById(req.params.id);

            if (resultp.status == "Active") {
                const updateinfo = await pincodemodel.findByIdAndUpdate(req.params.id, { $set: { status: "Deactive" } }, { new: true });
                if (updateinfo) {
                    resp.send("Update status in deactive")
                }
                else {
                    resp.send("Status does not update")
                }
            } else if (resultp.status == "Deactive") {
                const updateinfo = await pincodemodel.findByIdAndUpdate(req.params.id, { $set: { status: "Active" } }, { new: true });
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
    updatepincode: async (req, resp) => {
        try {
            const result = await pincodemodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
};