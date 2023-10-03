const { getAllClients, getClientById, deleteClientById } = require("../services/clientServices");

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

function deleteClient(req, res) {
    try {
        const id = req.params.id;
        deleteClientById(id)
        res.status(200).send("Salve")
    } catch (error) {
        res.status(500).send()
    }
}

module.exports = {
    getClients,
    getClient,
    deleteClient
}