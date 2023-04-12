let express = require('express');
let cors = require('cors');

const {
    // Blah Blah
} = require('./models/SomeModel')

require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());

module.exports = app;