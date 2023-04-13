const express = require('express');
const Orders = require('../models/Orders')

const router = express.Router();

router.get('/', async (req, res) => {
    const orders = await Orders.getAllOrders(req.body.user_id, res);
    res.status(200).send(orders);
})

module.exports = router;