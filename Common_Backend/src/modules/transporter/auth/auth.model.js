const connection = require("../../../config/db");

const registerTransporterModel = (data, cbfn) => {
    const query = `INSERT INTO transporters (transporter_name, email, mobile_number, password) VALUES (?, ?, ?, ?)`;

    connection.query(query, data, cbfn);
};

const loginTransporterModel = (email, cbfn) => {
    const query = 'select * from transporters where email = ? ';
    connection.query(query, [email], cbfn)
}


module.exports = { registerTransporterModel, loginTransporterModel };
