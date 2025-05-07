import mongoose from 'mongoose'
const {Schema} = mongoose

const orderSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    orderId:{
        type:String,
        required:true,
        unique : true,

    },
    productId:{
        type: Schema.Types.ObjectId,
        ref:"Product"
    },
    productDetails:{
        name:String,
        image:Array
    },
    paymentId:{
        type:String,
    },
    paymentStatus:{
        type: String,
    },
    address:{
        type: mongoose.Types.ObjectId,
        ref:"Address"
    },
    subTotalAmount:{
        type:Number,
        default:0
    },
    totalAmount:{
        type:Number,

    },
    invoiceReceipt:{
        type: String,
    }
    
},{timestamps:true})

const Order = mongoose.model("Order",orderSchema)
export default Order