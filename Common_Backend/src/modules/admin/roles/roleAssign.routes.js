const express = require("express");

const roleAssignRoute = express.Router();

const {
    getRoleAssign,
    addRoleAssign,
    deleteRoleAssign,
    updateRoleAssign
} = require("./roleAssign.controller");

roleAssignRoute.get("/viewroleassign", getRoleAssign);

roleAssignRoute.post("/addroleassign", addRoleAssign);

roleAssignRoute.delete("/deleteroleassign/:user_id/:role_id", deleteRoleAssign);

roleAssignRoute.patch("/updateroleassign/:user_id/:role_id", updateRoleAssign);

module.exports = roleAssignRoute;
