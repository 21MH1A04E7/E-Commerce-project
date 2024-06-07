import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { handleError } from "../utills/error.js";

export const authToken = async (req, res, next) => {
  try {
    const token = req.cookies?.access_token;
    if (!token) {
      return next(handleError(401, "User not Logged in"));
    }
    jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          data: [],
          statusCode: 401,
          success: false,
          message: err.message,
        });
      }
      req.user = decoded;
      next();
    });
  } catch (err) {
    return res.status(401).json({
      data: [],
      statusCode: 401,
      success: false,
      message: err.message,
    });
  }
};
