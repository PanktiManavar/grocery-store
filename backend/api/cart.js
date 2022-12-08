const mongoose = require('mongoose');
const cartmodel = require('../db/cartdb');
const { restart } = require('nodemon');

module.exports = {
    insertcart: async (req, res) => {
        try {
            // return console.log(req.param.id);
            const cart = new cartmodel({
                Rid: req.body.Rid,
                Pid: req.body.Pid,
                mname: req.body.mname
            });

            rids = await cartmodel.findOne({ Rid: req.body.Rid });
            pids = await cartmodel.findOne({ Pid: req.body.Pid });


            if (rids && pids) {
                cart.qty += 1;

                const updateinfo = await cartmodel.findByIdAndUpdate({ _id: rids._id }, { $set: { qty: cart.qty } }, { new: true });
                if (updateinfo) {
                    res.send("Update cart ")
                }
                else {
                    res.send("Cart does not update")
                }

                //  return console.log(cart.qty, id)
            }
            else {
                //  console.log("else part ma aave che")
                const cartData = await cart.save();
                if (cartData) {
                    res.status(200).send({ success: true, msg: "cart product details", data: cartData });
                }
                else {
                    res.send("data not save");
                }
            }
        } catch (error) {
            res.status(400).send({ success: false, msg: error.message });
        }
    },
    updatecart: async (req, resp) => {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = { new: true };
            const result = await cartmodel.findByIdAndUpdate(id, update, options);
            if (result) {
                //resp.send("Data updated");
                resp.send({ result: result });
            }
            else {
                resp.send("Cart is not updated");
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
    deletecart: async (req, resp) => {
        try {
            const result = await cartmodel.findByIdAndDelete(req.params.id);
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
    selectcartById: async (req, resp) => {
        try {
            // return console.log(req.params.Rid);
            const result = await cartmodel.find({ Rid: req.params.id });
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
    viewcart: async (req, resp) => {
        try {
            const result = await cartmodel.find();
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
    lastrecord: async (req, resp) => {
        try {
            const posts = await cartmodel.findOne().sort({ _id: -1 }).limit(1);
            resp.send(posts._id);
            // console.log(posts._id);
        }
        catch (err) {
            console.log(err.message);
        }
    }
};