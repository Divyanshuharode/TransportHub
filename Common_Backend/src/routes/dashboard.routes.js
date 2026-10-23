const express = require("express");

const dashboardRouter = express.Router();

const { getTrans, totalBooking } = require("../controllers/dashboard.controller");

dashboardRouter.post("/allTrans", getTrans);
dashboardRouter.post("/allBookings", totalBooking);

module.exports = dashboardRouter;