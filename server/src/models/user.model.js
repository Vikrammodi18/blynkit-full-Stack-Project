import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const {Schema} = mongoose;
const userSchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,

    },
    avatar:{
        type:String,
        default:""
    },
    mobile:{
        type:Number,
        default: null
    },
    refreshToken:{
        type:String,
        default:""
    },
    verifyEmail:{
        type:Boolean,
        default:false
    },
    lastLoginDate:{
        type:Date
    },
    status:{
        type: String,
        enum:["Active",'Inactive',"Suspended"],
        default:'Active'
    },
    address:[
        {
            type: Schema.Types.ObjectId,
            ref: "Address"
        }
    ],
    shoppingCart:[{
        type: Schema.Types.ObjectId,
        ref: "Cart"
    }],
    orderHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Order"
    }],
    forgotPasswordOTP:{
        type:String,
        default: ""
    },
    forgotPasswordExpiry:{
        type:Date,

    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER"
    }
    
},{timestamps:true})
userSchema.pre("save",async function(next){
    if(! this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password,10)
    next()
})
const User = mongoose.model("User",userSchema)

export default User