const query = require('../utils/query');

async function getAllMenus(req, res) {
    const queries = `SELECT * FROM Menu_items WHERE restaurant_id=${req.params.id}`;
    return await query(res, queries);
}

async function addMenu(req, res) {
    const body = {
        "restaurant_id": req.params.id,
        "menu_name": req.body.menu_name,
        "description": req.body.description,
        "price": req.body.price
    };
    const inserted = `INSERT INTO Menu_items(restaurant_id, menu_name, menu_description, price) 
                    VALUES (${parseInt(body.restaurant_id)}, '${body.menu_name}', '${body.description}', ${parseInt(body.price)})`;
    return await query(res, inserted);
}

async function deleteMenu(req, res) {
    const deleted = `DELETE FROM Menu_items WHERE item_id=${req.params.id}`;
    return await query(res, deleted);
}

module.exports = {
    getAllMenus,
    addMenu,
    deleteMenu
}