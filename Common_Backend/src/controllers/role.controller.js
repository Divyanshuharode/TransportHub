const { getRolesModel, addRoleModel, updateRoleModel, deleteRoleModel } = require("../models/role.model");

const getRoles = (req, res, next) => {
    getRolesModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Roles fetched successfully", data: result });
    });
};

const addroles = (req, res, next) => {
    addRoleModel(req.body.role_name, (err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Role added successfully", data: result });
    });
};

const updaterole = (req, res, next) => {
    updateRoleModel(req.params.role_id, req.body.role_name, (err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Role updated successfully", data: result });
    });
};

const deleterole = (req, res, next) => {
    deleteRoleModel(req.params.role_id, (err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Role deleted successfully", data: result });
    });
};

module.exports = { getRoles, addroles, deleterole, updaterole };