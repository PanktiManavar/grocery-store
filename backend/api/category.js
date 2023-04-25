const mongoose = require('mongoose');
const categorymodel = require('../db/categorydb')

module.exports = {
    insertCategory: async (req, res) => {
        category = new categorymodel(req.body);

        checkexists_category = await categorymodel.findOne({ cname: req.body.cname });

        if (checkexists_category) {
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
            const result = await categorymodel.findById(req.params.id);
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
    selectcategory: async (req, resp) => {
        try {
            const result = await categorymodel.find();
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

    selectActivecategory: async (req, resp) => {
        try {
            const result = await categorymodel.find({ status: "Active" });
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
    selectDeactivecategory: async (req, resp) => {
        try {
            const result = await categorymodel.find({ status: "Deactive" });
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
    deletecategory: async (req, resp) => {
        try {
            const resultp = await categorymodel.findById(req.params.id);

            if (resultp.status == "Active") {
                const updateinfo = await categorymodel.findByIdAndUpdate(req.params.id, { $set: { status: "Deactive" } }, { new: true });
                if (updateinfo) {
                    resp.send("Update status in deactive")
                }
                else {
                    resp.send("Status does not update")
                }
            } else if (resultp.status == "Deactive") {
                const updateinfo = await categorymodel.findByIdAndUpdate(req.params.id, { $set: { status: "Active" } }, { new: true });
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
    updatecategory: async (req, resp) => {
        try {
            const result = await categorymodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
            var search = req.body.search;
            var product_data = await categorymodel.find(
                {
                    "$or": [
                        { cname: { $regex: search } }
                    ]
                }
            )
            //  var product_data = await categorymodel.find({ "cname": { $regex: ".*" + search + ".*", $options: "i" } })
            if (product_data) {
                resp.status(200).send({ success: true, msg: " Details", data: product_data });
            }
            else {
                resp.status(200).send({ success: true, msg: "Not found" });
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
};