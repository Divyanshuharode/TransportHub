const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);

    res.status(500).send({
        success: false,
        message: err.message,
        data: null
    });
};

module.exports = errorMiddleware;