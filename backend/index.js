import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { DatabaseConnection } from './config/db.js'
dotenv.config()
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.js'


const app=express()
DatabaseConnection(process.env.MONGO_URL)
.then(()=>{
    console.log('connected db')
})
.catch((err)=>{
    console.log(err.message)
})

app.use(cors({
    origin: 'http://localhost:5173', // Update to your front-end URL
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

app.use('/api',authRouter)


const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is listing on port no ${port}`)
})


//error middleware

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
});