const crud = require("../../crud/index");

const ordersHandler = require("../orders/orders.handler");
const productsHandler = require("../products/products.handler");

const tableName = 'orderProducts';

async function getOrderProducts() {
    return await crud.get(tableName);
}

async function getOrderProduct(id) {
    return await crud.getById(tableName, id);
}

async function createOrderProduct(data) {
    const orders = await ordersHandler.getOrders();
    const products = await productsHandler.getProducts();
    const product = await products.filter(e => e.id == data.productId);
    const order = await orders.filter(e => e.id == data.orderId);
    if (order == "" || order == []) {
        return { message: "This order doesn't exists!" }
    } else {
        if (product == "" || product == []) {
            return { message: "This product doesn't exists!" }
        } else {
            // return await crud.save(tableName, undefined, data);
        }
    }
}

async function editOrderProduct(data, id) {
    return await crud.save(tableName, id, data);
}

async function removeOrderProduct(id) {
    return await crud.remove(tableName, id);
}

module.exports = {
    getOrderProducts,
    getOrderProduct,
    createOrderProduct,
    editOrderProduct,
    removeOrderProduct
}