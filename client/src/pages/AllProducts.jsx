import React, { useState } from "react";
import UploadProduct from "../Components/UploadProduct.jsx";
import { set } from "mongoose";

function AllProducts() {
  const [showUploadProduct,setShowUploadProduct]=useState(false);
  return (
    <div>
      <div className="bg-slate-100 p-2 px-4 flex justify-between items-center rounded-md shadow-lg">
        <h2 className="font-bold text-xl text-gray-700">All Products</h2>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md hover:shadow-lg transition duration-300" 
        onClick={()=>setShowUploadProduct(true)}>
          Upload Product
        </button>
      </div>
      {/*upload product */}
      {
        showUploadProduct&&(
        <UploadProduct onClose={()=>setShowUploadProduct(false)}/>
      )
      }
    </div>
  );
}

export default AllProducts;
