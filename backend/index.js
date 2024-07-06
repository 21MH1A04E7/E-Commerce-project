import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { DatabaseConnection } from './config/db.js'
dotenv.config()
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.js'
import UserRouter from './routes/user.js'
import ProductRouter from './routes/product.js'
import CardRouter from './routes/addtocard.js'

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

//router
app.use('/api',authRouter)
app.use('/api',UserRouter)
app.use('/api',ProductRouter)
app.use('/api',CardRouter)


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