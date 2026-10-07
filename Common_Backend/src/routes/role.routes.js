const express = require("express");
const rolesRoute = express.Router();

const {
    getRoles,
    addroles,
    deleterole,
    updaterole
} = require("../controllers/role.controller");

const roleValidation = require("../validations/role.validation");

rolesRoute.get("/viewroles", getRoles);

rolesRoute.post("/addroles", roleValidation, addroles);

rolesRoute.delete("/deleterole/:role_id", deleterole);

rolesRoute.patch("/updaterole/:role_id", roleValidation, updaterole);

module.exports = rolesRoute;