import { Request, Response, NextFunction } from "express";
import { verifyToken } from '../utils/handlejwt'
import { createCustomError } from "../error/CustomApiError";

export const checkSession = (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
  try {
    const bearerToken = req.headers.authorization || null;
    // extract the token from the request
    const jwt = bearerToken.split(' ')[1]
    const isUser = verifyToken(jwt)
    if (!isUser) {
      next(createCustomError(401, 'Invalid token'));
    }
    next();
  } catch (error: any) {
    next(error)
  }
};
