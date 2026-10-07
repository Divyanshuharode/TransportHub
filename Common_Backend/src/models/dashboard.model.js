const connection = require("../config/db");

const getTransporterCountModel = (cbfn) => {
    const query = "SELECT COUNT(*) AS totalTransporters FROM users AS u JOIN role_assign AS ra ON u.user_id = ra.user_id JOIN roles AS r ON r.role_id = ra.role_id WHERE r.role_name = ?";
    connection.query(query, ["TRANSPORTER"], cbfn);
};

module.exports = { getTransporterCountModel };