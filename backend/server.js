import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import authRoutes from './routes/authRoute.js'
import dashboardRoute from './routes/dashboardRoute.js'
import bookingRoute from './routes/bookingRoute.js'
import leadRoute from './routes/leadRoute.js'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000
connectDB()

app.use('/api/auth',authRoutes)
app.use('/api/dashboard',dashboardRoute)
app.use('/api/ticket',bookingRoute)
app.use('/api/leads',leadRoute)

app.listen(PORT,() => {
    console.log(`app is running at port ${PORT}`)
})
