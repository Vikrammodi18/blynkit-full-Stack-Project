import dotenv from 'dotenv'
dotenv.config()
import User from '../models/user.model.js'
import asyncHandler from '../utils/asyncHandler.js'
import ApiError from '../utils/apiError.js'
import sendEmail from '../utils/sendEmail.js'
import verifyEmailTemplate from '../utils/emailTemplate/verifyEmailTemplate.js'
const registerUser = asyncHandler(async (req,res)=>{

    const {email,name,password} = req.body
    if([email,name,password].some((val)=> !val || val.trim()==="")){
        throw new ApiError(400,"email, name or password are required")
    }
    const alreadyRegistered  = await User.findOne({email})
    if(alreadyRegistered){
        throw new ApiError(400,"user already registered")
    }
    try {
        const register = await User.create({
            email,
            password,
            name
        })
        const verifyEmailUrl = `${process.env.CLIENT_URL}/verify-email?code=${register?._id}`
        const verifyEmail = await sendEmail(
            {
                sendTo:register.email,
                subject:"verify email",
                html: verifyEmailTemplate(
                    {
                        name:register.name,
                        url:verifyEmailUrl
                    }
                )
            }
            )
        return res
        .status(200)
        .json(
            new ApiResponse(200,register,"user registered successfully")
        )
    } catch (error) {
        throw new ApiError(500,error|| "something went wrong while registered user")
    }
    
})

export {registerUser}