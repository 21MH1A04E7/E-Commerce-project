import User from '../models/user.js'

export const GetAlluser = async (req, res) => {
    try {
        const alluser=await User.find({ _id: { $ne: req.user._id} })
        return res.json(alluser)
    } catch (err) {
      console.error("Internal server error in GetAlluser", err);
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Internal server error",
      });
    }
  };

  export const updateUser=async(req,res)=>{
    try{
      const {userId,email,username,role}=req.body
      console.log(userId)
      const currUserId=req.user._id
      const admine=await User.findById(currUserId)
      if(admine.role!='ADMINE'){
        return res.status(401).json({
          success: false,
          statusCode: 401,
          message: "Only admine can modife ",
        });
      }
      const response = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            email: email,
            username: username,
            role: role.toUpperCase(),
          },
        },
        { new: true }
      );
      if(!response){
        return res.status(404).json({
          success: false,
          statusCode: 404,
          message: "User not found",
        });
      }
      return res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'User updated successfully',
        data: response,
      });

    }catch(err){
      console.error("Internal server error in GetAlluser", err);
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Internal server error",
      });
    }
  }
  
