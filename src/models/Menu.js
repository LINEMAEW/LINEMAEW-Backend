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
    return await query(res, inserted, 'POST');
}

async function deleteMenu(req, res) {
    const deleted = `DELETE FROM Menu_items WHERE item_id=${req.params.id}`;
    return await query(res, deleted, 'DELETE');
}

async function editMenu(req, res) {
    const body = {
        "menu": req.body.menu,
        "description": req.body.description,
        "price": req.body.price
    };
    const updated = `UPDATE Menu_items SET menu_name='${body.menu}', menu_description='${body.description}', price=${body.price} WHERE item_id=${req.params.id}`;
    return await query(res, updated, 'PUT');
}

async function getMenuDetail(req, res) {
    const queries = `SELECT menu_name AS name, menu_description AS description, price FROM Menu_items WHERE item_id=${req.params.id}`;
    return await query(res, queries);
}


module.exports = {
    getAllMenus,
    addMenu,
    editMenu,
    deleteMenu,
    getMenuDetail
}