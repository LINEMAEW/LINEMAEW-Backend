const query = require('../utils/query');

async function getAllOrders(req, res) {
    const queries = `SELECT * FROM Orders WHERE user_id=${req}`;
    return await query(res, queries);
}


module.exports = {
    getAllOrders
}