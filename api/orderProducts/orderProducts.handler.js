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
    const order = (await ordersHandler.getOrders()).find(e => e.id == data.orderId);
    const products = await productsHandler.getProducts();
    const orderProductsId = data.productsId;
    if (order == undefined) {
        return { message: "This order doesn't exists!" }
    }

    for (const product of products) {
        let find = true;
        for (const orderProductId of orderProductsId) {
            if (product.id == orderProductId.productId) {
                find = false;
            }
        }
    }
    if (find == true) {
        
    }

    // return await crud.save(tableName, null, data);

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