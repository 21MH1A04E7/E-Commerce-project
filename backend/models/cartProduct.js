import mongoose from "mongoose";

const cartProductShema = new mongoose.Schema(
  {
    productId: {
      ref: "Product",
      type: String,
    },
    quantity: Number,
    userId: String,
  },
  { timestamps: true }
);

const addToCardProduct = mongoose.model("cartProduct", cartProductShema);
export default addToCardProduct;
