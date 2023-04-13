'use strict'

const query = require('../utils/query');

async function getAllRestaurants(req, res) {
    const queries = `SELECT * FROM Restaurants`;
    return await query(res, queries);
}


module.exports = {
    getAllRestaurants
}
