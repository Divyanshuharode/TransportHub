const express = require("express");
const { allTransporters, totalTransporter, activeTransporter, inActiveTransporter } = require("../controllers/transporter.controller")

const transporterRoute = express.Router();

transporterRoute.post("/api/allTransporter", allTransporters)
transporterRoute.post("/api/totalTransporter", totalTransporter);
transporterRoute.post("/api/activeTransporter", activeTransporter);
transporterRoute.post("/api/inActiveTransporter", inActiveTransporter);

module.exports = transporterRoute;