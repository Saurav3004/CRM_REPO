import { User } from "../models/user.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { generateToken } from "../utility/generateToken.js"


export const signupHandler = async (req,res) => {
    try {
        const {email,password,fullname,phone_number} = req.body
        if(!email || !password || !fullname || !phone_number){
            return res.json({
                message:"All fields are required "
            })
        }
        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.json({
                message:"User already registered"
            })
        }

        const hashedPassword = bcryptjs.hash(password,10)


        const user = await User.create({
            email,
            password:hashedPassword,
            fullname,
            phone_number
        })

       await user.save()

       generateToken(user._id)

       return res.status(200).json({
        message:"User registered successfully",
        token:token
       })


    } catch (error) {
        console.error(error)
    }
}