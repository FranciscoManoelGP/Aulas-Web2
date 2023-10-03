const fs = require("fs");

let clientList = [];

function clientListLoad() {
    return clientList = JSON.parse(fs.readFileSync("../clientList.json"));
}

function clientListEdit(editedModel) {
    fs.writeFileSync("../clientList.json", JSON.stringify(editedModel));
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
    
    clientListEdit(result);
}

module.exports = {
    getAllClients,
    getClientById,
    deleteClientById
}