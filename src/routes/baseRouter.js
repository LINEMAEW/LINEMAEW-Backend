const RestaurantRouter = require('./RestaurantRoute');
const OrdersRouter = require('./OrderRoute')
const MenusRouter = require('./MenuRoute')
const UsersRouter = require('./UsersRoute')

const router = require('express').Router();

const redirectIfAuth = require('../middlewares/redirectIfAuth');

router.use('/restaurant', RestaurantRouter);
router.use('/order', OrdersRouter);
router.use('/menu', MenusRouter);
router.use('/user', redirectIfAuth, UsersRouter);


module.exports = router;