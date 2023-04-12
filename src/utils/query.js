'use strict'

require('dotenv').config()
const sql = require('mssql');
const util = require('util');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,

    options: {
        trustServerCertificate: true,
        encrypt: false
    }
}


async function query(res, queries) {
    const pool = new sql.ConnectionPool(config);
    const req = new sql.Request(pool);

    try {
        await pool.connect();
        const result = await util.promisify(req.query).call(req, queries);

        if (result.recordset.length > 0) {
            console.log(result.recordset);
            return result.recordset;
        } else {
            console.log('There is no data in the table');
            return [];
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
        throw err;
    } finally {
        pool.close();
    }
}



module.exports = query;