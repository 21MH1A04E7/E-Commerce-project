import React, { useContext } from "react";
import { changeCurrency } from "../solver/changeCurrency.js";
import { handleAddToCart } from "../solver/addtocart.js";
import AppContext from "../context/index.js";
import { scrollTop } from "../solver/scrollTop.js";
import { Link } from "react-router-dom";

function VerticalCard({ loading, data = [] }) {
  const loadingList = new Array(13).fill(null);
  const { fetchUserAddToCart } = useContext(AppContext);

  const fetchhandleAddToCart = async (e, id) => {
    await handleAddToCart(e, id);
    await fetchUserAddToCart();
  };
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,320px))] sm:grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-center md:justify-between gap-1 md:gap-4 overflow-scroll scrollbar-none transition-all">
        {loading
          ? loadingList.map((product, index) => {
              return (
                <div
                  key={index}
                  className="w-full min-w-[250px] max-w-[250px] sm:min-w-[280px]  md:min-w-[320px] sm:max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow"
                >
                  <div className="bg-slate-200 h-48 p-4 min-w-[250px] sm:min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
                  <div className="p-4 grid w-full gap-2">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full"></h2>
                    <p className="capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full"></p>
                    <div className="flex gap-3 w-full">
                      <p className="text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full"></p>
                      <p className="text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full"></p>
                    </div>
                    <button className="text-sm  text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse"></button>
                  </div>
                </div>
              );
            })
          : data.map((product, index) => {
              return (
                <Link
                  key={index + product?.productName}
                  to={"/product/" + product?._id}
                  className="w-full min-w-[250px] max-w-[250px] sm:min-w-[280px]  md:min-w-[320px] sm:max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow-xl m-1 sm:m-2"
                  onClick={scrollTop}
                >
                  <div className="bg-slate-200 h-40 sm:h-48 p-2 sm:p-4 min-w-[250px] sm:min-w-[280px] md:min-w-[145px] flex justify-center items-center">
                    <img
                      src={product.productImage[0]}
                      className="object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"
                    />
                  </div>
                  <div className="p-4 grid">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                      {product?.productName}
                    </h2>
                    <p className="capitalize text-slate-600">
                      {product?.productCategory}
                    </p>
                    <div className="flex gap-3">
                      <p className="text-green-600 font-medium">
                        {changeCurrency(product?.productSelling)}
                      </p>
                      <p className="text-red-500 line-through">
                        {changeCurrency(product?.productPrice)}
                      </p>
                    </div>
                    <button
                      className=" flex justify-center items-center text-sm bg-blue-600 hover:bg-blue-700 text-white sm:px-3 py-0.5 rounded-full"
                      onClick={(e) => fetchhandleAddToCart(e, product?._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default VerticalCard;
