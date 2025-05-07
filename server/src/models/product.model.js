import mongoose from 'mongoose'
const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:Array,
        type:String,
    },
    category:[{
        type: Schema.Types.ObjectId,
        ref:"Category",
    }],
    subCategory:[{
        type: Schema.Types.ObjectId,
        ref: "SubCategory"
    }],
    unit:{
        type:String,
        default:"0",
        
    },
    stock:{
        type:Number,
        default:0,
        min:0,
    },
    price:{
        type:Number,
        required: true,

    },
    discount:{
        type:Number
    },
    description:{
        type:String,
        required:true,

    },
    moreDetails:{
        type:Object,
        default:{}

    },
    publish:{
        type:boolean,
    }
},{timestamps:true})

const Product = mongoose.model("Product",productSchema)
export default Product