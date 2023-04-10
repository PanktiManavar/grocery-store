const express = require('express');
const paypal = require('paypal-rest-sdk');

module.exports = {
    //app.get("/test", (req, res) => res.sendFile(__dirname + "/index.html"));

    //app.post("/sendItem", (req, res) => {
    sendItem: async (req, res) => {
        const app = express();

        paypal.configure({
            'mode': 'sandbox',
            'client_id': 'AcYN899V5WtUXuA25bMiDmIJRh-_g8efktaDfmPLb8kPAcnjoHLjVfwOcwYLEea0NFK__lxdHLqi1Lgu',
            'client_secret': 'ELaADvuD7vqnmeZy01D-r70O4ajeLf5AhGIH623Daqou0HeCT2JH6DBiaINatjp0cTHO4Zf-UhgIuzlL'
        });

        console.log("Send ITEM called");
        const create_payment_json = {
            intent: "sale",
            payer: {
                payment_method: "paypal",
            },
            redirect_urls: {
                return_url: "http://localhost:8000/PaypalController/success",
                cancel_url: "http://localhost:8000/PaypalController/cancel",
            },
            transactions: [
                {
                    item_list: {
                        items: [
                            {
                                name: "Late Fees",
                                sku: "001",
                                price: "50.00",
                                currency: "USD",
                                quantity: 1,
                            },
                        ],
                    },
                    amount: {
                        currency: "USD",
                        total: "50.00",
                    },
                    description: "Late Fees For Book return",
                },
            ],
        };

        paypal.payment.create(create_payment_json, function (error, payment) {
            console.log("Payment create called");

            if (error) {
                throw error;
            } else {
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === "approval_url") {
                        //console.log(payment.links[i].href);
                        //res.redirect(payment.links[i].href);
                        res.json({ forwardLink: payment.links[i].href });

                        //res.send({forwardLink: payment.links[i].href});

                    }
                }
            }
        });
    },

    Payment_Success: async (req, res) => {
        console.log("Payment_Success");
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            payer_id: payerId,
            transactions: [
                {
                    amount: {
                        currency: "USD",
                        total: "50.00",
                    },
                },
            ],
        };

        paypal.payment.execute(
            paymentId,
            execute_payment_json,
            function (error, payment) {
                if (error) {
                    console.log(error.response);
                    throw error;
                } else {
                    console.log(JSON.stringify(payment));
                    //res.send("Success");
                    res.redirect("http://localhost:8000/Success");
                }
            }
        );
    },

    Payment_Cancel: async (req, res) => {
        console.log("Payment_Cancel");
        res.redirect("http://localhost:8000/Cancel");
    }

}

