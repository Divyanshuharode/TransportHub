const express = require("express");
const usersRouter = express.Router();

const { getusers, adduser, deleteuser, updateStatus, getusersById, updateuser } = require("../controllers/user.controller");

const schemaValidation = require("../validations/user.validation");

usersRouter.get("/api/users", getusers);

usersRouter.post("/api/users", schemaValidation, adduser);

usersRouter.delete("/api/users/:user_id", deleteuser);

usersRouter.put("/users/status/:user_id", updateStatus);

usersRouter.get("/api/users/:user_id", getusersById);

usersRouter.put("/api/users/:user_id", updateuser);

module.exports = usersRouter;