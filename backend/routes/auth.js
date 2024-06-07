import express from 'express';
import { userSignup,userLogin,userLogout} from '../controllers/auth.js';

const router = express.Router();


router
.post('/auth/signup', userSignup)
.post('/auth/login',userLogin)
.post('/auth/logout',userLogout)

export default router;
