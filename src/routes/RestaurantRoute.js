const express = require('express');
const Restaurants = require('../models/Restaurants');
const Menus = require('../models/Menus')

const router = express.Router();

router.get('/all', async (req, res) => {
    const restaurants = await Restaurants.getAllRestaurants(req, res);
    // const filtered_restaurants = restaurants.map(restaurant => { restaurant_name, restaurant.restaurant_descruption })
    // res.status(200).send(JSON.stringify({
    // "all_restaurants": filtered_restaurants
    // }));

    res.status(200).send(restaurants);
});

router.get('/:id/allmenus', async (req, res) => {
    const menus = await Menus.getAllMenus(req.params.id, res);
    res.status(200).send({"all_menus": menus});
})

module.exports = router;