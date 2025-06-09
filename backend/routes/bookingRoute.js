import express from 'express';
import { bookingHandler } from '../controllers/bookingController.js';

const router = express.Router()

router.post('/booking',bookingHandler)


export default router