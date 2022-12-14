const express = require('express');
const router = express.Router();
const productmodel = require('../db/productdb');
const jwt = require('jsonwebtoken');
const { parse } = require("path");
const Path = require("path");
const multer = require("multer");

const { check, validationResult } = require('express-validator');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./img");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    }
});
const fileFilter = (req, file, callback) => {
    const acceptableExt = [".png", ".jpg", ".jpeg"];
    if (!acceptableExt.includes(Path.extname(file.originalname))) {
        return callback(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }

    const filesize = parseInt(req.headers["content-length"]);

    if (filesize > 1048576) {
        return callback(new Error("File Size Big!"));
    }

    callback(null, true);
};

var upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    filesize: 1048576
}).single("pimg");


module.exports = {
    insertproduct: async (req, resp) => {
        upload(req, resp, function (err) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return resp.status(400).json({ errors: errors.array() });
            }
            const path = req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";
            var model = {
                pname: req.body.pname,
                descripation: req.body.descripation,
                price: req.body.price,
                mname: req.body.mname,
                bname: req.body.bname,
                qty: req.body.qty,
                pimg: path,
                subid: req.body.subid,
            }

            const product = new productmodel(model);
            // return resp.send(product);

            const result = product.save();
            resp.send(result);
        });

    },

    selectproduct: async (req, resp, next) => {
        let products = await productmodel.find().populate("subid", "sname");
        if (products.length > 0) {
            resp.send(products)
        } else {
            resp.send({ result: "no products found" })
        }
    },
    selectProductbCategoryID: async (req, resp) => {
        try {
            const result = await productmodel.find({ status: "Active", subid: req.params.id }).populate("subid", "sname");
            if (result) {
                // console.log(result);
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

    selectproductById: async (req, resp, next) => {
        try {
            const result = await productmodel.findById(req.params.id).populate("subid", "sname");
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

    deleteproduct: async (req, resp) => {
        try {
            const resultp = await productmodel.findById(req.params.id);

            if (resultp.status == "Active") {
                const updateinfo = await productmodel.findByIdAndUpdate(req.params.id, { $set: { status: "Deactive" } }, { new: true });
                if (updateinfo) {
                    resp.send("Update status in deactive")
                }
                else {
                    resp.send("Status does not update")
                }
            } else if (resultp.status == "Deactive") {
                const updateinfo = await productmodel.findByIdAndUpdate(req.params.id, { $set: { status: "Active" } }, { new: true });
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

    updateproduct: async (req, resp, next) => {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = { new: true };
            const result = await productmodel.findByIdAndUpdate(id, update, options);
            if (result) {
                //resp.send("Data updated");
                resp.send({ result: result });
            }
            else {
                resp.send("User Product is not updated");
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
};