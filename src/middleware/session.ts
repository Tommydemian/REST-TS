import { Request, Response, NextFunction } from "express";
import { verifyToken } from '../utils/handlejwt'

export const checkSession = (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
  try {
    const bearerToken = req.headers.authorization || null;
    const jwt = bearerToken.split(' ')[1]
    const isValid = verifyToken(jwt)
    if (!isValid) return res.status(401).send('You dont hae a valid token')
    next();
  } catch (error: any) {
    res.status(400);
    res.send("invalid session");
  }
};
