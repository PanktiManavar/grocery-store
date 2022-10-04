const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const Usermodel = require('../db/User');

router.post('/', async (req, resp) => {
    return console.log(req.body);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return resp.status(400).json({ errors: errors.array() });
    // }

    const { name, email, password } = req.body;

    try {
        //check user are exits or not

        let emailfind = await Usermodel.findOne({ email: req.body.email });

        if (emailfind) {
            resp.status(400).json({ error: [{ msg: 'user already exits' }] });
        } else {

            //upar je let variabale ma name che e lakhava nu
            emailfind = new Usermodel({
                name, email, password
            });

            //password encrypat
            const salt = await bcrypt.genSalt(10);
            emailfind.password = await bcrypt.hash(password, salt);
            await emailfind.save();

            resp.send(JSON.stringify('user Registered!!!'));
        }

    } catch (err) {
        console.error(err.message);
        resp.status(500).send('server error');
    }


});

// router.post('/', (req, resp) => {
//     console.log(req.body);
//     resp.send('user router');
// })

module.exports = router;