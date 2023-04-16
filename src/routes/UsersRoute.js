const express = require('express');
const Users = require('../models/Users')

const router = express.Router();

router.get('/login', async (req, res) => {
    await Users.getUser(req, res);
    res.status(200).send(`Logged in successfully`);
})



module.exports = router;
