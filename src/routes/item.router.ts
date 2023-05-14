import { Router } from 'express';
import { addItem } from '../controllers/item.controller'

const router =  Router();

router.route('/')
.get()
.post(addItem)

export default router;