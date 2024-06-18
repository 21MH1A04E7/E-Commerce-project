import express from 'express'
import { authToken } from '../middleware/authtoken.js';
import { GetAlluser,updateUser } from '../controllers/user.js'

const router=express.Router()

router.get('/user/all-user',authToken,GetAlluser)
router.post('/user/update-user',authToken,updateUser)

export default router