const joi = require("joi");

const userSchema = joi.object({
    full_name: joi.string().min(3).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(255).required(),
    role_id: joi.number().required()
});

const schemaValidation = (req, res, next) => {
    const result = userSchema.validate(req.body);

    if (result.error) {
        return res.status(400).send({
            success: false,
            message: result.error.message,
            data: null
        });
    }

    next();
};

module.exports = schemaValidation;