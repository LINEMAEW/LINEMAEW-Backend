const express = require('express');
const Restaurants = require('../models/Restaurants')


const router = express.Router();

router.get('/all', async (req, res) => {
    const restaurants = await Restaurants.getAllRestaurants(req, res);
    // const filtered_restaurants = restaurants.map(restaurant => { restaurant_name, restaurant.restaurant_descruption })
    // res.status(200).send(JSON.stringify({
    // "all_restaurants": filtered_restaurants
    // }));

    res.status(200).send(restaurants);
});

module.exports = router;