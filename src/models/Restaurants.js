'use strict'

const query = require('../utils/query');

async function getAllRestaurants(req, res) {
    const queries = `SELECT restaurant_name, description FROM Restaurants`;
    return await query(res, queries);
}


module.exports = {
    getAllRestaurants
}
