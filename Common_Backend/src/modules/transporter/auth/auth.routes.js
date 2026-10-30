const express = require("express");
const { registerTransporter, loginTransporter } = require("./auth.controller");
const { validateRegister, validateLogin } = require("./auth.validation")
const transporterAuthRoutes = express.Router();

transporterAuthRoutes.post("/api/registerTransporter", validateRegister, registerTransporter);
transporterAuthRoutes.post("/api/loginTransporter", validateLogin, loginTransporter);

module.exports = transporterAuthRoutes;
