const query = require('../utils/query');
const bcrypt = require('bcrypt');
require('dotenv').config()

async function getUser(req, res) {
    const body = {
        email: req.body.email,
        password: req.body.password
    }
    bcrypt.hash(body.password, parseInt(process.env.SALTROUNDS)).then(hash => {
        body.password = hash;
    }).catch(error => {
        console.log(error);
    });
    const queries = `SELECT email, password FROM Users 
                    WHERE email=${body.email} AND password=${body.password}`;
    return await query(res, queries);
}

async function createUser(username, email, password, phone_number, address) {
    const queries = `INSERT INTO Users (username, email, password, phone_number, address)\
    VALUES (${username}, ${email}, ${password}, ${phone_number}, ${address})`;
    return await query(res, queries, 'POST');
}

module.exports = {
    getUser,
    createUser
}
