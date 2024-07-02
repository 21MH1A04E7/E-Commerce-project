import User from '../models/user.js'   

export const checkAdmin=async(userId)=>{
    const user=await User.findById(userId)
    console.log(user.role)
    if(user.role==="ADMINE"){
        return true;
    }else{
        return false;
    }
}