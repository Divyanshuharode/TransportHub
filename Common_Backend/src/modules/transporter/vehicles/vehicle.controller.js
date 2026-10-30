const {
    addVehicleModel,
    getVehicleModel,
    vehiclesCountModel,
    deleteVehiclesModel
} = require("../vehicles/vehicle.model");

const addVehicle = (req, res, next) => {
    const data = [req.body.transporter_id, req.body.vehicle_number, req.body.vehicle_type, req.body.capacity]
    addVehicleModel(data, (err, result) => {
        if (err) next(err)
        res.json({ success: true, message: "vehicle added sucessfully", data: result })
    });
}

const getVehicles = (req, res) => {
    getVehicleModel((err, result) => {
        if (err) next(err)
        res.send({ success: true, message: " feched vehicles ", data: result })
    })
}

const vehiclesCount = (req, res, next) => {
    vehiclesCountModel((err, result) => {
        if (err) next(err);
        res.status(200).json({ success: true, message: "vehicles Count", data: result })
    })
}

const deleteVehicles = (req, res) => {
    deleteVehiclesModel(req.params.vehicle_id, (err, result) => {
        if (err) next(err);
        res.send({ success: true, message: "vehicle deleted", data: result })
    })
}
module.exports = {
    addVehicle,
    getVehicles,
    vehiclesCount,
    deleteVehicles
};