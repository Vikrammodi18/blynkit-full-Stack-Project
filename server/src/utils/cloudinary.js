// Require the cloudinary library
// const cloudinary = require('cloudinary').v2;
import dotenv from 'dotenv'
dotenv.config()
import {v2 as cloudinary} from 'cloudinary'

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});


const uploadImageOnCloudinary = async(path)=>{
    const buffer = Buffer.from(await path.arrayBuffer())
    const uploadImage = await new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream({folder: "blynkit"},(error,uploadResult)=>{
            return resolve(uploadResult)
        }).end(buffer)
    })
    return uploadImage
}

export default uploadImageOnCloudinary
