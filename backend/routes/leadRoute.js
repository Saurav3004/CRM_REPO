import express from 'express'
import {authMiddleware} from '../middleware/authMiddleware.js'
import { getAllLeads, importExcel, leadHandler } from '../controllers/leadController.js'
import upload from '../uploads/multer.js'


const router = express.Router()



router.put("/update/:id",authMiddleware,leadHandler)
router.get("/getallleads",getAllLeads)
router.post("/import-excel", upload.single("file"), importExcel);

export default router