import Item from "../models/item.model";
import { Car } from "../types/car.interface";
import { createCustomError } from "../error/CustomApiError";
import { logger } from "../utils/logger";

// insert a new car into the database
const insertCar = async (item: Car) => {
  try {
    const itemCreated = await Item.create(item);
    return itemCreated;
  } catch (error) {
    logger.error(error.message);
    throw createCustomError(500, 'Failed to insert car into the database')
  }
};

// get all cars from the database
const getAllCars = async () => {
  try {
    const items = await Item.find({});
    return items;
  } catch (error) {
    logger.error(error.message);
    throw createCustomError(500, 'Failed to get cars from the database')
  }
};

// get one car from the database based on the id
const getCar = async (id: string) => {
  try {
    const item = await Item.findById({ _id: id });
    return item;
  } catch (error) {
    logger.error(error.message);
    throw createCustomError(500, 'Failed to get car from the database')
  }
};

// Update a car from the database
const updateCar = async (id, data: Car) => {
  try {
    const item = await Item.findOneAndUpdate({ _id: id }, data, {
      // response del new doc
      new: true,
    });
    return item;
  } catch (error) {
    logger.error(error.message);
    throw createCustomError(500, 'Failed to update car')
  }
};

// Delete a car from the database
const deleteCar = async (id: string) => {
  try {
    const item = await Item.findOneAndDelete({ _id: id});
    if (!item) {
      throw createCustomError(404, 'Item not found')
    } 
    return item;
  } catch (error) {
    logger.error(error.message);
    throw createCustomError(500, 'Failed to delete car')
  }
};

export { insertCar, getAllCars, getCar, updateCar, deleteCar};
