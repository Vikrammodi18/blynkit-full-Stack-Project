import mongoose from 'mongoose'
const {Schema} = mongoose

const subCategorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:[{
        type: Schema.Types.ObjectId,
        ref:"Category"
    }]
},{timestamps:true})

const SubCategory = mongoose.model("SubCategory",subCategorySchema)
export default SubCategory