import express from 'express';
import { confirmTicket, initiateBooking } from '../controllers/bookingController.js';

const router = express.Router()

router.post('/initiate-booking',initiateBooking)
router.post('/confirm',confirmTicket)


export default router