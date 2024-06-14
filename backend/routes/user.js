import express from 'express'
import { authToken } from '../middleware/authtoken.js';
import { GetAlluser } from '../controllers/user.js'

const router=express.Router()

router.get('/user/all-user',authToken,GetAlluser)

export default router