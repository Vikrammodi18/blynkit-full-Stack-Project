import mongoose from 'mongoose'
const {Schema} = mongoose
const cartSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    productId:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        default:1
    }
},{timestamps:true})

const Cart = mongoose.model("Cart",cartSchema)
export default Cart