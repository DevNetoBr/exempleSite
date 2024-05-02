import { Router } from 'express';
import { getPassword } from '../controllers/home.js';
const router = Router();

router.get('/', getPassword);

export default router;
