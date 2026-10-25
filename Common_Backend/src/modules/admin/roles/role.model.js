const connection = require("../../../config/db");

const getRolesModel = (cbfn) => {
    const query = "SELECT * FROM roles";
    connection.query(query, cbfn);
};

const addRoleModel = (role_name, cbfn) => {
    const query = "INSERT INTO roles(role_name) VALUES (?)";
    connection.query(query, [role_name], cbfn);
};

const updateRoleModel = (role_id, role_name, cbfn) => {
    const query = "UPDATE roles SET role_name = upper(?) WHERE role_id = ?";
    connection.query(query, [role_name, role_id], cbfn);
};

const deleteRoleModel = (role_id, cbfn) => {
    const query = "DELETE FROM roles WHERE role_id = ?";
    connection.query(query, [role_id], cbfn);
};

module.exports = { getRolesModel, addRoleModel, updateRoleModel, deleteRoleModel };