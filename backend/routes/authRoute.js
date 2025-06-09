import express from 'express'
import { signinHandler, signupHandler } from '../controllers/authController.js'

const router = express.Router()

router.post("/signup",signupHandler) // This is for Admin signup
router.post("/signin",signinHandler) // This is for Admin signin

export default router