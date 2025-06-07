import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'


const app = express()
const router = express.Router()

app.use(authMiddleware)

router.post("/creatinglead",leadHandler)