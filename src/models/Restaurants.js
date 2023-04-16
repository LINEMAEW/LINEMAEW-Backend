'use strict'

const query = require('../utils/query');

async function getAllRestaurants(req, res) {
    const queries = `SELECT restaurant_name, restaurant_description AS description FROM Restaurants`;
    return await query(res, queries);
}

async function listOrderHistory(req, res) {
    const queries = `SELECT order_id, total_price, username AS customer_name,order_date, delivery_status AS status \
    FROM Orders, Users WHERE restaurant_id=${req.params.id} AND Orders.user_id=Users.user_id`;
    return await query(res, queries);
}


module.exports = {
    getAllRestaurants,
    listOrderHistory
}
