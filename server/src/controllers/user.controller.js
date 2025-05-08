import dotenv from 'dotenv'
dotenv.config()
import User from '../models/user.model.js'
import asyncHandler from '../utils/asyncHandler.js'
import ApiError from '../utils/apiError.js'
import sendEmail from '../utils/sendEmail.js'
import verifyEmailTemplate from '../utils/emailTemplate/verifyEmailTemplate.js'
import ApiResponse from '../utils/apiResponse.js'
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
const verifyEmail = asyncHandler(async (req,res)=>{

    try {
        
        const {verifyCode} = req.body
        const user = await User.findById(new mongoose.Types.ObjectId(verifyCode))
        if(!user){
            throw new ApiError(400,"invalid code")
        }
        const updateVerifyEmail = await User.findByIdAndUpdate(user?._id,{
            $set:{
                verifyEmail:true
            }
        },
        {new :true})
        return res
        .status(200)
        .json(new ApiResponse(200,updateVerifyEmail,"email verified successfully"))
    } catch (error) {
        return res.status(500)
        .json(new ApiError(500,error.message))
    }
})
export {registerUser,
    verifyEmail
}