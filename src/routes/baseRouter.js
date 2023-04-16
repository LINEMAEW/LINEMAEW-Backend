const RestaurantRouter = require('./RestaurantRoute');
const OrdersRouter = require('./OrderRoute')
const MenusRouter = require('./MenuRoute')

const router = require('express').Router();


router.use('/restaurants', RestaurantRouter);
router.use('/order', OrdersRouter);
router.use('/menu', MenusRouter);


module.exports = router;