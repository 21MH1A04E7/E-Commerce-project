import addToCardProduct from "../models/cartProduct.js";

export const addToCartController = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentUser = req.user._id;
    // console.log("userid", req.user._id);

    const isProductAvailable = await addToCardProduct.findOne({ productId });

    // console.log("isProductAvailabl   ", isProductAvailable);

    if (isProductAvailable) {
      return res.json({
        message: "Already exits in Add to cart",
        success: false,
        statusCode: 404,
        error: true,
      });
    }

    const payload = {
      productId: productId,
      quantity: 1,
      userId: currentUser,
    };

    const newAddToCart = new addToCardProduct(payload);
    const saveProduct = await newAddToCart.save();

    return res.json({
      data: saveProduct,
      message: "Product Added in Cart",
      success: true,
      statusCode: 200,
      error: false,
    });
  } catch (err) {
    console.log("internal server in add to card");
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
};
export const countProductInCard = async (req, res) => {
  try {
    const currentUser = req.user._id;
    const count = await addToCardProduct.countDocuments({
      userId: currentUser,
    });
    return res.json({
      data: {
        count: count,
      },
      message: "ok",
      error: false,
      success: true,
      statusCode: 200,
    });
  } catch (err) {
    console.log("internal server in add to card");
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
      statusCode: 505,
    });
  }
};

export const addToCardProductView=async(req,res)=>{
  try{
    const currentUser=req.user._id
    const products=await addToCardProduct.find({userId:currentUser}).populate("productId")
    return res.json({
      data : products,
      message : "ok",
      success : true,
      statusCode : 200
    })
  }catch(err){
    console.log("internal server in add to card view");
    res.json({
      message : err?.message || err,
      error : true,
      success : false
    })
  }
}
export const updateAddToCartProduct = async(req,res)=>{
  try{
      const currentUserId = req.user_id
      const addToCartProductId = req?.body?._id

      const qty = req.body.quantity

      const updateProduct = await addToCardProduct.updateOne({_id : addToCartProductId},{
          ...(qty && {quantity : qty})
      })

      res.json({
          message : "Product Updated",
          data : updateProduct,
          error : false,
          success : true,
          statusCode:200
      })

  }catch(err){
    console.log("internal server in update to cart");
      res.json({
          message : err?.message || err,
          error : true,
          success : false
      })
  }
}