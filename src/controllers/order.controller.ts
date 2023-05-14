import { Request, Response, NextFunction } from "express";
import { handleHttp } from "../utils/error.handler";
import { getAllCars} from "../services/item.service";

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

export {getItems}