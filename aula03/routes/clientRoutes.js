const router = require("express").Router();
const { getClients, getClient } = require("../contollers/cientControllers");


router.get('/clients', getClients)

router.get("/:id", getClient)

module.exports = router;