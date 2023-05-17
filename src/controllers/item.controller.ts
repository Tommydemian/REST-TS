import { Request, Response, NextFunction } from "express";
import { createCustomError } from "../error/CustomApiError";
// services:
import {
  insertCar,
  getAllCars,
  getCar,
  updateCar,
  deleteCar,
} from "../services/item.service";
// validation schemas:
import { createItemSchema, updateItemSchema } from "../schemas/items.schema";

// GET
// path = '/'
const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await getAllCars();
    res.send(items);
  } catch (error: any) {
    next(error);
  }
};

// GET
// path = '/:id'
const getItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const item = await getCar(id);
    if (!item) return createCustomError(404, "No item found");
    res.send(item);
  } catch (error: any) {
    next(error);
  }
};

// POST
// path = '/'
const addItem = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = createItemSchema.validate(req.body);
  if (error) {
    
  }

  try {
    const item = req.body;
    if (!item) {
      next(createCustomError(404, "No item found"));
      // return to stop execution
      return;
    }
    const newItem = await insertCar(item);
    return res.send(newItem);
  } catch (error: any) {
    next(error);
  }
};

// PATCH
// path = '/:id'
const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = updateItemSchema.validate(req.body);
  if (error) {
  }
  try {
    const { id } = req.params;
    const b = req.body;
    if (!id || !b)
      return next(
        createCustomError(
          400,
          "Please provide a valid ID and a valid field name to update"
        )
      );
    const response = await updateCar(id, b);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

// DELETE
// path = /:id
const removeItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createCustomError(404, "No item found"));
    }
    const deletedItem = await deleteCar(id);
    res.send(deletedItem);
  } catch (error) {
    next(error);
  }
};

export { getItems, getItem, addItem, updateItem, removeItem };
