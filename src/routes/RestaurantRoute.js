const express = require('express');
const Rastaurant = require('../models/Restaurant')


const router = express.Router();

router.get('/all', async (req, res) => {
    const restaurants = await Rastaurant.getAllRestaurants(req, res);
    res.status(200).send(restaurants);
});

module.exports = router;