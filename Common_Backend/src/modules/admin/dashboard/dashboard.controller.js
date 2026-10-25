const { getTransporterCountModel, getBookingCountModel } = require("./dashboard.model");

const getTrans = (req, res, next) => {
    getTransporterCountModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Total transporters fetched successfully", data: result });
    });
};

const totalBooking = (req, res, next) => {
    getBookingCountModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Total Bookings fetched successfully", data: result });
    });
};

module.exports = { getTrans, totalBooking };