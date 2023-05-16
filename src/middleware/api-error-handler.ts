import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger'
import { CustomApiError } from '../error/CustomApiError';

// given the fact that there is 4 parameters express knows it's an error handler middleware
export const apiErrorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
    // in prod dont use console.error because it's not async
    // console.error(err.message);
    logger.error(err.message)

    if (err instanceof CustomApiError) {
        res.status(err.statusCode).send(err.message)
        return 
    }

    res.status(500).send('something went wrong')
}