const express = require('express');
const cors = require('cors');
const BaseRouter = require('./routes/baseRouter');
const expressSession = require('express-session');
const flash = require('connect-flash');

require('dotenv').config()

const app = express();

global.userloggedIn = null;
global.restaurantloggedIn = null;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(flash());
app.use(expressSession({
    secret: process.env.SECRET
}))
app.use("*", (req, res, next) => {
    userloggedIn = req.session.userId;
    next();
})
app.use("*", (req, res, next) => {
    restaurantloggedIn = req.session.restaurantId
    next();
})

app.use('/api', BaseRouter)

module.exports = app;

