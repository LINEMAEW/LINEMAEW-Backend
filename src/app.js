let express = require('express');
let cors = require('cors');

const {
    // Blah Blah
} = require('./models/SomeModel')

require('dotenv').config()

let app = express();
app.use(cors());