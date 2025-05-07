import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import connectDB from './src/db/db.config.js'
const app = express()

app.use(cors({
    credentials:true,
    origin : process.env.CLIENT_URL
}))
app.use(cookieParser())
app.use(express.json())

app.use(helmet({
    crossOriginResourcePolicy:false
}))
app.get("/",(req,res)=>{
    res
    .status(200)
    .json({"name":"vikram",
        "at":"8000"
    })
})
const PORT = 8000 || process.env.PORT
connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`app is running at ${PORT}`)
    })

})
.catch((err)=>
{
    console.log("mongodb connection failed",err)
})