const mongoose = require('mongoose');
const categorymodel = require('../db/categorydb')

module.exports = {
    insertCategory: async (req, res) => {
        //  console.log("insert")
        category = new categorymodel(req.body);

        checkexists_category = await categorymodel.findOne({ cname: req.body.cname });

        if (checkexists_category) {

            console.log(JSON.stringify("Category Already exists!"));
            //  resp.status(400).json({ error: [{ msg: 'user already exits' }] });
            return res.send(JSON.stringify("Category Already exists!"));
        } else {
            const result = await category.save();
            if (result) {
                return res.send(JSON.stringify('Category Register Successsfully'));
            }
        }
    },
    selectCategoryById: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await categorymodel.findById(req.params.id);
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
    selectcategory: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await categorymodel.find();
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
    deletecategory: async (req, resp) => {
        try {
            const result = await categorymodel.findByIdAndDelete();
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
    updatecategory: async (req, resp) => {
        try {
            const result = await categorymodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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