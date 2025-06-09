import jwt from 'jsonwebtoken'

export const generateToken = (userId) => {
    const token = jwt.sign({id:userId._id},process.env.JWT_SECRET_KEY,{expiresIn:"3d"})
    return token
}