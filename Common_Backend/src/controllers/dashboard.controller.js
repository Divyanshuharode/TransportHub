const { getTransporterCountModel } = require("../models/dashboard.model");

const getTrans = (req, res, next) => {
    getTransporterCountModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Total transporters fetched successfully", data: result });
    });
};

module.exports = getTrans;