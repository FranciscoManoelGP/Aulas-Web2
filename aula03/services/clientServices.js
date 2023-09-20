const fs = require("fs");

function getAllClients() {
    return JSON.parse(fs.readFileSync("../clientList.json"));
}

function getClientById(id) {
    return JSON.parse(
        fs.readFileSync("../clientList.json")
    ).find(client => client.id === id);
}

module.exports = {
    getAllClients,
    getClientById
}