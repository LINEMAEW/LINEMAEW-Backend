const express = require('express');
const { userLogin } = require('../models/SomeModel');
const router = express.Router();

router.get('/test', async (req, res) => {
    let result = await userLogin(res);
    res.send(result);
})

module.exports = router;