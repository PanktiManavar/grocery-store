const mongoose = require('mongoose');
const subcategorymodel = require('../db/subcategorydb')
const categorymodel = require('../db/categorydb');

module.exports = {
    insertsubcategory: async (req, resp) => {

        subcategory = new subcategorymodel(req.body);
        checkexists_subcategory = await subcategorymodel.findOne({ sname: req.body.sname });
        //get category id
        getcid = await categorymodel.findOne({ cid: req.body.cid });

        if (checkexists_subcategory) {
            return resp.send(JSON.stringify("Sub-Category Already exists!"));
        } else {
            const result = await subcategory.save();
            if (result) {
                return resp.send(JSON.stringify('Sub-Category Register Successsfully'));
            }
        }

    },
    selectsubcategoryById: async (req, resp) => {
        try {
            // var id = "632aa96f3443edea84f0bd9d"
            const result = await subcategorymodel.findById({ _id: req.params.id }).populate("cid", "cname");
            if (result) {
                resp.send({ result: result });
            }
            else {
                resp.send(JSON.stringify('Not record found'));
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
    selectSubcategoryByCategoryID: async (req, resp) => {
        try {
            const result = await subcategorymodel.find({ status: "Active", cid: req.params.id });
            if (result) {
                resp.send({ result: result });
            }
            else {
                resp.send(JSON.stringify('Not record found'));
                return;
            }
        } catch (err) {
            console.log(err.message);
        }
    },
    selectsubcategory: async (req, resp) => {
        try {
            const result = await subcategorymodel.find().populate("cid", "cname");

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
    selectActivesubcategory: async (req, resp) => {
        try {
            const result = await subcategorymodel.find({ Status: "Active" }).populate("cid", "cname");

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
    selectDeactivesubcategory: async (req, resp) => {
        try {
            const result = await subcategorymodel.find({ Status: "Deactive" }).populate("cid", "cname");

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
    deletesubcategory: async (req, resp) => {
        try {
            const resultp = await subcategorymodel.findById(req.params.id);

            if (resultp.status == "Active") {
                const updateinfo = await subcategorymodel.findByIdAndUpdate(req.params.id, { $set: { status: "Deactive" } }, { new: true });
                if (updateinfo) {
                    resp.send("Update status in deactive")
                }
                else {
                    resp.send("Status does not update")
                }
            } else if (resultp.status == "Deactive") {
                const updateinfo = await subcategorymodel.findByIdAndUpdate(req.params.id, { $set: { status: "Active" } }, { new: true });
                if (updateinfo) {
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
    updatesubcategory: async (req, resp) => {
        try {
            const result = await subcategorymodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
            var result = await subcategorymodel.find({
                "$or": [
                    { sname: { $regex: ".*" + search + ".*", $options: "i" } },
                ], status: "Active"
            }).populate("cid", "cname")
            if (result) {
                resp.send({ result: result });
            }
            else {
                resp.send({ msg: "Not found" })
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
};