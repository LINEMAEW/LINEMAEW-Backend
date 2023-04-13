const express = require('express');
const cors = require('cors');
const BaseRouter = require('./routes/baseRouter');

require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', BaseRouter)

module.exports = app;

