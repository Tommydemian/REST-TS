import { Request, Response, NextFunction } from "express";
import User from "models/user.model";

export interface CustomAPIError extends Error {
  message: string;
  statusCode: number;
}

// GET all users
export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      const error = new Error("User not found") as CustomAPIError;
      error.statusCode = 404;
      throw error;
    }
    return res.send(users);
  } catch (error: any) {
    console.error(error.message);
    next(error);
  }
};

// GET one user by email
export const getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            const error = new Error('User not found') as CustomAPIError;
            error.statusCode = 404;
            throw error;
        }
        return res.send(user);
    } catch (error) {
        console.error(error.message);
        next(error);
    }
};

export const getUserBySessionToken = async (req: Request, res: Response, next: NextFunction) => {
    const sessionToken = req.params.sessionToken
    try {
        const session = await User.findOne({ 'authentication.sessionToken': sessionToken })
    
  } catch (error) {
    
  }
}
