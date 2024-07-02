import express from 'express'
import {UploadProduct} from '../controllers/product.js'
import { authToken } from '../middleware/authtoken.js';
const router=express.Router();

router.post('/product/upload-product',authToken,UploadProduct)

export default router