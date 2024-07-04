import React, { useState, useEffect } from "react";
import Api from "../common/url.js";
import { Link } from "react-router-dom";

function CategoryListProduct() {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchCategoryProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(Api.CategoryProduct.url);
      const dataResponse = await response.json();
      if (dataResponse.success) {
        setCategoryProduct(dataResponse.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const categoryLoading = new Array(13).fill(null);
  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-4 justify-between overflow-scroll scrollbar-none">
        {loading
          ? categoryLoading.map((el, index) => {
              return (
                <div
                  className="h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse"
                  key={"categoryLoading" + index}
                ></div>
              );
            })
          : categoryProduct.map((product, index) => {
              return (
                <Link
                  to={"/category-product/" + product?.productCategory}
                  key={index}
                  className="cursor-pointer"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
                    <img
                      src={product?.productImage[0]}
                      alt={product?.categoryProduct}
                      className="h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
                    />
                  </div>
                  <p className="text-center text-sm md:text-base uppercase">
                    {product?.productCategory}
                  </p>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default CategoryListProduct;
