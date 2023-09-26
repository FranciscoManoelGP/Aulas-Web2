const fs = require("fs");

let clientList = [];

function clientListLoad() {
    return clientList = JSON.parse(fs.readFileSync("../clientList.json"));
}

function getAllClients() {
    const result = clientListLoad();

    return result;
}

function getClientById(id) {
    const result = clientListLoad().find(client => client.id === id);

    return result;
}

function deleteClientById(id) {
    const result = clientListLoad().filter(client => client.id !== id);

    return result;
}

module.exports = {
    getAllClients,
    getClientById,
    deleteClientById
}