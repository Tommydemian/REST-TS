import express, { Response } from 'express';
import { logger } from './logger';
// TODO: Better error handling
export const handleHttp = (error: string, res: Response) => {
    logger.error(error)
    res.status(500), 
    res.send({error})
}