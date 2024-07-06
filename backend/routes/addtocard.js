import express from "express";
import { authToken } from "../middleware/authtoken.js";

import {
  addToCartController,
  countProductInCard,
  addToCardProductView,
  updateAddToCartProduct,
  deleteAddToCartProduct,
} from "../controllers/addTocard.js";

const router = express.Router();

router.post("/Card/add-tocard", authToken, addToCartController);
router.get("/Card/get-product-count", authToken, countProductInCard);
router.get("/Card/view-card-product", authToken, addToCardProductView);
router.post("/Card/update-card-product", authToken, updateAddToCartProduct);
router.post("/Card/delete-card-product", authToken, deleteAddToCartProduct);

export default router;
