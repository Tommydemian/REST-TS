import { Router } from 'express';
import { addItem, getItems, getItem, updateItem, removeItem } from '../controllers/item.controller'

const router =  Router();

router.route('/')
.get(getItems)
.post(addItem)

router.route('/:id')
.get(getItem)
.patch(updateItem)
.delete(removeItem)

export default router;