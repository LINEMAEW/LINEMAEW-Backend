'use strict'

require('dotenv').config()

console.log(process.env.PORT)

const http = require('http')
const app = require('./src/app')
const sql = require('mssql');

const server = http.createServer(app)

server.listen(3000 || process.env.PORT, () => {
    console.log('Server started on port 3000')
})

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    trustServerCertificate: true
}

const pool = new sql.ConnectionPool(config);

pool.connect().then(() => {
    console.log('connected to database')
}
).catch(err => {
    console.log(err)
}
)
