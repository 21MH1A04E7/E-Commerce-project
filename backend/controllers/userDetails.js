export const userDetails=async (req,res,next)=>{
    try{
        return res.status(200).json({
            success:true,
            statusCode:200,
            data:req.user,
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