import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors'
// types
import { AddressInfo } from 'net';
// utils functions: 
import { connectDb } from './utils/connectDb';
import { logger } from './utils/logger';
// routes:
import healthCheckRoute from './routes/index'

const PORT = process.env.PORT || 4545

const app = express();

app.use(cors({
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());

app.use('/healthcheck', healthCheckRoute);

const server = http.createServer(app);

server.listen(PORT, () => {
    const { port } = server.address() as AddressInfo;
    logger.info(`listening on http://localhost:${port}`); 
    
    connectDb()
})


