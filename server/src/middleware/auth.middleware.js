import dotenv from 'dotenv'
dotenv.config()
import ApiError from "../utils/ApiError.js"
import jwt from 'jsonwebtoken'
import User from "../models/user.model.js"
import asyncHandler from '../utils/asyncHandler.js'

const verifyJWT = asyncHandler( async (req,res,next)=>{
    const token = req?.cookies?.accessToken;
    
    if(! token){
        throw new ApiError(403,"unauthorise access")
    }
    const decodedToken =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
    const user = await User.findById(decodedToken?._id)
    if (!user){
        throw new ApiError(404,"user not found")
    }
    req.user = user
    next()
})
export default verifyJWT