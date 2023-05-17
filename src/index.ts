import express from 'express';
import http from 'http';
import cors from 'cors'
// types
import { AddressInfo } from 'net';
// utils functions: 
import { connectDb } from './utils/connectDb';
import { logger } from './utils/logger';
// routes:
import itemRouter from './routes/item.router';
import authRoutes from './routes/auth.router';
import orderRoutes from './routes/order.route';
// middleware:
import { apiErrorHandler } from './middleware/api-error-handler'

const PORT = process.env.PORT || 4545

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiErrorHandler)

app.use('/items', itemRouter);
app.use('/auth', authRoutes);
app.use('/order', orderRoutes);


const server = http.createServer(app);

server.listen(PORT, () => {
    const { port } = server.address() as AddressInfo;
    logger.info(`listening on http://localhost:${port}`); 
    
    connectDb()
})



