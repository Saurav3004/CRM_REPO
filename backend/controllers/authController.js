import bcryptjs from 'bcryptjs'
import { generateToken } from "../utility/generateToken.js"
import { Admin } from "../models/admin.js"


export const signupHandler = async (req,res) => {
    try {
        const {name,email,password} = req.body
        if(!email || !password || !name ){
            return res.json({
                message:"All fields are required "
            })
        }
        const existingUser = await Admin.findOne({email})

        if(existingUser){
            return res.json({
                message:"Admin already exist"
            })
        }

        const hashedPassword = await bcryptjs.hash(password,10)


        const admin = await Admin.create({
            name,
            email,
            password:hashedPassword
            
        })

       await admin.save()

       const token = generateToken(admin._id)

       return res.status(200).json({
        message:"Admin created successfully",
        token
       })


    } catch (error) {
        console.error(error)
    }
}

export const signinHandler = async (req,res) => {
    const {email,password} = req.body

    try {
        if(!email || !password){
            return res.json({
                message:"All fields are required"
            })
        }
    
        const adminExists = await Admin.findOne({email})
        console.log(adminExists)
    
        if(!adminExists){
            return res.json({
                message:"Invalid credentials"
            })
        }

        console.log( adminExists.password)
    
        const verifyPassword =  bcryptjs.compare(password,adminExists.password)
    
        if(!verifyPassword){
            return res.json({
                message:"Invalid credentials"
            })
        }
    
        const token = generateToken(adminExists)
    
        return res.status(200).json({
            message:"Login successfully",
            token
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}