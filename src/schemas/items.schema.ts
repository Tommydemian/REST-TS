import Joi from "joi";
import { Car } from '../types/car.interface'

const createItemSchema = Joi.object<Car>({
    name: Joi.string().required(),
    color: Joi.string().required(),
    description: Joi.string().required().max(50),
    gas: Joi.string().valid('gasoline, electric').required(),
    price: Joi.number().required(),
    year: Joi.number().required()
});

const updateItemSchema = Joi.object<Car>({
    name: Joi.string().required(),
    color: Joi.string().required(),
    description: Joi.string().required().max(50),
    gas: Joi.string().valid('gasoline, electric').required(),
    price: Joi.number().required(),
    year: Joi.number().required()
});

export { createItemSchema, updateItemSchema };