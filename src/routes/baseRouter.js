const RestaurantRouter = require('./RestaurantRoute');
const OrdersRouter = require('./OrderRoute')

const router = require('express').Router();


router.use('/restaurants', RestaurantRouter);
router.use('/allOrders', OrdersRouter);


module.exports = router;