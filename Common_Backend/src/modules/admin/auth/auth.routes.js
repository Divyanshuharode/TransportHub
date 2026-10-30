const express = require("express");

const adminAuthRoutes = express.Router();

const { loginAdmin } = require("./auth.controller");

adminAuthRoutes.post("/login", loginAdmin);

module.exports = adminAuthRoutes; 