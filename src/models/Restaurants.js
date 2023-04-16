'use strict'

const query = require('../utils/query');
const bcrypt = require('bcrypt');
require('dotenv').config()

async function getAllRestaurants(req, res) {
    const queries = `SELECT restaurant_name, restaurant_description AS description FROM Restaurants`;
    return await query(res, queries);
}


async function getSpecificRestaurant(req, res) {
    const body = {
        restaurant_name: req.body.restaurant_name,
        password: req.body.password
    }
    bcrypt.hash(body.password, parseInt(process.env.SALTROUNDS)).then(hash => {
        body.password = hash;
    }).catch(error => {
        console.log(error);
    });
    const queries = `SELECT restaurant_name, password FROM Restaurants 
                    WHERE restaurant_name=${body.restaurant_name} AND password=${body.password}`;
    return await query(res, queries);
}

async function listOrderHistory(req, res) {
    const queries = `SELECT order_id, total_price, username AS customer_name,order_date, delivery_status AS status \
    FROM Orders, Users WHERE restaurant_id=${req.params.id} AND Orders.user_id=Users.user_id`;
    return await query(res, queries);
}


module.exports = {
    getAllRestaurants,
    getSpecificRestaurant,
    listOrderHistory
}
