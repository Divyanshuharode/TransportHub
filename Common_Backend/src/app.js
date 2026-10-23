const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const errorMiddleware = require("./middleware/error.middleware");
const roleRoutes = require("./routes/role.routes");
const userRoutes = require("./routes/user.routes");
const roleAssignRoutes = require("./routes/roleAssign.routes");
const authRoutes = require("./routes/auth.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const customerRoutes = require("./routes/customer.routes");
const transporterRoute = require("./routes/transporter.routes")

app.use("/", roleRoutes);
app.use("/", userRoutes);
app.use("/", roleAssignRoutes);
app.use("/", authRoutes);
app.use("/", dashboardRoutes);
app.use("/", customerRoutes);
app.use("/", transporterRoute);

app.use(errorMiddleware);

module.exports = app;