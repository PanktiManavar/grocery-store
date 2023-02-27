const mongoose = require('mongoose');
const categorymodel = require('../db/categorydb')
const usermodel = require('../db/registrationdb')
const productmodel = require('../db/productdb')
const subcategorymodel = require('../db/subcategorydb')

module.exports = {
    datacount: async (req, resp) => {
        try {
            const count_data = [];
            const product_data = await productmodel.find().count();
            const category_data = await categorymodel.find().count();
            const subcategory_data = await subcategorymodel.find().count();
            const customer_data = await usermodel.find({ UserType: "customer", Status: "Active" }).count();
            const deliveryboy_data = await usermodel.find({ UserType: "delivery-boy", Status: "Active" }).count();

            count_data.push({
                product: product_data,
                category: category_data,
                subcategory: subcategory_data,
                customer: customer_data,
                deliveryboy: deliveryboy_data
            });
            resp.status(200).send({ sucsess: false, msg: "count data", data: count_data });
        }
        catch (err) {
            resp.send(err.message);
        }
    },

    addqty: async (req, resp) => {
        try {
            let products = await productmodel.find({ qty: { $lte: 6 } });
            if (products) {
                resp.send(products)
            } else {
                resp.send({ result: "All Product qty are available" })
            }
        } catch (err) {

        }
    }
};