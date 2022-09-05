const express = require("express");

const router = express.Router();

const orderProductsHandler = require("./orderProducts.handler");

router.get('/', async (req, res) => {
    res.json(await orderProductsHandler.getOrderProducts());
})

router.get('/:id', async (req, res) => {
    res.json(await orderProductsHandler.getOrderProduct(req.params.id));
})

router.post('/', async (req, res) => {
    res.json(await orderProductsHandler.createOrderProduct(req.body));
})

router.put('/:id', async (req, res) => {
    res.json(await orderProductsHandler.editOrderProduct(req.body, req.params.id));
})

router.put('/closeOrder/:id', async (req, res) => {
    res.json(await orderProductsHandler.closeOrder(req.params.id));
})

router.delete('/:id', async (req, res) => {
    res.json(await orderProductsHandler.removeOrderProduct(req.params.id));
})

module.exports = router;