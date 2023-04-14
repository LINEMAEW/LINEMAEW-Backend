const express = require('express');
const Menus = require('../models/Menu')

const router = express.Router();

router.delete('/:id/delete', async (req, res) => {
    await Menus.deleteMenu(req, res);
    res.status(200).send(`Delete menu successfully.`)
})

module.exports = router;