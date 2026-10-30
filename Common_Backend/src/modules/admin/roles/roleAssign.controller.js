const {
    getRoleAssignModel,
    addRoleAssignModel,
    deleteRoleAssignModel,
    updateRoleAssignModel
} = require("./roleAssign.model");

const getRoleAssign = (req, res, next) => {
    getRoleAssignModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Role assignments fetched successfully", data: result });
    });
};

const addRoleAssign = (req, res, next) => {
    addRoleAssignModel(req.body.user_id, req.body.role_id, (err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Role assigned successfully", data: result });
    });
};

const deleteRoleAssign = (req, res, next) => {
    deleteRoleAssignModel(req.params.user_id, req.params.role_id, (err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Role assignment deleted successfully", data: result });
    });
};

const updateRoleAssign = (req, res, next) => {
    updateRoleAssignModel(req.params.user_id, req.params.role_id, req.body.role_id, (err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Role assignment updated successfully", data: result });
    });
};

module.exports = { getRoleAssign, addRoleAssign, deleteRoleAssign, updateRoleAssign };
