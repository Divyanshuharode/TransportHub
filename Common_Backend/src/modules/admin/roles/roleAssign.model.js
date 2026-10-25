const connection = require("../../../config/db");

const getRoleAssignModel = (cbfn) => {
    const query = "SELECT * FROM role_assign";
    connection.query(query, cbfn);
};

const addRoleAssignModel = (user_id, role_id, cbfn) => {
    const query = "INSERT INTO role_assign(user_id, role_id) VALUES (?, ?)";
    connection.query(query, [user_id, role_id], cbfn);
};

const deleteRoleAssignModel = (role_assign_id, cbfn) => {
    const query = "DELETE FROM role_assign WHERE role_assign_id = ?";
    connection.query(query, [role_assign_id], cbfn);
};

const updateRoleAssignModel = (role_assign_id, user_id, role_id, cbfn) => {
    const query = "UPDATE role_assign SET user_id = ?, role_id = ? WHERE role_assign_id = ?";
    connection.query(query, [user_id, role_id, role_assign_id], cbfn);
};

module.exports = { getRoleAssignModel, addRoleAssignModel, deleteRoleAssignModel, updateRoleAssignModel };