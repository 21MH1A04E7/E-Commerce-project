import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { DatabaseConnection } from './config/db.js'
dotenv.config()

const app=express()
DatabaseConnection(process.env.MONGO_URL)
.then(()=>{
    console.log('connected db')
})
.catch((err)=>{
    console.log(err.message)
})

app.use(cors())
app.use(express.json())

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is listing on port no ${port}`)
})

//error middleware

app.use((err,res,req,next)=>{
    res.status(err.statusCode||500).json({
        sucess:false,
        statusCode:err.statusCode||500,
        message:err.message||'internal server error'
    })
})