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
        encrypt: true
    }
}

const pool = new sql.ConnectionPool(config);

async function query(res, queries, type='GET') {
    const req = new sql.Request(pool);

    try {
        await pool.connect();
        let result = await req.query(queries)
        if (type=='GET') {
            if (result.recordsets.length > 0) {
                console.log(result.recordset);
                return result.recordset;
            } 
                console.log('There is no data in the table');
                return [];
        }
        console.log("Rows affected: ", result.rowsAffected[0])
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
        throw err;
    } finally {
        console.log(`${type} successfully`);
        pool.close();
    }
}


module.exports = query;