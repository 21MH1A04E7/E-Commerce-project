import express from 'express';
import { userSignup,userLogin,userLogout} from '../controllers/auth.js';
import {userDetails} from '../controllers/userDetails.js'
import { authToken } from '../middleware/authtoken.js';

const router = express.Router();


router
.post('/auth/signup', userSignup)
.post('/auth/login',userLogin)
.post('/auth/logout',userLogout)
.get('/auth/user-details',authToken,userDetails)

export default router;
