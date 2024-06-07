import User from '../models/user.js'
export const userDetails=async (req,res,next)=>{
    try{
        const user=await User.findById(req.user._id)
        const {password:pass,...rest}=user._doc
        return res.status(200).json({
            success:true,
            statusCode:200,
            data:rest,
        })
    }catch(err){
        res.status(401).json({
            data:[],
            success:false,
            statusCode:401,
            message:err.message,
        })
    }
}