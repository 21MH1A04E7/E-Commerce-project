import User from '../models/user.js'

export const GetAlluser = async (req, res) => {
    try {
        console.log(req.user._id)
        const alluser=await User.find()
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
  