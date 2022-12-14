const crud = require("../../crud/index");
const usersHandler = require("../users/users.handler");
const tableName = "orders";

async function getOrders() {
  return await crud.get(tableName);
}

async function getOrder(id) {
  return await crud.getById(tableName, id);
}

async function createOrder(data) {
  const users = await usersHandler.getUsers();
  const orders = await getOrders();
  const user = users.filter((e) => e.id == data.userId);
  if (user == "" || user == []) {
    return { message: "This user doesn't exits!" };
  } else {
    for (const orderId of orders) {
      if (data.userId == orderId.userId) {
        if (orderId.status == "Em aberto") {
          return { message: "This user have a order!" };
        }
      }
    }
    return await crud.save(tableName, undefined, data);
  }
}

async function editOrder(data, id) {
  return await crud.save(tableName, id, data);
}

async function removeOrder(id) {
  return await crud.remove(tableName, id);
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  editOrder,
  removeOrder,
};
