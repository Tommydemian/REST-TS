import { Request, Response, NextFunction } from "express";
import { handleHttp } from "../utils/error.handler";
import { insertCar, getAllCars, getCar, updateCar, deleteCar } from "../services/item.service";

// GET 
// path = '/'
const getItems = async(req: Request, res:Response, next: NextFunction) => {
    try {
        const items = await getAllCars();
        res.send(items);
    } catch (error:any) {
        handleHttp(error.message, res)        
    }
}

// GET
// path = '/:id'
const getItem = async(req: Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const item = await getCar(id)
        res.send(item);
    } catch (error:any) {
        handleHttp(error.message, res)        
    }
}

// POST 
// path = '/'
const addItem = async(req: Request, res:Response, next: NextFunction) => {
    try {
        const item = req.body
        const newItem = await insertCar(item)
        return res.send(newItem)
    } catch (error: any) {
        handleHttp(error.message, res)        
    }
};

// PATCH
// path = '/:id'
const updateItem = async(req: Request, res:Response, next: NextFunction) => {
    try {
        const { id } = req.params 
        const b = req.body
        const response = await updateCar(id, b)
        res.send(response)
    } catch (error) {
        handleHttp('error', res)        
    }
};

// DELETE
// path = /:id
const removeItem = async(req: Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const deletedItem = await deleteCar(id)
        res.send(deletedItem)
    } catch (error) {
        handleHttp('error', res)        
    }
};

export {getItems, getItem, addItem, updateItem, removeItem}