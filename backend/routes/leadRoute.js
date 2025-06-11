import express from 'express'
import {authMiddleware} from '../middleware/authMiddleware.js'
import { getAllLeads, leadHandler } from '../controllers/leadController.js'


const router = express.Router()



router.put("/update/:id",authMiddleware,leadHandler)
router.get("/getallleads",getAllLeads)

export default router