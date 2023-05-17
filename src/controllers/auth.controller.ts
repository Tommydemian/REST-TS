import { Request, Response, NextFunction } from 'express'
import { registerNewUser, loginUser } from '../services/auth.service'
// errorHandler
import { createCustomError, CustomApiError } from '../error/CustomApiError'
// validation Schemas
import { loginSchema, registerSchema } from '../schemas/auth.schema'
import { logger } from '../utils/logger'


const registerCtrl = async (req:Request, res:Response, next:NextFunction) => {
  // validate schema against request
  const { error } = registerSchema.validate(req.body, {
    abortEarly: false
  })
  if(error){
    logger.error(error.details)
     next(createCustomError(400, 'All field must be valid'))
  } 

  try {
    const newUser = await registerNewUser(req.body)
    if (!newUser) return next(createCustomError(500, 'Failed to register new user'))
    return res.send(newUser)
  } catch (error:any) {
    next(error)
  }
}

const loginCtrl = async (req:Request, res:Response, next:NextFunction) => {
  const {error: reqError, value} = loginSchema.validate(req.body);
  if (reqError) {
    logger.error(reqError.details)
    // next(createCustomError(400, error.details))
    res.send(reqError.details) 
    // I dont know if user should recieve this error details[]
    return
  }
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