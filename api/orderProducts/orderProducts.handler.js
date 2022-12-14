const crud = require("../../crud/index");

const ordersHandler = require("../orders/orders.handler");
const productsHandler = require("../products/products.handler");

const tableName = "orderProducts";

async function getOrderProducts() {
  return await crud.get(tableName);
}

async function getOrderProduct(id) {
  return await crud.getById(tableName, id);
}

async function createOrderProduct(data) {
  const order = (await ordersHandler.getOrders()).find(
    (e) => e.id == data.orderId
  );
  const products = await productsHandler.getProducts();
  const orderProductsId = data.productsId;
  if (order == undefined) {
    return { message: "This order doesn't exists!" };
  }
  let find;
  for (const product of products) {
    find = true;
    for (const orderProductId of orderProductsId) {
      if (product.id == orderProductId.productId) {
        find = false;
      }
    }
  }
  if (find == true) {
    return { message: "This product(s) doesn't exists!" };
  }

  return await crud.save(tableName, null, data);
}

async function closeOrder(idOrder) {
  const order = (await ordersHandler.getOrders()).find((e) => e.id == idOrder);
  const ordersProducts = (await getOrderProducts()).filter(
    (e) => e.orderId == idOrder
  );
  if (order == undefined) {
    return { message: "This order doesn't exists!" };
  }

  if (ordersProducts == "") {
    return { message: "This order doesn't had a product to be closed" };
  }

  if (order.status == "Fechado") {
    return { message: "The order is already closed" };
  }

  const newOrder = {
    number: order.number,
    userId: order.userId,
    status: "Fechado",
  };

  await ordersHandler.editOrder(newOrder, idOrder);
}

async function editOrderProduct(data, id) {
  const order = await ordersHandler.getOrder(data.orderId);
  const orderProduct = await getOrderProduct(id);
  if (order.status == "Fechado") {
    // return { message: "This order is closed" };
  }
  const productsId = data.productsId;
  const teste = orderProduct.productsId;

  let newData = {};
  let savedData = {};

  for (const dataProductId of productsId) {
    if (dataProductId.productId == teste.productId) {
      savedData = dataProductId
    }
    for (const productId of orderProduct.productsId) {
      if (dataProductId.productId == productId.productId) {
        newData = {
          orderId: orderProduct.orderId,
          productsId: [savedData, { productId: productId.productId, quantity: (productId.quantity + dataProductId.quantity) }]
        }
        // await crud.save(tableName, id, newData);
      }
    }
    console.log(newData);
  }
}

async function removeOrderProduct(id) {
  const orderProduct = await getOrderProduct(id);
  const order = await ordersHandler.getOrders();

  for (const orderId of order) {
    if (orderProduct.orderId == orderId.id) {
      if (orderId.status == "Fechado") {
        // return { message: "This order is closed" };
      }
    }
  }



  // return await crud.remove(tableName, id);
}

module.exports = {
  getOrderProducts,
  getOrderProduct,
  createOrderProduct,
  editOrderProduct,
  closeOrder,
  removeOrderProduct,
};
