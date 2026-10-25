const connection = require("../../../config/db");

const allTransportersModel = (cbfn) => {
    const query = "select * from transporters";
    connection.query(query, cbfn)
}

const totalTransportersModel = (cbfn) => {
    const query = "SELECT COUNT(*) AS totaltransporter FROM transporters";
    connection.query(query, cbfn);
};

const activeTransportersModel = (cbfn) => {
    const query = "SELECT COUNT(*) AS activetransporter FROM transporters WHERE account_status = ?";
    connection.query(query, ["active"], cbfn);
};

const inActiveTransportersModel = (cbfn) => {
    const query = "SELECT COUNT(*) AS inActivetransporter FROM transporters WHERE account_status = ?";
    connection.query(query, ["inactive"], cbfn);
};

module.exports = { allTransportersModel, totalTransportersModel, activeTransportersModel, inActiveTransportersModel };
