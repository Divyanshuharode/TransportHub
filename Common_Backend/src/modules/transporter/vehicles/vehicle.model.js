const connection = require("../../../config/db");

const addVehicleModel = (data, cbfn) => {
    const query = "insert into vehicles(vehicle_id, transporter_id, vehicle_number, vehicle_type, capacity) values (?, ?, ?, ?, ?)";
    connection.query(query, data, cbfn)
}

const getVehicleModel = (cbfn) => {
    const query = "select * from vehicles";
    connection.query(query, cbfn);
}

const vehiclesCountModel = (cbfn) => {
    const query =
        `SELECT
           COUNT(*) AS totalVehicles,
           SUM(status = 'AVAILABLE') AS activeVehicles,
           SUM(status = 'ON_TRIP') AS on_TripVehicles,
           SUM(status = 'MAINTENANCE') AS maintenanceVehicles,
           SUM(status = 'INACTIVE') AS inactiveVehicles
        FROM vehicles
        WHERE transporter_id = ?
`;
    connection.query(query, cbfn);
};

const deleteVehiclesModel = (vehicle_id, cbfn) => {
    const query = 'delete from vehicles where vehicle_id = ?';
    connection.query(query, [vehicle_id], cbfn)
}

module.exports = {
    addVehicleModel,
    getVehicleModel,
    vehiclesCountModel,
    deleteVehiclesModel
};
