const query = require('../utils/query');

async function getAllOrders(req, res) {
    const queries = `SELECT * FROM Orders WHERE user_id=${req.body.user_id}`;
    return await query(res, queries);
}

async function orderSpecificRestaurants(req, res) {
    const body = {
        user_id: req.body.user_id,
        restaurant_id: req.body.restaurant_id,
        menus: [{
            // item_id: ,
            // quantity:
        }]
    };

}

async function setOrderStatus(req, res) {
    const body = {
        user_id: req.body.user_id,
        order_id: req.body.order_id,
        delivery_status: req.body.delivery_status
    };
    const updated = `UPDATE Orders 
                     SET delivery_status='${body.delivery_status}'
                     WHERE user_id=${body.user_id} AND order_id=${body.order_id}`;
    return await query(res, updated, 'PUT');
}


module.exports = {
    getAllOrders,
    setOrderStatus
}