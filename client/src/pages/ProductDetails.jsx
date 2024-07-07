import React, { useState, useEffect, useCallback, useContext } from "react";
import Api from "../common/url.js";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { changeCurrency } from "../solver/changeCurrency.js";
import { CategroyWiseProductDisplay } from "../Components/CategroyWiseProductDisplay.jsx";
import AppContext from "../context/index.js";
import { handleAddToCart } from "../solver/addtocart.js";

function ProductDetails() {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    productCategory: "",
    productImage: [],
    productPrice: "",
    productSelling: "",
    productDescription: "",
  });

  const params = useParams();
  const [loading, setLoading] = useState(true);
  const productImageListLoading = new Array(4).fill(null);
  const [activeImage, setActiveImage] = useState("");
  const { fetchUserAddToCart } = useContext(AppContext);

  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const [zoomImage, setZoomImage] = useState(false);

  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(Api.GetProductDetails.url, {
      method: Api.GetProductDetails.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: params?.id,
      }),
    });
    setLoading(false);
    const dataReponse = await response.json();
    setData(dataReponse?.data);
    setActiveImage(dataReponse?.data?.productImage[0]);
  };
  // console.log("data", data);
  useEffect(() => {
    fetchProductDetails();
  }, [params]);
  const handleZoomImage = useCallback(
    (e) => {
      setZoomImage(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();
      // console.log("coordinate", left, top, width, height);

      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setZoomImageCoordinate({
        x,
        y,
      });
    },
    [zoomImageCoordinate]
  );
  const handleLeaveImageZoom = () => {
    setZoomImage(false);
  };
  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL);
  };
  const AddToCart = async (e, id) => {
    await handleAddToCart(e, id);
    await fetchUserAddToCart();
  };
  return (
    <div className="container mx-auto px-4 my-4 ">
      <div className="min-h-[200px] flex flex-col lg:flex-row gap-4">
        {/***product Image */}
        <div className="h-96 flex flex-col lg:flex-row-reverse gap-4">
          <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2">
            <img
              src={activeImage}
              className="h-full w-full object-scale-down mix-blend-multiply"
              onMouseMove={handleZoomImage}
              onMouseLeave={handleLeaveImageZoom}
            />

            {/**product zoom */}
            {zoomImage && (
              <div className="hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0">
                <div
                  className="w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150"
                  style={{
                    background: `url(${activeImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `${zoomImageCoordinate.x * 100}% ${
                      zoomImageCoordinate.y * 100
                    }% `,
                  }}
                ></div>
              </div>
            )}
          </div>

          <div className="h-full">
            {loading ? (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {productImageListLoading.map((el, index) => {
                  return (
                    <div
                      className="h-20 w-20 bg-slate-200 rounded animate-pulse"
                      key={"loadingImage" + index}
                    ></div>
                  );
                })}
              </div>
            ) : (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {data?.productImage?.map((imgURL, index) => {
                  return (
                    <div
                      className="h-20 w-20 bg-slate-200 rounded p-1"
                      key={imgURL}
                    >
                      <img
                        src={imgURL}
                        className="w-full h-full object-scale-down mix-blend-multiply cursor-pointer"
                        onMouseEnter={() => handleMouseEnterProduct(imgURL)}
                        onClick={() => handleMouseEnterProduct(imgURL)}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {/**product Details */}
        {loading ? (
          <div className="grid gap-1 w-full">
            <p className="bg-slate-200 animate-pulse  h-6 lg:h-8 w-full rounded-full inline-block"></p>
            <h2 className="text-2xl lg:text-4xl font-medium h-6 lg:h-8  bg-slate-200 animate-pulse w-full"></h2>
            <p className="capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8  w-full"></p>

            <div className="text-red-600 bg-slate-200 h-6 lg:h-8  animate-pulse flex items-center gap-1 w-full"></div>

            <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 lg:h-8  animate-pulse w-full">
              <p className="text-red-600 bg-slate-200 w-full"></p>
              <p className="text-slate-400 line-through bg-slate-200 w-full"></p>
            </div>

            <div className="flex items-center gap-3 my-2 w-full">
              <button className="h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full"></button>
              <button className="h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full"></button>
            </div>

            <div className="w-full">
              <p className="text-slate-600 font-medium my-1 h-6 lg:h-8   bg-slate-200 rounded animate-pulse w-full"></p>
              <p className=" bg-slate-200 rounded animate-pulse h-10 lg:h-12  w-full"></p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <p className="bg-red-200 text-[#1040bb] px-2 rounded-full inline-block w-fit">
              {data?.brandName}
            </p>
            <h2 className="text-2xl lg:text-4xl font-medium">
              {data?.productName}
            </h2>
            <p className="capitalize text-slate-400">{data?.category}</p>

            <div className="text-[#ce4434] flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>

            <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1">
              <p className="text-[#712e8b]">
                {changeCurrency(data.productSelling)}
              </p>
              <p className="text-[#e6398c] line-through">
                {changeCurrency(data.productPrice)}
              </p>
            </div>

            <div className="flex items-center gap-3 my-2">
              <button className="border-2 border-green-500 rounded px-3 py-1 min-w-[120px] text-green-600 font-medium hover:bg-green-600 hover:text-white">
                Buy
              </button>
              <button
                className="border-2 border-blue-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-blue-600 hover:text-blue-600 hover:bg-white"
                onClick={(e) => AddToCart(e, data?._id)}
              >
                Add To Cart
              </button>
            </div>

            <div>
              <p className="text-slate-600 font-medium my-1">Description : </p>
              <p>{data?.productDescription}</p>
            </div>
          </div>
        )}
      </div>
      {data.productCategory && (
        <CategroyWiseProductDisplay
          productCategory={data?.productCategory}
          heading={"Recommended Product"}
        />
      )}
    </div>
  );
}

export default ProductDetails;
