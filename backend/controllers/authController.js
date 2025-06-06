export const signupHandler = async (req,res) => {
    try {
        const {email,password,fullname,phone_number} = req.body
        if(!email || !password || !fullname || !phone_number){
            return res.json({
                message:"Please "
            })
        }
    } catch (error) {
        console.error(error)
    }
}