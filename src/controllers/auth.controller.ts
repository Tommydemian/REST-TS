import { Request, Response, NextFunction } from 'express'
import { getUserByEmail } from './user.controller'

export const registration = async(
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
        try {
            const { username, email, password } = req.body;
            // make sure every field is being sent
            if (!username || !email || !password) {
                return res.sendStatus(400)
            }
            const existingUser = await getUserByEmail 

            // case where existingUser exists
            if (existingUser) {
                return res.sendStatus(400)
            }
            
            

        } catch (error:any) {
            console.error(error.message);
            res.sendStatus(400);
        }
}