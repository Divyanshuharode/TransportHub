const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const errorMiddleware = require("./middleware/errorMiddleware");

const roleRoutes = require("./modules/admin/roles/role.routes");
const roleAssignRoutes = require("./modules/admin/roles/roleAssign.routes");
const userRoutes = require("./modules/admin/users/user.routes");
const authRoutes = require("./modules/admin/auth/auth.routes");
const dashboardRoutes = require("./modules/admin/dashboard/dashboard.routes");
const customerRoutes = require("./modules/admin/customers/customer.routes");
const transporterRoutes = require("./modules/admin/transporters/transporter.routes");

app.use("/", roleRoutes);
app.use("/", roleAssignRoutes);
app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", dashboardRoutes);
app.use("/", customerRoutes);
app.use("/", transporterRoutes);

app.use(errorMiddleware);

module.exports = app;
