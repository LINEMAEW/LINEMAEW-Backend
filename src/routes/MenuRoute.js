const express = require('express');
const Menus = require('../models/Menu')

const router = express.Router();

router.put('/:id/edit', async (req, res) => {
    await Menus.editMenu(req, res);
    res.status(200).send(`Edit menu successfully.`)
})

router.delete('/:id/delete', async (req, res) => {
    await Menus.deleteMenu(req, res);
    res.status(200).send(`Delete menu successfully.`)
})

router.get('/:id', async (req, res) => {
    const resp = await Menus.getMenuDetail(req, res);
    res.status(200).send({ "menu_detail": resp });
})

module.exports = router;