const joi = require("joi");

// const roleSchema = joi.object({
//     role_name: joi.string().min(3).max(50).required()
// });

const roleValidation = (req, res, next) => {
    // const result = roleSchema.validate(req.body);

    // if (result.error) {
    //     return res.status(400).send({
    //         success: false,
    //         message: result.error.details[0].message,
    //         data: null
    //     });
    // }

    next();
};

module.exports = roleValidation;