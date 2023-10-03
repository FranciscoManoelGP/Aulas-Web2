const router = require("express").Router();
const { getClients, getClient, deleteClient } = require("../contollers/cientControllers");


router.get('/clients', getClients)

router.get("/:id", getClient)

router.delete("/delete/:id", deleteClient)

module.exports = router;