import { Request, Response, NextFunction } from "express";
import { getAllCars} from "../services/item.service";

// GET 
// path = '/'
const getItems = async(req: Request, res:Response, next: NextFunction) => {
    try {
        const items = await getAllCars();
        res.send(items);
    } catch (error:any) {
        next(error);     
    }
}

export {getItems}