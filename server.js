'use strict'

require('dotenv').config()

const http = require('http')
const app = require('./src/app')

const server = http.createServer(app)

server.listen(3000, () => {
    console.log('Server started on port 3000')
})


