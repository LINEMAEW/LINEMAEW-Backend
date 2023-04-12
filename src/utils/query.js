'use strict'

require('dotenv').config()
const sql = require('mssql');

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
    const pool = new sql.ConnectionPool(config)
    let req = new sql.Request(pool)

    pool.connect(async (err) => {
        if (err) {
            console.error(err);
            return;
        }
        await req.query(queries, (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json(err);
                return;
            }
            if (data.rowsAffected.length > 0) {
                const dataSQL = data.recordset;
                console.log(dataSQL);
                res.json(dataSQL);
                return dataSQL
            } else {
                console.log('There is no data in the table');
            }

            pool.close();
        });
    })
}


module.exports = query;