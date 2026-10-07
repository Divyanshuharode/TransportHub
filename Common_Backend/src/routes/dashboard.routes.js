const express = require("express");

const dashboardRouter = express.Router();

const getTrans = require("../controllers/dashboard.controller");

dashboardRouter.get("/allTrans", getTrans);

module.exports = dashboardRouter;