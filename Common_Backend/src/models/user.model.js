const connection = require("../config/db");

const getUsersModel = (cbfn) => {
    const query = "SELECT * FROM users";
    connection.query(query, cbfn);
};

const addUserModel = (data, cbfn) => {
    const query = "INSERT INTO users (full_name, email, password) VALUES (UPPER(?), ?, ?)";
    connection.query(query, [data.full_name, data.email, data.password], cbfn);
};

const assignRoleModel = (user_id, role_id, cbfn) => {
    const query = "INSERT INTO role_assign (user_id, role_id) VALUES (?, ?)";
    connection.query(query, [user_id, role_id], cbfn);
};

const deleteUserModel = (user_id, cbfn) => {
    const query = "DELETE FROM users WHERE user_id = ?";
    connection.query(query, [user_id], cbfn);
};

const updateStatusModel = (user_id, account_status, cbfn) => {
    const query = "UPDATE users SET account_status = ? WHERE user_id = ?";
    connection.query(query, [account_status, user_id], cbfn);
};

const getUserByIdModel = (user_id, cbfn) => {
    const query = " select * FROM users WHERE user_id = ?";
    connection.query(query, [user_id], cbfn);
};

module.exports = { getUsersModel, addUserModel, assignRoleModel, deleteUserModel, updateStatusModel, getUserByIdModel };