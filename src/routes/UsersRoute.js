const express = require('express');
const Users = require('../models/Users')
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/login', async (req, res) => {
    await Users.getUser(req, res);
    res.status(200).send(`Logged in successfully`);
})

router.post('/register', async (req, res) => {
    try{await userController.registerUser(req, res);}
    catch(err){res.status(403).json({"err": err})
    return}
    res.status(200).send(`User registered successfully`);
});



module.exports = router;
