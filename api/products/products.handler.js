const crud = require("../../crud/index");
const tableName = 'products';

async function getProducts() {
    return await crud.get(tableName);
}

async function getProduct(id) {
    return await crud.getById(tableName, id);
}

async function createProduct(data) {
    return await crud.save(tableName, undefined, data);
}

async function editProduct(data, id) {
    return await crud.save(tableName, id, data);
}

async function removeProduct(id) {
    return await crud.remove(tableName, id);
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    editProduct,
    removeProduct
}