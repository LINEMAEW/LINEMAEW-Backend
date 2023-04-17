const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('../models/Users')
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/login', async (req, res) => {
    let user = await Users.getUser(req, res);
    // console.log(user[0].password);
    await bcrypt.compare(req.body.password, user[0].password).then((match) => {
        if (match) {
            req.session.userId = user[0].user_id
            res.status(200).send("Logged in successfully");
            // res.redirect() // redirect to somewhere maybe homepage
        } else {
            res.status(401).send("Failed to log in");
            // res.redirect() // redirect to login page
        }
    })
    // if (user.length > 0) {
    //     res.status(200).send("Logged in successfully");
    // } else {
    //     res.status(401).send("Failed to log in");
    // }
});

router.post('/register', async (req, res) => {
    try {
        await userController.registerUser(req, res);}
    catch(err) {
        res.status(403).json({"err": err})
        return
    }
    res.status(200).send(`User registered successfully`);
});


// router.get('/nothing', async (req, res) => {
//     await Users.nothing(req, res);
// })

module.exports = router;
