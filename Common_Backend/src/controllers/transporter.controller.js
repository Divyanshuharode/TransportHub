const { allTransportersModel, totalTransportersModel, activeTransportersModel, inActiveTransportersModel } = require("../models/transporter.model")

const allTransporters = (req, res, next) => {
    allTransportersModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Total customers fetched successfully", data: result });
    })
}
const totalTransporter = (req, res, next) => {
    totalTransportersModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Total customers fetched successfully", data: result });
    });
};

const activeTransporter = (req, res, next) => {
    activeTransportersModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Active customers fetched successfully", data: result });
    });
};

const inActiveTransporter = (req, res, next) => {
    inActiveTransportersModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Inactive customers fetched successfully", data: result });
    });
};

module.exports = { allTransporters, totalTransporter, activeTransporter, inActiveTransporter }