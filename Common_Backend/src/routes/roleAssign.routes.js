const express = require("express");

const roleAssignRoute = express.Router();

const {
    getRoleAssign,
    addRoleAssign,
    deleteRoleAssign,
    updateRoleAssign
} = require("../controllers/roleAssign.controller");

roleAssignRoute.get("/viewroleassign", getRoleAssign);

roleAssignRoute.post("/addroleassign", addRoleAssign);

roleAssignRoute.delete("/deleteroleassign/:role_assign_id", deleteRoleAssign);

roleAssignRoute.patch("/updateroleassign/:role_assign_id", updateRoleAssign);

module.exports = roleAssignRoute;