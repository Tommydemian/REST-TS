import { Request, Response, NextFunction } from 'express'
import { registerNewUser, loginUser } from '../services/auth.service'

const registerCtrl = async (req:Request, res:Response) => {
  try {
    const newUser = await registerNewUser(req.body)
    return res.send(newUser)
  } catch (error:any) {
    console.error(error.message);
  }
}

const loginCtrl = async (req:Request, res:Response) => {
    try {
        const {email, password} = req.body
        const logUser = await loginUser({ email, password })   
        return res.send(logUser) 
    } catch (error) {
        console.error(error.message);
    }
}

export { registerCtrl, loginCtrl } 