const mongoose = require('mongoose');
const cartmodel = require('../db/cartdb');
const ordermodel = require('../db/orderdb')
const orderitemmodel = require('../db/orderitemdb')
const productmodel = require('../db/productdb')

module.exports = {
    //url ma Registration user id pass karava ni
    insertorder: async (req, res) => {
        try {
            const result = await cartmodel.findOne({ Rid: req.body.Rid });
            if (result) {
                const order = new ordermodel({
                    Rid: result._id,
                    Address: req.body.Address,
                    Totalprice: req.body.tprice,
                    Finalprice: req.body.fprice,
                    Pinid: req.body.pinid,
                    payment_status: "pendding",
                    ostatus: "ordered"
                });

                const orderdata = await order.save();
                if (orderdata) {
                    const posts = await ordermodel.findOne().sort({ _id: -1 }).limit(1);
                    let cartdata = await cartmodel.find({ Rid: req.body.Rid });
                    cartdata.forEach(async element => {
                        const orderitem = new orderitemmodel({
                            oid: posts._id,
                            Pid: element.Pid,
                            qty: element.qty,
                            mname: element.mname
                        })
                        const orderitemdata = await orderitem.save();

                        if (orderitemdata) {
                            const resultss = await cartmodel.findByIdAndRemove({ _id: element.id });
                            if (resultss) {
                                const pids = await productmodel.findOne({ _id: element.Pid });
                                if (pids) {
                                    const qty = pids.qty - element.qty;
                                    // return res.send(qty);
                                    const qtyupdate = await productmodel.findByIdAndUpdate(element.Pid, { $set: { qty: qty } }, { new: true });
                                    if (qtyupdate) {
                                        res.send("order conform");
                                    } else {
                                        res.send("product qty  not updated");
                                    }
                                } else {
                                    res.send("pid not found ")
                                }
                            }
                            else {
                                res.send("result not found");
                            }
                        } else {
                            res.send("not order item");
                        }
                    })
                }
                else {
                    res.send("data not save");
                }
                // } else {
                //     res.send("You can't order this product beacuse are qty are not here");
                //     return;
                // }
            }
            else {
                res.send("Not found");
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
    vieworder: async (req, resp) => {
        try {
            // const result = await ordermodel.find().populate("Rid", "Fname").populate("pinid", "pcode");
            const result = await ordermodel.findOne({ Rid: req.params.id }).populate("Pinid");
            if (result) {
                resp.send(result);
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

    viewallorder: async (req, resp) => {
        try {
            // const result = await ordermodel.find().populate("Rid", "Fname").populate("pinid", "pcode");
            const result = await ordermodel.find().populate("Pinid");
            if (result) {
                resp.send(result);
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

    viewOneCustomerOrder: async (req, resp) => {
        try {
            const data = await ordermodel.find({ Rid: req.params.id });
            if (data) {
                resp.send(data);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    deleteorder: async (req, resp) => {
        try {
            const id = req.params.id;
            const update = new Date();
            const options = { new: true };
            const orderstatus = await ordermodel.findById({ _id: id });
            if (orderstatus) {
                if (orderstatus.ostatus != "delivered") {
                    if (orderstatus.ostatus != "cancel") {
                        const result = await ordermodel.findByIdAndUpdate(id, { cancel_at: update, cancel_by: "customer", ostatus: "cancel", refund_status: "pedding" }, options);
                        if (result) {
                            //resp.send("Data updated");
                            resp.send("Your Order is canceled");
                        }
                        else {
                            resp.send("Your Order is not canceled");
                        }
                    } else {
                        resp.send("Your Order is already canceled");
                    }
                } else {
                    resp.send("you can't cancle your order");
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },
};