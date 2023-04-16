const RestaurantRouter = require('./RestaurantRoute');
const OrdersRouter = require('./OrderRoute')
const MenusRouter = require('./MenuRoute')
const UsersRouter = require('./UsersRoute')

const router = require('express').Router();

const loginRequired = require('../middlewares/loginRequired');

router.use('/restaurant', RestaurantRouter);
router.use('/order', OrdersRouter);
router.use('/menu', MenusRouter);
router.use('/user', loginRequired, UsersRouter);


module.exports = router;