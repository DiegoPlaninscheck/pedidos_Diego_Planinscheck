const crud = require("../../crud/index");
const tableName = 'users';

async function getUsers() {
    return await crud.get(tableName);
}

async function getUser(id) {
    return await crud.getById(tableName, id);
}

async function createUser(data) {
    return await crud.save(tableName, undefined, data);
}

async function editUser(data, id) {
    return await crud.save(tableName, id, data);
}

async function removeUser(id) {
    return await crud.remove(tableName, id);
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    editUser,
    removeUser
}