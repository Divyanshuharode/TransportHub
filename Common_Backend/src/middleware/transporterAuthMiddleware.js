const jwt = require("jsonwebtoken");
const transporterAuthMiddleware = (req, res, next) => {

    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({ success: false, message: "Authentication required" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.transporterId = decoded.transporter_id;
        req.transporter = decoded;

        next();

    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

module.exports = { transporterAuthMiddleware };