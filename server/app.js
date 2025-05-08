import express from 'express'
import cors from 'cors'

import helmet from 'helmet'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    credentials:true,
    origin : process.env.CLIENT_URL
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet({
    crossOriginResourcePolicy:false
}))
import userRouter from './src/routes/user.route.js'



app.use("/api/v1/users",userRouter)

export default app