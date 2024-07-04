import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import AdminEditProduct from "./AdminEditProduct.jsx";
import { changeCurrency } from "../solver/changeCurrency.js";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Api from "../common/url.js";

function AdminProductCards({ data, fetchAllProducts }) {
  const [editproduct, SetEditproduct] = useState(false);

  // Check if data and productImage array exist before accessing index 0
  const imageUrl = data && data.productImage && data.productImage[0];
  const handleDeleteProduct = async () => {
    console.log("hi");
    console.log(data._id);
    try {
      const response = await fetch(`${Api.DeleteProduct.url}/${data._id}`, {
        method: `${Api.DeleteProduct.method}`,
        credentials: "include",
      });
      const responseData = await response.json();
      if (responseData.success) {
        toast.success(responseData.message);
        fetchAllProducts();
      } else {
        toast.error(responseData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
            <p className="font-semibold">
              {changeCurrency(data?.productSelling)}
            </p>

            <div className="flex justify-between items-center">
              <div className="text-2xl text-red-600 cursor-pointer hover:text-red-400 active:opacity-70">
                <MdDelete onClick={handleDeleteProduct} />
              </div>
              <div
                className="w-fit ml-auto p-2 bg-green-100 hover:bg-blue-500 rounded-full hover:text-white cursor-pointer"
                onClick={() => SetEditproduct(true)}
              >
                <FiEdit className="text-lg" />
              </div>
            </div>
          </div>
        </div>
        {editproduct && (
          <AdminEditProduct
            ProductData={data}
            onClose={() => SetEditproduct(false)}
            fetchAllProducts={fetchAllProducts}
          />
        )}
      </div>
    </>
  );
}

export default AdminProductCards;
