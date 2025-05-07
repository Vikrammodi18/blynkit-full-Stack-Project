import mongoose from 'mongoose'
const {Schema} = mongoose;
const addressSchema  = newSchema({
    addressLine:{
        type:String,
        default:"",
        required: true,

    },
    city:{
        type:String,
        required: true,
        default: "",
        lowercase:true,
    },
    state:{
        type:String,
        required:true,
        default: "",
        lowercase:true,
    },
    pincode:{
        type:String,
        required:true,
        default: "",

    },
    country:{
        type:String,
        required:true,
        default: "",
    },
    mobile:{
        type:Number,
        required:true,

    },
    status:{
        type:Boolean,
        default: true,
    }
},{timestamps: true})

const Address = mongoose.model("Address",addressSchema)

export default Address