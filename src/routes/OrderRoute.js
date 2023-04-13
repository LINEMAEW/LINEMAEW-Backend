const express = require('express');
const Orders = require('../models/Orders')

const router = express.Router();

router.get('/allOrders', async (req, res) => {
    const orders = await Orders.getAllOrders(req, res);
    res.status(200).send({"all_orders": orders});
})

router.post('/ordering', async (req, res) => {

})

router.put('/setStatus', async (req, res) => {
    await Orders.setOrderStatus(req, res);
    // not finished
})

module.exports = router;