const Restaurantrouter = require('./RestaurantRoute');

const router = require('express').Router();


router.use('/restaurants', Restaurantrouter);


module.exports = router;