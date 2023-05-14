import { Request, Response, NextFunction } from "express";
import { handleHttp } from "../utils/error.handler";

const getBlogs = (req: Request, res:Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        handleHttp('error', res)        
    }
}

const getBlog = (req: Request, res:Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        handleHttp('error', res)        
    }
}

// POST 
const addBlog = (req: Request, res:Response, next: NextFunction) => {
    try {
        const item = req.body
        res.send(item)
    } catch (error) {
        handleHttp('error', res)        
    }
};

const updateBlog = (req: Request, res:Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        handleHttp('error', res)        
    }
};

const removeBlog = (req: Request, res:Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        handleHttp('error', res)        
    }
};

export {getBlogs, getBlog, addBlog, updateBlog, removeBlog}