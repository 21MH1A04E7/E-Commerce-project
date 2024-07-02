import express from 'express'
import {UploadProduct,getProduct} from '../controllers/product.js'
import { authToken } from '../middleware/authtoken.js';
const router=express.Router();

router.post('/product/upload-product',authToken,UploadProduct)
router.get('/product/get-product',getProduct)

export default router