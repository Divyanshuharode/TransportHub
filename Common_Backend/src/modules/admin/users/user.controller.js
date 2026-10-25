const bcrypt = require("bcrypt");

const { getUsersModel, addUserModel, assignRoleModel, deleteUserModel, updateStatusModel, getUserByIdModel, updateUserModel } = require("./user.model");

const getusers = (req, res, next) => {
    getUsersModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Users fetched successfully", data: result });
    });
};

const adduser = async (req, res, next) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const data = { full_name: req.body.full_name, email: req.body.email, password: hashPassword };

        addUserModel(data, (err, result) => {
            if (err) return next(err);

            assignRoleModel(result.insertId, req.body.role_id, (err) => {
                if (err) return next(err);
                res.send({ success: true, message: "User added and role assigned successfully", data: result });
            });
        });
    } catch (err) {
        next(err);
    }
};

const deleteuser = (req, res, next) => {
    deleteUserModel(req.params.user_id, (err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "User deleted successfully", data: result });
    });
};

const updateStatus = (req, res, next) => {
    updateStatusModel(req.params.user_id, req.body.account_status, (err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Status updated successfully", data: result });
    });
};

const getusersById = (req, res, next) => {
    getUserByIdModel(req.params.user_id, (err, result) => {
        if (err) return next(err);
        if (!result.length) return res.status(404).send({ success: false, message: "User not found", data: null });
        res.send({ success: true, message: "User information fetched successfully", data: result[0] });
    });
};

const updateuser = (req, res, next) => {
    updateUserModel(req.params.user_id, req.body, (err, result) => {
        if (err) return next(err);
        if (!result.affectedRows) return res.status(404).send({ success: false, message: "User not found", data: null });
        res.send({ success: true, message: "User updated successfully", data: result });
    });
};

module.exports = { getusers, adduser, deleteuser, updateStatus, getusersById, updateuser };