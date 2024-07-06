import express from "express";
import {
  UploadProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getOneOneProductByCategory,
  getAllProductByCategory,
  getProductDetails,
} from "../controllers/product.js";
import { authToken } from "../middleware/authtoken.js";
const router = express.Router();

router.post("/product/upload-product", authToken, UploadProduct);
router.get("/product/get-product", getProduct);
router.post("/product/update-product", authToken, updateProduct);
router.post("/product/delete-prodcut/:id", authToken, deleteProduct);
router.get("/product/get-product-by-category", getOneOneProductByCategory);
router.post("/product/get-category-wise-product", getAllProductByCategory);
router.post("/product/get-product-details", getProductDetails);
router.post("/product/add-to-card",)
export default router;
