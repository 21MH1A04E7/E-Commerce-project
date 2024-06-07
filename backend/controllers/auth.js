import { handleError } from "../utills/error.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const userSignup = async (req, res, next) => {
  try {
    const { username, email, password, profilepic, confirmpassword } = req.body;

    const userexit = await User.findOne({ email });
    if (userexit) return next(handleError(404, "user already exits"));
    if (!username) {
      return next(handleError(404, "Please enter username"));
    }
    if (!email) {
      return next(handleError(404, "Please enter email"));
    }
    if (!password || !confirmpassword) {
      return next(
        handleError(404, "Please enter password and confirm password")
      );
    }
    if (password !== confirmpassword) {
      return next(handleError(404, "Passwords do not match"));
    }

    //hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashpassword,
      profilepic,
    });

    const response = await newUser.save();
    // console.log(response.password);
    const { password: pass, ...rest } = response._doc;
    return res.status(201).json({
      success: true,
      statusCode: 201,
      data: rest,
    });
  } catch (err) {
    console.error("Internal server error in signup", err);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: err.message,
    });
  }
};

//login funtionality
export const userLogin = async (req, res, next) => {
  try {
    //vallidation
    const { email, password } = req.body;
    if (!email) return next(handleError(404, "pls inter email"));
    if (!password) return next(handleError(404, "pls inter password"));

    const userexit = await User.findOne({ email });
    if (!userexit) return next(handleError(404, "user not found"));

    const match = bcrypt.compareSync(password, userexit.password);
    if (!match) return next(handleError(401, "wrong credential!"));
    const payload = {
      _id: userexit._id,
    };
    //generate token
    const token =jwt.sign(payload, process.env.SECRETKEY, {
      expiresIn: "12h",
    });
    // console.log(token);
    const { password: pass,createdAt:cre,updatedAt:upda, ...rest } = userexit._doc;
    return res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      })
      .json({
        success: true,
        statusCode: 200,
        data: rest,
        message:'login successfull'
      });
  } catch (err) {
    console.error("Internal server error in signup", err);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: err.message,
    });
  }
};

//logout
export const userLogout = async (req, res, next) => {
  try {
    await res.clearCookie("access_token");
    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "userlogout sucessfull",
      data:[]
    });
  } catch (err) {
    console.error("Internal server error in signup", err);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: err.message,
    });
  }
};
