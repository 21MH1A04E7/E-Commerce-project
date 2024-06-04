import mongoose from "mongoose";

export const DatabaseConnection=async(url)=>{
    await mongoose.connect(url)
}