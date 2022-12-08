const mongoose = require('mongoose');
const cartmodel = require('../db/cartdb');
const ordermodel = require('../db/orderdb')
const orderitemmodel = require('../db/orderitemdb')
const productmodel = require('../db/productdb')

module.exports = {
    insertorder: async (req, res) => {
        try {
            const result = await cartmodel.findOne({ Rid: req.params.id });
            if (result) {
                const productdata = await productmodel.findOne({ _id: result.Pid });

                const totalprice = productdata.price * result.qty
                const order = new ordermodel({
                    Rid: result._id,
                    Address: req.body.Address,
                    totalprice: totalprice,
                    finalprice: totalprice,
                    pinid: req.body.pinid,
                    payment_status: "pendding",
                    payment_type: "card",
                    ostatus: "ordered"
                });

                const orderdata = await order.save();
                if (orderdata) {
                    // res.send("data are save");
                    const posts = await ordermodel.findOne().sort({ _id: -1 }).limit(1);
                    let cartdata = await cartmodel.find({ Rid: req.params.id });
                    cartdata.forEach(element => {
                        const orderitem = new orderitemmodel({
                            oid: posts._id,
                            Pid: element.Pid,
                            qty: element.qty,
                            mname: element.mname
                        })
                        const orderitemdata = orderitem.save();
                        if (orderitemdata) {
                            const resultss = cartmodel.findByIdAndRemove({ _id: element.id });
                            if (resultss) {
                                res.send("insert orderitem data and delete cart data");
                                // res.status(200).send({ success: true, msg: "insert orderitem data and delete cart data" });
                            }
                        }
                    })
                }
                else {
                    res.send("data not save");
                }
            }
            else {
                res.send("Not found");
                return;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
};