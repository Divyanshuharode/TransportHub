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
    const query = "DELETE FROM role_assign WHERE user_id = ?";
    connection.query(query, [user_id], (err) => {
        if (err) return cbfn(err);
        connection.query("DELETE FROM users WHERE user_id = ?", [user_id], cbfn);
    });
};

const updateStatusModel = (user_id, account_status, cbfn) => {
    const query = "UPDATE users SET account_status = ? WHERE user_id = ?";
    connection.query(query, [account_status, user_id], cbfn);
};

const getUserByIdModel = (user_id, cbfn) => {
    const query = ` SELECT u.user_id, u.full_name, u.email, u.account_status, u.created_at, r.role_name FROM users u
                    LEFT JOIN role_assign ra ON u.user_id = ra.user_id LEFT JOIN roles r ON ra.role_id = r.role_id WHERE u.user_id = ? `;
    connection.query(query, [user_id], cbfn);
};

const updateUserModel = (user_id, data, cbfn) => {
    const query = "UPDATE users SET full_name = UPPER(?), email = ? WHERE user_id = ?";
    connection.query(query, [data.full_name, data.email, user_id], cbfn);
};

module.exports = { getUsersModel, addUserModel, assignRoleModel, deleteUserModel, updateStatusModel, getUserByIdModel, updateUserModel };   