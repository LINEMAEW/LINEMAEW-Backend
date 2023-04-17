const express = require('express');
const bcrypt = require('bcrypt');
const Restaurants = require('../models/Restaurants');
const Menus = require('../models/Menu')
const restaurantController = require('../controllers/restaurantController')

const router = express.Router();

router.get('/login', async (req, res) => {
    let restaurant = await Restaurants.getSpecificRestaurant(req, res);
    console.log(restaurant[0].password);
    await bcrypt.compare(req.body.password, restaurant[0].password).then((match) => {
        if (match) {
            req.session.restaurantId = restaurant[0].restaurant_id
            res.status(200).send({
                "message": "Logged in successfully",
                "restaurant": restaurant[0]
            });
            // res.redirect() // redirect to somewhere maybe homepage
        } else {
            res.status(401).send("Failed to log in");
            // res.redirect() // redirect to login page
        }
    })
    // if (restaurant.length > 0) {
    //     res.status(200).send("Logged in successfully");
    // } else {
    //     res.status(401).send("Failed to log in");
    // }
})

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

router.post('/register', async (req, res) => {
    try {
        await restaurantController.registerRestaurant(req, res);
    }
    catch (err) {
        res.status(403).json({ "err": err })
        return
    }
    res.status(200).send(`Restaurant registered successfully`);
})

module.exports = router;