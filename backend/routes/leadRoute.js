import express from 'express'
import {authMiddleware} from '../middleware/authMiddleware.js'
import { leadHandler } from '../controllers/leadController.js'


const router = express.Router()



router.put("/update/:id",authMiddleware,leadHandler)

export default router