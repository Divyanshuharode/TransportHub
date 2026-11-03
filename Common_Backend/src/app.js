const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175"
];
app.use(cors({
    origin: allowedOrigins,
    credentials: true // req accept 
}));

const errorMiddleware = require("./middleware/errorMiddleware");
// admin all Api
const roleRoutes = require("./modules/admin/roles/role.routes");
const roleAssignRoutes = require("./modules/admin/roles/roleAssign.routes");
const userRoutes = require("./modules/admin/users/user.routes");
const adminAuthRoutes = require("./modules/admin/auth/auth.routes");
const dashboardRoutes = require("./modules/admin/dashboard/dashboard.routes");
const customerRoutes = require("./modules/admin/customers/customer.routes");
const transporterRoutes = require("./modules/admin/transporters/transporter.routes");

app.use("/", roleRoutes);
app.use("/", roleAssignRoutes);
app.use("/", userRoutes);
app.use("/", adminAuthRoutes);
app.use("/", dashboardRoutes);
app.use("/", customerRoutes);
app.use("/", transporterRoutes);


// transporters all Api
const { transporterAuthMiddleware } = require("./middleware/transporterAuthMiddleware")
const vehicleRoute = require("./modules/transporter/vehicles/vehicle.routes");
const transporterAuthRoutes = require("./modules/transporter/auth/auth.routes");
app.use("/", transporterAuthRoutes);
app.use("/", transporterAuthMiddleware, vehicleRoute);




app.use(errorMiddleware);

module.exports = app;
