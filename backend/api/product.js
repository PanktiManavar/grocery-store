const express = require('express');
const router = express.Router();
const productmodel = require('../db/productdb');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const { parse } = require("path");
const Path = require("path");

const { check, validationResult } = require('express-validator');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./img");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
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
});

router.post('/insertproduct', upload.single("pimg"), async (req, resp) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(400).json({ errors: errors.array() });
    }
    const path = req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";
    var model = {
        pname: req.body.pname,
        descripation: req.body.descripation,
        price: req.body.price,
        mid: req.body.mid,
        qty: req.body.qty,
        bid: req.body.bid,
        pimg: path,
        subid: req.body.subid,
    }

    let product = new productmodel(model);
    // return console.log("hello");


    let result = await product.save();
    resp.send(result);

    // product = new productmodel(req.body);


    // await product.save();
    // resp.send('Product Inserted!!!');

});

router.get("/getproduct", async (req, resp, next) => {
    let products = await productmodel.find();
    if (products.length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "no products found" })
    }
});


module.exports = router;