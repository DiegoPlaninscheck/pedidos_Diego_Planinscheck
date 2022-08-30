const express = require('express');

const router = express.Router();

const productsHandler = require("./products.handler");

router.get('/', async (req, res) => {
    res.json(await productsHandler.getProducts());
})

router.get('/:id', async (req, res) => {
    res.json(await productsHandler.getProduct(req.params.id))
})

router.post('/', async (req, res) => {
    res.json(await productsHandler.createProduct(req.body));
})

router.put('/:id', async (req, res) => {
    res.json(await productsHandler.editProduct(req.body, req.params.id));
})

router.delete('/:id', async (req, res) => {
    res.json(await productsHandler.removeProduct(req.params.id));
})

module.exports = router;