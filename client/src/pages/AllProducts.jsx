import React, { useState, useEffect } from "react";
import UploadProduct from "../Components/UploadProduct.jsx";
import Api from "../common/url.js";
import AdminProductCards from "../Components/AdminProductCards.jsx";
import { set } from "mongoose";

function AllProducts() {
  const [showUploadProduct, setShowUploadProduct] = useState(false);
  const [allProductsData, setAllProductData] = useState([]);
  const fetchAllProducts = async () => {
    try {
      const response = await fetch(Api.getAllProduct.url);
      const productData = await response.json();
      if (productData.success) {
        setAllProductData(productData?.data || []);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div>
      <div className="bg-slate-100 p-2 px-4 flex justify-between items-center rounded-md shadow-lg">
        <h2 className="font-bold text-xl text-gray-700">All Products</h2>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md hover:shadow-lg transition duration-300"
          onClick={() => setShowUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>

      {/*display products */}
      <div className="flex items-center flex-wrap gap-3 py-4 h-[calc(100vh-190px)] overflow-y-scroll bg-slate-100">
        {allProductsData.map((product, index) => {
          return (
            <AdminProductCards data={product} key={index+'allproucts'} fetchAllProducts={fetchAllProducts}/>
          );
        })}
      </div>
      {/*upload product */}
      {showUploadProduct && (
        <UploadProduct onClose={() => setShowUploadProduct(false)} fetchAllProducts={fetchAllProducts}/>
      )}
    </div>
  );
}

export default AllProducts;
