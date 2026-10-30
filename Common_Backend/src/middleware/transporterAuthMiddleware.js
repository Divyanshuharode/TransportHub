const jwt = require("jsonwebtoken");

const transporterAuthMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ") : null;

    if (!token) {
        return res.status(401).json({ success: false, message: "Authentication required", });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.transporterId = decoded.transporter_id;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token", });
    }
};

module.exports = transporterAuthMiddleware;