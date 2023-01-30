const express = require('express');
const router = express.Router();
const Rg = require('../db/registrationdb');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')

const { check, validationResult } = require('express-validator');

router.post('/', async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(400).json({ errors: errors.array() });
    }

    const { Fname, Lname, Email, Password, MobileNo, Address, Pincode, UserType, Status } = req.body;

    try {
        //check user are exits or not

        let emailfind = await Rg.findOne({ Email });

        if (emailfind) {
            resp.status(400).json({ error: [{ msg: 'user already exits' }] });
        }

        //upar je let variabale ma name che e lakhava nu
        emailfind = new Rg({
            Fname, Lname, Email, Password, MobileNo, Address, Pincode, UserType, Status
        });

        //password encrypat
        const salt = await bcrypt.genSalt(10);
        emailfind.Password = await bcrypt.hash(Password, salt);
        await emailfind.save();

        if (UserType == "deliveryboy") {
            var mailoption = {
                from: 'krishnakpatel3121@gmail.com',
                to: `${Email}`,
                subject: 'Welcome Grocery Store',
                text: `Hello ${Fname} ${Lname} ,Grocery store welcomes you to start a great Employee , User id : ${Email}, Password : ${Password}`,

            }
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'krishnakpatel3121@gmail.com',
                    pass: 'fhgbexpsfhklyyjh'
                },
                port: 465,
                host: 'smtp.gmail.com'
            });

            transporter.sendMail(mailoption, (e, info) => {
                if (e) {
                    return console.log(e)
                }
                else {
                    resp.send({ Email, Password })
                }
            })
        }
        resp.status(200).json({ error: [{ msg: 'user register' }] });


    } catch (err) {
        // console.error(err.message);
        resp.status(500).send(err);
    }
});

module.exports = router;