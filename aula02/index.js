const clientList = require("../clientList.json")

function filterValueMissing(key) {
    const result = clientList.filter(client => client[key] === "" || client[key] === null);

    console.log(result);
}

const properties = ["name", "phone", "adress"];
filterValueMissing(properties[0]);