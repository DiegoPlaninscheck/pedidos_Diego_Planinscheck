const express = require("express");

const router = express.Router();

const ordersHandler = require("./orders.handler");

router.get('/', async (req, res) => {
    res.json(await ordersHandler.getOrders());
})

router.get('/:id', async (req, res) => {
    res.json(await ordersHandler.getOrder(req.params.id));
})

router.post('/', async (req, res) => {
    res.json(await ordersHandler.createOrder(req.body));
})

router.put('/:id', async (req, res) => {
    res.json(await ordersHandler.editOrder(req.body, req.params.id));
})

router.delete('/:id', async (req, res) => {
    res.json(await ordersHandler.removeOrder(req.params.id));
})

module.exports = router;