import jwt from 'jsonwebtoken';
import { Admin } from '../models/admin.js';

export const authMiddleware = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        console.log(decoded)

        const user = await Admin.findById(decoded.id).select("-password");

        console.log(user)

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("JWT Error:", error.message);
        res.status(401).json({ message: "You are not authorized" });
    }
}
