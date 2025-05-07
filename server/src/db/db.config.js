import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

if(! process.env.MONGO_URL){
    throw new Error("please provide mongodb_url")
}
const connectDB = async ()=>{
    try {
        const response = await mongoose.connect(`${process.env.MONGO_URL}/e-commerce`)
        console.log("connection successfully: ",response.connection.host)
    } catch (error) {
        console.error(error.message)
    }
}
export default connectDB