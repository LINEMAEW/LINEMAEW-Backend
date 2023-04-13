const express = require('express');
const Menus = require('../models/Menus')

const router = express.Router();

router.delete('/:id/delete', async (req, res) => {
    res.status(410).send(await Menus.deleteMenu(req, res));
})

module.exports = router;