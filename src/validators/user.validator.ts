import Joi from "joi";

const userValidator =
    Joi.object({
        username: Joi.string()
            .required()
            // .pattern(/w{3,}/)
            .messages({'string.empty': 'enter at least 3 char'}),
        password: Joi.string()
            .min(3)
            .max(12)
            .required()
            .messages({
                "string.min": " must be at least 3 chars",
                "string.max": " must be max 12 chars"
            }),
        age: Joi.number()
            .required()
            .min(1)
            .max(90)
            .messages({
                "number.min": "min age 1 year",
                "number.max": "man age 90 year"
            })
    })
export default userValidator