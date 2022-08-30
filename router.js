const express = require("express");
const router = express.Router();

const usersController = require("./api/users/users.controller");
const ordersController = require("./api/orders/orders.controller");
const ordersProductsController = require("./api/orderProducts/orderProducts.controller");
const productsController = require("./api/products/products.controller");

router.use("/users", usersController);
router.use("/orders", ordersController);
router.use("/ordersProducts", ordersProductsController);
router.use("/products", productsController);

module.exports = router;