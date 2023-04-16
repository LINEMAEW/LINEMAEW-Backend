const bcrypt = require('bcrypt');
const Restaurants = require('../models/Restaurants')

const loginRestaurantController = (req, res) => {

}

const registerRestaurant = async (req, res) => {
    const { restaurant_name, restaurant_description, phone_number, address, password } = req.body;


    if (!restaurant_name || !restaurant_description || !phone_number || !address || !password) {
        res.status(500).json({"message": 'Please fill in all fields'});
    }


    await Restaurants.createRestaurant(req, res);

}

module.exports = {
    loginRestaurantController,
    registerRestaurant
}