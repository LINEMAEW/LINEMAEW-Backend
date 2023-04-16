const query = require('../utils/query');

async function getAllOrders(req, res) {
    const queries = `SELECT * FROM Orders WHERE user_id=${req.body.user_id}`;
    return await query(res, queries);
}

async function orderSpecificRestaurants(req, res) {
    const body = {
        user_id: req.body.user_id,
        restaurant_id: req.body.restaurant_id,
        order_date: req.body.order_date,
        menus: req.body.menus
    };
    async function calculatePrice(item) {
        console.log("item_id: ", item["item_id"], "quantity: ", item["quantity"]);
        let queries = `SELECT * FROM Menu_items 
        WHERE item_id=${item["item_id"]}
        AND restaurant_id=${body.restaurant_id}`
        let results = await query(res, queries);
        return results[0].price * item.quantity;
    }
    let totalPrice = 0;
    const insertToOrders = `INSERT INTO Orders(user_id, restaurant_id, order_date, total_price, payment_status) 
                            VALUES(${body.user_id}, ${body.restaurant_id}, '${body.order_date}', ${totalPrice}, 1)`;
    await query(res, insertToOrders, 'POST');
    for (let i = 0; i < body.menus.length; i++) {
        totalPrice += await calculatePrice(body.menus[i]);
        console.log("Price:", totalPrice);
        let queries = `SELECT * FROM Orders WHERE order_date='${body.order_date}'`;
        let results = await query(res, queries);
        const insertToOrdersItems = `INSERT INTO Orders_items(order_id, item_id, quantity)
                    VALUES (${results[0].order_id}, ${body.menus[i].item_id}, ${body.menus[i].quantity})`;
        await query(res, insertToOrdersItems, 'POST')
    }
    const updateTotalPrice = `UPDATE Orders SET total_price=${totalPrice} WHERE order_date='${body.order_date}'`;
    await query(res, updateTotalPrice, 'PUT');
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

async function getOrderDetail(req, res) {
    const queries = `SELECT menu_name, quantity FROM Orders_items, Menu_items WHERE order_id=${req.params.id} AND Orders_items.item_id=Menu_items.item_id`;
    return await query(res, queries);
}


module.exports = {
    getAllOrders,
    orderSpecificRestaurants,
    setOrderStatus,
    getOrderDetail
}