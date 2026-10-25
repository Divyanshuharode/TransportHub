const connection = require("../../../config/db");

const getUserByEmailModel = (email, cbfn) => {
    const query = "SELECT * FROM users WHERE email = ?";
    connection.query(query, [email], cbfn);
};

module.exports = { getUserByEmailModel };