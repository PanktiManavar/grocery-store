const mongoose = require('mongoose');
const brandmodel = require('../db/branddb')

module.exports = {
    insertbrand: async (req, res) => {
        //  console.log("insert")
        brand = new brandmodel(req.body);

        checkexists_brand = await brandmodel.findOne({ bname: req.body.bname });

        if (checkexists_brand) {

            console.log(JSON.stringify("brand Already exists!"));
            //  resp.status(400).json({ error: [{ msg: 'user already exits' }] });
            return res.send(JSON.stringify("brand Already exists!"));
        } else {
            const result = await brand.save();
            if (result) {
                return res.send(JSON.stringify('brand Register Successsfully'));
            }
        }
    },
    selectbrandById: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await brandmodel.findById(req.params.id);
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
    selectbrand: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await brandmodel.find();
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
    deletebrand: async (req, resp) => {
        try {
            const result = await brandmodel.findByIdAndDelete(req.params.id);
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
    updatebrand: async (req, resp) => {
        try {
            const result = await brandmodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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