import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import AdminEditProduct from "./AdminEditProduct.jsx";

function AdminProductCards({ data }) {
    const [editproduct,SetEditproduct]=useState(false)

  // Check if data and productImage array exist before accessing index 0
  const imageUrl = data && data.productImage && data.productImage[0];

  return (
    <>
    <div className="bg-white p-4 rounded-xl m-1 shadow-lg">
      <div className="w-40 ">
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={data?.productImage[0]}
            className="mx-auto object-fill h-full "
          />
        </div>
        <h1 className="text-ellipsis line-clamp-2">{data.productName}</h1>
        <div>
          <p className="font-semibold">{data?.productSelling}</p>

          <div className="w-fit ml-auto p-2 bg-green-100 hover:bg-blue-500 rounded-full hover:text-white cursor-pointer" onClick={()=>SetEditproduct(true)}>
            <FiEdit className="text-lg" />
          </div>
        </div>
      </div>
      {
        editproduct&&(
            <AdminEditProduct ProductData={data} onClose={()=>SetEditproduct(false)}/>
        )
      }
    </div>
    
    </>
  );
}

export default AdminProductCards;
