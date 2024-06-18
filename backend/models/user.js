import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["GENERAL","ADMINE"],
        default:"GENERAL"
    },
    profilepic:{
        type:String,
    }

},{timestamps:true})

const User=mongoose.model("User",userSchema)
export default User