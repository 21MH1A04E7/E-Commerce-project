import mongoose from "mongoose";
const mongooseSchema=new mongoose.Schema({
    productName: {
        type:String,
        required:true
    },
    brandName:{
        type:String,
        required:true
    },
    productCategory:{
        type:String,
    },
    productPrice:{
        type:Number,
        required:true
    },
    productImage:{
        type:Array,
        required:true,
        default:[]
    },
    productSelling:{
        type:Number,
        required:true
    },
    productQuantity:{
        type:Number
    },
    productDescription:{
        type:String,
    },
},{timestamps:true})
const Product=mongoose.model("Product",mongooseSchema);
export default Product;