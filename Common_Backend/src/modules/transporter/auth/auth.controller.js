const argon2 = require("argon2"); // hashing pass
const jwt = require('jsonwebtoken'); //generate jwt token
const { registerTransporterModel, loginTransporterModel } = require("./auth.model");

const registerTransporter = async (req, res, next) => {
    try {
        const hashPassword = await argon2.hash(req.body.password);
        const data = [
            req.body.transporter_name,
            req.body.email,
            req.body.mobile_number,
            hashPassword,
        ];

        registerTransporterModel(data, (err, result) => {
            if (err) return next(err);

            return res.status(201).json({ success: true, message: "Registration successful", data: result, });
        });
    } catch (err) {
        return next(err);
    }
};

const loginTransporter = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        loginTransporterModel(email, async (err, data) => {
            if (err) return next(err);

            if (!data || data.length === 0) {
                return res.status(401).send({ success: false, message: "Invalid email or password", data: null, });
            }

            const passwordMatches = await argon2.verify(data[0].password, password);

            if (!passwordMatches) {
                return res.status(401).send({ success: false, message: "Invalid email or password", data: null, });
            }
            const { transporter_id, role, account_status } = data[0];
            // console.log(transporter_id, role, account_status);

            const token = await jwt.sign({ transporter_id, role, account_status }, "hello", { expiresIn: "1m" });

            return res.send({ success: true, message: "Login successful", data: data[0], token: token });
        });
    } catch (err) {
        return next(err);
    }
};

module.exports = { registerTransporter, loginTransporter };