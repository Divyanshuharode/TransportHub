const generateUUID = require("../../../utility/uuid");
const {
    addVehicleModel,
    getVehicleModel,
    vehiclesCountModel,
    deleteVehiclesModel
} = require("./vehicle.model");

const addVehicle = (req, res, next) => {
    const vehicle_id = generateUUID();
    const data = [vehicle_id, req.body.transporter_id, req.body.vehicle_number, req.body.vehicle_type, req.body.capacity]
    addVehicleModel(data, (err, result) => {
        if (err) return next(err)
        res.json({ success: true, message: "vehicle added sucessfully", data: { vehicle_id, ...result } })
    });
}

const getVehicles = (req, res, next) => {
    getVehicleModel((err, result) => {
        if (err) return next(err)
        res.send({ success: true, message: " feched vehicles ", data: result })
    })
}

const vehiclesCount = (req, res, next) => {
    vehiclesCountModel((err, result) => {
        if (err) return next(err);
        res.status(200).json({ success: true, message: "vehicles Count", data: result })
    })
}

const deleteVehicles = (req, res, next) => {
    deleteVehiclesModel(req.params.vehicle_id, (err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "vehicle deleted", data: result })
    })
}
module.exports = {
    addVehicle,
    getVehicles,
    vehiclesCount,
    deleteVehicles
};
