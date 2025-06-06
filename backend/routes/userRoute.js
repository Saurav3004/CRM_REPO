import express from 'express'
import { signupHandler } from '../controllers/authController.js'

const router = express.Router()

router.post("/signup",signupHandler)