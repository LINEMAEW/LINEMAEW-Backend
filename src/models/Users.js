const query = require('../utils/query');
const bcrypt = require('bcrypt');
require('dotenv').config()

async function getUser(req, res) {
    const body = {
        email: req.body.email,
        password: req.body.password
    }
    console.log(body);
    bcrypt.hash(body.password, parseInt(process.env.SALTROUNDS)).then(hash => {
        body.password = hash;
    }).catch(error => {
        console.log(error);
    });
    const queries = `SELECT email, password FROM Users 
                    WHERE email='${body.email}' AND password='${body.password}'`;
    return await query(res, queries);
}

async function createUser(req, res) {

    if ((await getUser(req, res)).length > 0 ){
        throw 'User already exists';
    }

    const body = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone_number: req.body.phone_number,
        address: req.body.address
    }

    await bcrypt.hash(body.password, parseInt(process.env.SALTROUNDS)).then(hash => {
        body.password = hash;
    }).catch(error => {
        console.log(error);
    });

    console.log(body.password);
    const queries = `INSERT INTO Users (username, email, password, phone_number, address)\
    VALUES ('${body.username}', '${body.email}', '${body.password}', '${body.phone_number}', '${body.address}')`;
    return await query(res, queries, 'POST');
}

async function updaterestaurant({restaurant_name, restaurant_description, phone_number, address, password}, res) {

    await bcrypt.hash(password, parseInt(process.env.SALTROUNDS)).then(hash => {
        password = hash;
    }).catch(error => {
        console.log(error);
    });

    const queries = `UPDATE Restaurants SET restaurant_name='${restaurant_name}', restaurant_description='${restaurant_description}', phone_number='${phone_number}', address='${address}', password='${password}' WHERE restaurant_name='${restaurant_name}'`;
    return await query(res, queries, 'PUT');
}

// async function nothing(req, res){
//     const queries = `SELECT * FROM Restaurants`;
//     const results = await query(res, queries);
    
//     results.forEach(async (result) => {
//         await updaterestaurant(result, res);
//     })
//     console.log(results);
// }

module.exports = {
    getUser,
    createUser,
    // nothing
}
