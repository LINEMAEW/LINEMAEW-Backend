const express = require('express');
const Users = require('../models/Users')
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/login', async (req, res) => {
    let user = await Users.getUser(req, res);
    if (user.length > 0) {
        res.status(200).send("Logged in successfully");
    } else {
        res.status(401).send("Failed to log in");
    }
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
