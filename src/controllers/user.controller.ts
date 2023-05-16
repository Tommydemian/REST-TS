import { Request, Response, NextFunction } from "express";
import User from "models/user.model";
import { createCustomError } from '../error/CustomApiError' 

// GET all users
export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      next(createCustomError(404, 'User not found'))
      return;
    }
    return res.send(users);
  } catch (error: any) {
    next(error);
  }
};

// GET one user by email
export const getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
          next(createCustomError(404, 'User not found'))
          return;
        }
        return res.send(user);
    } catch (error) {
        next(error);
    }
};

// export const getUserBySessionToken = async (req: Request, res: Response, next: NextFunction) => {
//     const sessionToken = req.params.sessionToken
//     try {
//         const session = await User.findOne({ 'authentication.sessionToken': sessionToken })
    
//   } catch (error) {
    
//   }
// }
