import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED",connection.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}