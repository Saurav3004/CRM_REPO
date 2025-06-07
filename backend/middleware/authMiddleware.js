import jwt from 'jsonwebtoken'
import { User } from '../models/user.js';

const middleware = async (req,res,next) => {
    
        let token = req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(401).json({
                message:"You are not authorized"
            })
        }
        try{

            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            const user = await User.findById(decoded.id).select("-password")

            req.user = user
            next()

    } catch (error) {
        console.log("Not authorized")
    }
}

export default middleware