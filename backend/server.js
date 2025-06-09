import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import authRoutes from './routes/userRoute.js'
import dashboardRoute from './routes/dashboardRoute.js'

const app = express()
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 3000
connectDB()

app.use('/api/auth',authRoutes)
app.use('/api/dashboard',dashboardRoute)

app.listen(PORT,() => {
    console.log(`app is running at port ${PORT}`)
})
