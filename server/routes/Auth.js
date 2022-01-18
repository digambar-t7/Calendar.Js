const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

// secret string for jwt
const jwtSecret = 'shhhhhhh'

// ROUTE 01 : Creating a user account
router.post('/createaccount',
    [
        // putting checks for inputs
        body("name", "Please,enter a valid name").isLength({ min: 2 }),
        body("email", "Please,enter a valid email").isEmail(),
        body("password", "Password too short").isLength({ min: 4 }),
    ],
    async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // looking for a User registered with the same emailid
        const already = await User.findOne({ email: req.body.email })
        // if such a user is present then prompt an error
        if (already) {
            return res
                .status(400)
                .json({
                    error: 'SORRY!There exists a user with the same Email Id'
                })
        }

        // encrypting the password
        const salt = await bcrypt.genSalt(10)
        const key = await bcrypt.hash(req.body.password, salt)

        // Creating a new user
        try {
            // since creating user takes time thus async
            let user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: key
            })

            // storing user id as data for jwt
            const jwtData = {
                user: {
                    id: user.id
                }
            }

            // creating a jwt-token with jwtData & jwtSecret
            const token = jwt.sign(jwtData, jwtSecret)

            return res.json({ token, username: user.name })

        } catch (e) {
            return res.status(500)
                .json({ error: e })
        }
    }
)

// ROUTE 02 : Login 
router.post(
    '/login',
    [   // putting checks for inputs
        body("email", "Please,enter a valid email").isEmail(),
        body("password", "Password cannot be blank").exists(),
    ],
    async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object
        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        try {
            const user = await User.findOne({ email: req.body.email })
            if (!user) {
                return res.status(400).json({ msg: "No user found with this Email Id" })
            }
            const passValidity = await bcrypt.compare(req.body.password, user.password)
            if (!passValidity) {
                return res.status(400).json({ success, msg: "Incorrect Password" })
            }
            success = true
            const jwtData = {
                user: {
                    id: user.id,
                },
            }
            const token = jwt.sign(jwtData, jwtSecret)

            return res.status(200).json({ success, token, username: user.name })
        } catch (error) {
            return res.status(400).send("Internal Server Error")
        }
    }
)

module.exports = router
