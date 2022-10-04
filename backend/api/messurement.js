const mongoose = require('mongoose');
const messurementmodel = require('../db/messurementdb')

module.exports = {
    insertmessurement: async (req, res) => {
        //  console.log("insert")
        messurement = new messurementmodel(req.body);

        checkexists_messurement = await messurementmodel.findOne({ mname: req.body.mname });

        if (checkexists_messurement) {

            console.log(JSON.stringify("messurement Already exists!"));
            //  resp.status(400).json({ error: [{ msg: 'user already exits' }] });
            return res.send(JSON.stringify("messurement Already exists!"));
        } else {
            const result = await messurement.save();
            if (result) {
                return res.send(JSON.stringify('messurement Register Successsfully'));
            }
        }
    },
    selectmessurementById: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await messurementmodel.findById(req.params.id);
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
    selectmessurement: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await messurementmodel.find();
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
    deletemessurement: async (req, resp) => {
        try {
            const result = await messurementmodel.findByIdAndDelete(req.params.id);
            if (result) {
                //console.log(result);
                resp.send({ result: result });
            }
            else {
                resp.send("Not found");
                return;
            } z
        }
        catch (err) {
            console.log(err.message);
        }
    },
    updatemessurement: async (req, resp) => {
        try {
            const result = await messurementmodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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