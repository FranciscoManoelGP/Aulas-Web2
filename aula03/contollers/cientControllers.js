const { getAllClients, getClientById } = require("../services/clientServices");

function getClients(req, res) {
    try {
        const result = getAllClients();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function getClient(req, res) {
    try {
        const id = req.params.id;
        const result = getClientById(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getClients,
    getClient
}