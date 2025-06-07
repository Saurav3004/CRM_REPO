import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import authRoutes from './routes/userRoute.js'

const app = express()
app.use(express.json())
dotenv.config()
connectDB()

app.use('/api/auth',authRoutes)

app.listen(PORT,() => {
    console.log(`app is running at port ${PORT}`)
})
