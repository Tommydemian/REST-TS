import { Request, Response, NextFunction } from 'express'
import { registerNewUser, loginUser } from '../services/auth.service'
import { createCustomError } from '../error/CustomApiError'

const registerCtrl = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const newUser = await registerNewUser(req.body)
    if (!newUser) return next(createCustomError(500, 'Failed to register new user'))
    return res.send(newUser)
  } catch (error:any) {
    next(error)
  }
}

const loginCtrl = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {email, password} = req.body
        if (!email || !password) return next(createCustomError(400, 'Please provide email and password'));
        const logUser = await loginUser({ email, password })
        if (!logUser) return next(createCustomError(401, 'Invalid email or password'))   
        return res.send(logUser) 
    } catch (error) {
        next(error)
    }
}

export { registerCtrl, loginCtrl } 