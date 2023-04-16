const RestaurantRouter = require('./RestaurantRoute');
const OrdersRouter = require('./OrderRoute')
const MenusRouter = require('./MenuRoute')
const UsersRouter = require('./UsersRoute')

const router = require('express').Router();

const redirectIfAuth = require('../middlewares/redirectIfAuth');

router.use('/restaurants', RestaurantRouter);
router.use('/orders', OrdersRouter);
router.use('/menus', MenusRouter);
router.use('/users', redirectIfAuth, UsersRouter);


module.exports = router;