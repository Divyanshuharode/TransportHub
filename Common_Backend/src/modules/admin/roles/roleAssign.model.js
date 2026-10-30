const connection = require("../../../config/db");

const getRoleAssignModel = (cbfn) => {
    const query = "SELECT * FROM role_assign";
    connection.query(query, cbfn);
};

const addRoleAssignModel = (user_id, role_id, cbfn) => {
    const query = "INSERT INTO role_assign(user_id, role_id) VALUES (?, ?)";
    connection.query(query, [user_id, role_id], cbfn);
};

const deleteRoleAssignModel = (user_id, role_id, cbfn) => {
    const query = "DELETE FROM role_assign WHERE user_id = ? AND role_id = ?";
    connection.query(query, [user_id, role_id], cbfn);
};

const updateRoleAssignModel = (user_id, old_role_id, new_role_id, cbfn) => {
    const query = "UPDATE role_assign SET role_id = ? WHERE user_id = ? AND role_id = ?";
    connection.query(query, [new_role_id, user_id, old_role_id], cbfn);
};

module.exports = { getRoleAssignModel, addRoleAssignModel, deleteRoleAssignModel, updateRoleAssignModel };
