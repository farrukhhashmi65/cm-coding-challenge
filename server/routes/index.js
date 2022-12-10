import express from 'express';
import membersRoutes from './members.js';

let router = express.Router()

// use members route
router.use(membersRoutes) 

export default router;





