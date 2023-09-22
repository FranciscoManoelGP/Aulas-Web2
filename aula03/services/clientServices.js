const fs = require("fs");

let clientList = [];

function clientListLoad() {
    try {
        clientList = JSON.parse(fs.readFileSync("../clientList.json"));
    } catch (error) {
        clientList = [];
    }
}

function clientListIsEmpty() {
    if (clientList.length === 0) {
        clientListLoad();
    }

    return clientList;
}

function getAllClients() {
    const result = clientListIsEmpty();

    return result;
}

function getClientById(id) {
    const result = clientListIsEmpty().find(client => client.id === id);
    
    return result;
}

module.exports = {
    getAllClients,
    getClientById
}