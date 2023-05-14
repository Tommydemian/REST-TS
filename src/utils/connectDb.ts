import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { logger } from './logger'

dotenv.config()

export const connectDb = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        logger.info('connected to MONGODB database');
    }) 
    .catch(err => {
        logger.error(err);
        process.exit(1);
    }); 
}