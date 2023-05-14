import { Router } from 'express';
import { checkSession } from '../middleware/session'
import { getItems } from '../controllers/order.controller'
const router = Router();

router.get('/', checkSession, getItems);

export default router;