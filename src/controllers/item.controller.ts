import { Request, Response, NextFunction } from "express";
import { handleHttp } from "../utils/error.handler";
import { insertItem } from "../services/item.service";

const getItems = (req: Request, res:Response, next: NextFunction) => {
    try {
        
    } catch (error:any) {
        handleHttp(error.message, res)        
    }
}

const getItem = (req: Request, res:Response, next: NextFunction) => {
    try {
        
    } catch (error:any) {
        handleHttp(error.message, res)        
    }
}

// POST 
const addItem = async(req: Request, res:Response, next: NextFunction) => {
    try {
        const item = req.body
        console.log(item);
        
        const newItem = await insertItem(item)
        return res.send(newItem)
    } catch (error: any) {
        handleHttp(error.message, res)        
    }
};

const updateItem = (req: Request, res:Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        handleHttp('error', res)        
    }
};

const removeItem = (req: Request, res:Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        handleHttp('error', res)        
    }
};

export {getItems, getItem, addItem, updateItem, removeItem}