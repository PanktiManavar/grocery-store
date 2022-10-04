const express = require('express');
const router = express.Router();
const Rg = require('../db/registrationdb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator');

router.post('/', [
    check('Fname', 'First Name is required').notEmpty(),
    check('Lname', 'Last Name is required').notEmpty(),
    check('Email', 'Please Enter valid Email id').isEmail(),
    check('Password', 'Please Enter a password with 8 characters one uppercase ,lowecase, number and symbol').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    check('MobileNo', 'Please Enter a 10 digit number').notEmpty().isLength({ min: 10, max: 10 }),
    check('Gender', 'Please Select a Gender').notEmpty().isLength({ max: 1 }),
    check('Address', 'Please Enter Address min 20 letter').notEmpty().isLength({ min: 20 }),
    check('Pincode', 'Please Enter valid Pincode ').notEmpty().isLength({ min: 6, max: 6 }),
    check('UserType', 'Select user').notEmpty()
],
    async (req, resp) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() });
        }

        const { Fname, Lname, Email, Password, MobileNo, Gender, Address, Pincode, UserType, Status } = req.body;

        try {
            //check user are exits or not

            let emailfind = await Rg.findOne({ Email });

            if (emailfind) {
                resp.status(400).json({ error: [{ msg: 'user already exits' }] });
            }

            //upar je let variabale ma name che e lakhava nu
            emailfind = new Rg({
                Fname, Lname, Email, Password, MobileNo, Gender, Address, Pincode, UserType, Status
            });

            //password encrypat
            const salt = await bcrypt.genSalt(10);
            emailfind.Password = await bcrypt.hash(Password, salt);
            await emailfind.save();

            resp.send('user Registered!!!');
            // jwt token
            const payload = {
                emailfind: {
                    id: emailfind.id
                }
            }
            jwt.sign(payload,);

        } catch (err) {
            console.error(err.message);
            resp.status(500).send('server error');
        }


    });

module.exports = router;