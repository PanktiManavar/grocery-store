const mongoose = require('mongoose');
const categorymodel = require('../db/categorydb')
const usermodel = require('../db/registrationdb')
const productmodel = require('../db/productdb')
const subcategorymodel = require('../db/subcategorydb')
const ordermodel = require('../db/orderdb')
const pincodemodel = require('../db/pincodedb')
module.exports = {
    datacount: async (req, resp) => {
        try {
            const count_data = [];
            const product_data = await productmodel.find().count();
            const category_data = await categorymodel.find().count();
            const subcategory_data = await subcategorymodel.find().count();
            const pincode_data = await pincodemodel.find().count();
            const order_data = await ordermodel.find().count();
            const customer_data = await usermodel.find({ UserType: "customer", Status: "Active" }).count();
            const deliveryboy_data = await usermodel.find({ UserType: "deliveryboy", Status: "Active" }).count();

            count_data.push({
                product: product_data,
                category: category_data,
                subcategory: subcategory_data,
                customer: customer_data,
                deliveryboy: deliveryboy_data,
                pincode: pincode_data,
                order: order_data
            });
            resp.send({ data: count_data });
        }
        catch (err) {
            resp.send(err.message);
        }
    },

    notification: async (req, resp) => {
        try {
            let products = await productmodel.find({ Status: "Active", qty: { $lt: 50 } }).populate("subid", "sname");
            if (products) {
                resp.send({ data: products })
            } else {
                resp.send({ result: "no products found" })
            }
        } catch (err) {

        }
    },

    currentdate: async (req, resp) => {
        try {
            // let date = new Date()
            // resp.send(date)

            const today = new Date();
            // const formattedDate = today.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '/');
            const formattedDate = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

            resp.send(formattedDate);
        } catch (err) {

        }
    }

    // addqty: async (req, resp) => {
    //     try {
    //         let products = await productmodel.find({ qty: { $gt: 40 } });
    //         if (products) {
    //             resp.send(products)
    //         } else {
    //             resp.send({ result: "All Product qty are available" })
    //         }
    //     } catch (err) {

    //     }
    // }
};