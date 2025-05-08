import dotenv from 'dotenv'
dotenv.config()
import app from './app.js'
import connectDB from './src/db/db.config.js'


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