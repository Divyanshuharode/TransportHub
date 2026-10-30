const Joi = require("joi");


const validateRegister = (req, res, next) => {

    const registerSchema = Joi.object({
        transporter_name: Joi.string().min(2).max(100).required(),
        email: Joi.string().email().required(),
        mobile_number: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
        password: Joi.string().min(8).max(72).required()
    });

    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });

    next();
};

const validateLogin = (req, res, next) => {

    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(72).required()
    });

    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });

    next()
}

module.exports = { validateRegister, validateLogin };
