import { logger } from "utils/logger";
import Item from "../models/item.model";
import { createCustomError } from "error/CustomApiError";

// get all cars from the database
const getOrders = async () => {
  try {
    const items = await Item.find({});
    return items;
  } catch (error) {
    logger.error(error.message);
    throw createCustomError(500, 'Failed to execute the order request')
  }
};

export { getOrders };
