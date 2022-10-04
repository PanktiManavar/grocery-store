const mongoose = require('mongoose');
const express = require('express');
const imgmodel = require('../db/imagedbdemo')
const router = express.Router()
const multer = require("multer");
const { parse } = require("path");
const Path = require("path");


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

router.post("/addproduct", upload.single("img"), async (req, resp, next) => {
    const path = req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

    var model = {
        name: req.body.name,
        img: path,
    }

    let product = new imgmodel(model);
    // return console.log("hello");


    let result = await product.save();
    resp.send(result);
});

router.get("/getphotos", async (req, resp, next) => {
    let products = await imgmodel.find();
    if (products.length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "no products found" })
    }
})
module.exports = router;
