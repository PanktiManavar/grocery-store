const mongoose = require('mongoose');
const subcategorymodel = require('../db/subcategorydb')
const categorymodel = require('../db/categorydb');

module.exports = {
    insertsubcategory: async (req, resp) => {

        subcategory = new subcategorymodel(req.body);
        checkexists_subcategory = await subcategorymodel.findOne({ sname: req.body.sname });
        //get category id
        getcid = await categorymodel.findOne({ cid: req.body.cid });

        // if (getid) {
        if (checkexists_subcategory) {
            console.log(JSON.stringify("Sub-Category Already exists!"));
            return resp.send(JSON.stringify("Sub-Category Already exists!"));
        } else {
            const result = await subcategory.save();
            if (result) {
                return resp.send(JSON.stringify('Sub-Category Register Successsfully'));
            }
        }
        // }
        // else {
        //     return resp.send(JSON.stringify('Category id is not valid'));
        // }
    },
    selectsubcategoryById: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await subcategorymodel.findById(req.params.id);
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
    selectsubcategory: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await subcategorymodel.find();
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
    deletesubcategory: async (req, resp) => {
        try {
            const result = await subcategorymodel.findByIdAndDelete(req.params.id);
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
    updatesubcategory: async (req, resp) => {
        try {
            const result = await subcategorymodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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