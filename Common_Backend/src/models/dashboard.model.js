const connection = require("../config/db");

const getTransporterCountModel = (cbfn) => {
    const query = "SELECT COUNT(*) AS totalTransporters FROM transporters";
    connection.query(query, cbfn);
};

const getBookingCountModel = (cbfn) => {
    const query = "SELECT COUNT(*) AS totalBooings FROM transporters";
    connection.query(query, cbfn);

}
module.exports = { getTransporterCountModel, getBookingCountModel };