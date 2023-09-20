const clients = require("../clientList.json");

function searchClient(key, value) {
    console.log(clients);
    const client = clients.find(client => client[key] === value);
    console.log(client);
}

const name = "Lucas";
const phone = "99999999";
const properties = ["name", "phone", "adress"];

searchClient(properties[1], phone);