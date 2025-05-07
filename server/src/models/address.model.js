import {mongoose,Schema} from 'mongoose'

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

    }
},{timestamps: true})

const Address = mongoose.model("Address",addressSchema)

export default Address