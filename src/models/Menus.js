const query = require('../utils/query');

async function getAllMenus(req, res) {
    const queries = `SELECT * FROM Menu_items WHERE restaurant_id=${req.params.id}`;
    return await query(res, queries);
}

module.exports = {
    getAllMenus
}