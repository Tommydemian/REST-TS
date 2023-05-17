import Joi from 'joi'

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(10).required(),
    name: Joi.string().max(15).required()
})

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(10).required(),
    name: Joi.string().max(15).required()
})


export { registerSchema, loginSchema } 

