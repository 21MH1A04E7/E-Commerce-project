import { handleError } from "../utills/error.js";
import Product from "../models/product.js";
import {checkAdmin} from '../solve/adminPermission.js'

export const UploadProduct=async(req,res,next)=>{
    try{
       const data=req.body;
    //    console.log(data)
       const userid=req.user._id;
       //console.log(userid)
       //check if the user is an admin
       if(!await checkAdmin(userid)){
        return next(handleError("400","only admin can upload the product"))
       }
       if(!data.productName||!data.brandName ||!data.productCategory ||!data.productPrice||!data.productImage||!data.productSelling){
            return next(handleError(400, "Please provide all required fields"));
       }
       //save the product to the database
       const ProductData=new Product(data);
       const uploadedproduct=await ProductData.save();
       if(!uploadedproduct) return next(handleError(400,"product not uploaded"));
       return res.status(201).json({
            success: true,
            statusCode: 201,
            data: uploadedproduct,
            message:"Product uploaded sucessfully!"
        });

    }catch(err){
        console.log("Internal server error in signup", err);
        return res.status(500).json({
          success: false,
          statusCode: 500,
          message: err.message,
        });
    }
}
export const getProduct=async(req,res)=>{
    try{
        //code to get all products
    const allProdusts=await Product.find().sort({createaAt:-1})
    return res.json({
        success:true,
        statusCode:200,
        data:allProdusts,
        message:"All products fetched successfully!"
    })
    }catch(err){
        console.log("Internal server error in getproduct", err);
        return res.status(500).json({
          success: false,
          statusCode: 500,
          message: err.message||err,
        });
    }

}