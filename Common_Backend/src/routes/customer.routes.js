const express = require("express");

const customerRoute = express.Router();

const {
    getCustomers,
    totalCustomers,
    activeCustomers,
    inActiveCustomers,
    addCustomers,
} = require("../controllers/customer.controller");

customerRoute.post("/api/customers", getCustomers);
customerRoute.post("/api/totalCustomers", totalCustomers);
customerRoute.post("/api/activeCustomers", activeCustomers);
customerRoute.post("/api/inActiveCustomers", inActiveCustomers);
customerRoute.post("/api/addCustomers", addCustomers);

module.exports = customerRoute;