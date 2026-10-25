const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { getUserByEmailModel } = require("./auth.model");

const loginAdmin = (req, res, next) => {
    getUserByEmailModel(req.body.email, (err, data) => {
        if (err) return next(err);
        console.log(data);
        if (data.length === 0) {
            return res.send({ success: false, message: "Invalid email or password", data: null });
        }

        bcrypt.compare(req.body.password, data[0].password, (err, result) => {
            if (err) return next(err);

            if (!result) {
                return res.send({ success: false, message: "Invalid email or password", data: null });
            }

            try {
                const user = { user_id: data[0].user_id, email: data[0].email };
                const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1d" });

                res.send({ success: true, message: "Login successful", data: { token } });
            } catch (err) {
                next(err);
            }
        });
    });
};

const loginTransporter = (req, res, next) => {

}

module.exports = { loginAdmin };