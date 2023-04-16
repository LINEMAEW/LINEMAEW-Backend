const express = require('express');
const Restaurants = require('../models/Restaurants');
const Menus = require('../models/Menu')

const router = express.Router();

router.get('/all', async (req, res) => {
    const restaurants = await Restaurants.getAllRestaurants(req, res);
    res.status(200).send({ "all_restaurants": restaurants });
});

router.get('/:id/allmenus', async (req, res) => {
    const menus = await Menus.getAllMenus(req, res);
    res.status(200).send({ "all_menus": menus });
})

router.post('/:id/add_menu', async (req, res) => {
    await Menus.addMenu(req, res);
    res.status(200).send("Add menu successfully.");
})

router.get('/:id/history', async (req, res) => {
    const resp = await Restaurants.listOrderHistory(req, res);
    res.status(200).send({ "order_history": resp });
})

module.exports = router;