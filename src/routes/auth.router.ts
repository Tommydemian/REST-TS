import { Router } from 'express';
const router = Router();

import { loginCtrl, registerCtrl } from '../controllers/auth.controller'

// /register 
router.post('/register', registerCtrl);
router.post('/login', loginCtrl);

export default router;
