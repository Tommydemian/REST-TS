import Item from "../models/item.model";
import { Car } from "../types/car.interface";

// insert a new car into the database
const insertCar = async (item: Car) => {
  const itemCreated = await Item.create(item);
  return itemCreated;
};

// get all cars from the database
const getAllCars = async () => {
  const items = await Item.find({});
  return items;
};

// get one car from the database based on the id
const getCar = async (id: string) => {
  const item = await Item.findById({ _id: id });
  return item;
};

// Update a car from the database
const updateCar = async (id, data: Car) => {
  const item = await Item.findOneAndUpdate({ _id: id }, data, {
    // response del new doc
    new: true,
  });
  return item;
};

// Delete a car from the database
const deleteCar = async (id: string) => {
  const item = await Item.findOneAndDelete({ _id: id});
  if (!item) {
    const error = new Error('item not found');
    throw error;
  } 
  return item;
};

export { insertCar, getAllCars, getCar, updateCar, deleteCar};
