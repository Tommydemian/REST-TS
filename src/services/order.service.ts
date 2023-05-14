import Item from "../models/item.model";
import { Car } from "../types/car.interface";

// get all cars from the database
const getOrders = async () => {
  const items = await Item.find({});
  return items;
};

export { getOrders };
