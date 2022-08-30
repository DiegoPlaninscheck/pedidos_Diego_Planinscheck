const express = require("express");

const router = express.Router();

const usersHandler = require("./users.handler");

router.get('/', async (req, res) => {
    res.json(await usersHandler.getUsers());
})

router.get('/:id', async (req, res) => {
    res.json(await usersHandler.getUser(req.params.id));
})

router.post('/', async (req, res) => {
    res.json(await usersHandler.createUser(req.body));
})

router.put('/:id', async (req, res) => {
    res.json(await usersHandler.editUser(req.body, req.params.id));
})

router.delete('/:id', async (req, res) => {
    res.json(await usersHandler.removeUser(req.params.id));
})

module.exports = router;

