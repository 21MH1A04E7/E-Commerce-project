import express from 'express'
import {UploadProduct,getProduct,updateProduct,deleteProduct} from '../controllers/product.js'
import { authToken } from '../middleware/authtoken.js';
const router=express.Router();

router.post('/product/upload-product',authToken,UploadProduct)
router.get('/product/get-product',getProduct)
router.post('/product/update-product',authToken,updateProduct)
router.post('/product/delete-prodcut/:id',authToken,deleteProduct)
export default router