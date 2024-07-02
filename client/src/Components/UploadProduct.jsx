import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import productCategoryList from "../solver/productCategory.js";
import { FaUpload } from "react-icons/fa";
import uploadImage from "../solver/uploadImage.js";
import DisplayImage from "./DisplayImage.jsx";
import Api from '../common/url.js'
import {toast } from 'react-toastify';

function UploadProduct({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    productName: "",
    productDescription: "",
    brandName: "",
    productPrice: "",
    // productQuantity: "",
    productImage: [],
    productCategory: "",
    productSelling: "",
    // ProductDiscount: "",
  });
  const [displayFullScreen, setDisplayFullScreen] = useState(false);
  const [fullimageurl, setFullimageurl] = useState("");
  console.log(data)
  console.log(fullimageurl)
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [uploadProductImageInput, setUploadProductImageInput] = useState("");
  // upload image?
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    setLoading(true);
    const uploadImageCloudinay = await uploadImage(file);
    setData((pre) => {
      return {
        ...pre,
        productImage: [...pre.productImage, uploadImageCloudinay.url],
      };
    });
    setLoading(false);
  };
  //filter 
 const handleDeleteProductImage=(index1)=>{
   setData((pre)=>{
     return{
      ...pre,
       productImage:pre.productImage.filter((item,index)=>{
         return index!==index1
       })
     }
   })
 }
 //upload product
 const handleUploadProduct=async(e)=>{
  e.preventDefault();
  if(data.productImage.length<=0){
    console.log("pls upload the image");
    return ;
  }
   try{
    const response=await fetch(Api.UploadProductByAdmine.url,{
      method:Api.UploadProductByAdmine.method,
      credentials:'include',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
     })
     const productData=await response.json()
     if(productData.success){
      toast.success("product uploaded successfully");
      onClose();
     }else{
      toast.error("not uploaded")
     }
   }catch(err){
    console.log(err)
   }
 }
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-full max-w-2xl h-full max-h-[75%] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <IoMdClose />
          </div>
        </div>

        <form className="grid p-4 gap-2 overflow-y-scroll h-full pb-5" onSubmit={handleUploadProduct}>
          <label htmlFor="productName">Product Name :</label>
          <input
            type="text"
            id="productName"
            placeholder="enter product name"
            name="productName"
            value={data.productName}
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label htmlFor="brandName" className="mt-3">
            Brand Name :
          </label>
          <input
            type="text"
            id="brandName"
            placeholder="enter brand name"
            value={data.brandName}
            name="brandName"
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label htmlFor="category" className="mt-3">
            Category :
          </label>
          <select
            required
            value={data.category}
            name="productCategory"
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded"
          >
            <option value={""}>Select Category</option>
            {productCategoryList.map((el, index) => {
              return (
                <option value={el.value} key={el.value + index}>
                  {el.label}
                </option>
              );
            })}
          </select>

          <label htmlFor="productImage" className="mt-3">
            Product Image :
          </label>
          <label htmlFor="uploadImageInput">
            <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <span className="text-4xl">
                  <FaUpload />
                </span>
                <p className="text-sm">
                  {loading ? (
                    <p className="text-green-500 text-2xl">Uploading...</p>
                  ) : (
                    "Upload Product Image"
                  )}
                </p>
                <input
                  type="file"
                  id="uploadImageInput"
                  className="hidden"
                  onChange={handleUploadImage}
                />
              </div>
            </div>
          </label>
          <div>
            {data?.productImage[0] ? (
              <div className="flex items-center gap-2">
                {data.productImage.map((el, index) => {
                  return (
                    <div className="relative group" key={index}>
                      <img
                        src={el}
                        alt={el}
                        width={80}
                        height={80}
                        className="bg-slate-100 border cursor-pointer"
                        onClick={()=>{
                          setFullimageurl(el)
                          setDisplayFullScreen(true)
                        }}
                      />
                      <div className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer" onClick={()=>handleDeleteProductImage(index)}>
                        <IoMdClose />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-red-600 text-xs">
                *Please upload product image
              </p>
            )}
          </div>

          <label htmlFor="price" className="mt-3">
            Price :
          </label>
          <input
            type="number"
            id="price"
            placeholder="enter price"
            value={data.productPrice}
            name="productPrice"
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label htmlFor="sellingPrice" className="mt-3">
            Selling Price :
          </label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="enter selling price"
            value={data.productSelling}
            name="productSelling"
            onChange={handleChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label htmlFor="description" className="mt-3">
            Description :
          </label>
          <textarea
            className="h-28 bg-slate-100 border resize-none p-1"
            placeholder="enter product description"
            rows={3}
            id="description"
            onChange={handleChange}
            name="productDescription"
            value={data.productDescription}
          ></textarea>

          <button className="px-3 py-2 bg-green-500 text-white mb-10 hover:opacity-90 rounded-lg" disabled={loading}>
            Upload Product
          </button>
        </form>
      </div>
      {/* DisplayImage */}
      {displayFullScreen && (
        <DisplayImage
          onClose={() => setDisplayFullScreen(false)}
          image={fullimageurl}
        />
      )}
    </div>
  );
}
export default UploadProduct;