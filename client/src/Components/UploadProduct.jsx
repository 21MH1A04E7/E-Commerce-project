import React from "react";
import { IoMdClose } from "react-icons/io";

function UploadProduct({onClose}) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-200 bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-full max-w-2xl h-full max-h-[75%]">
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <div className="w-fit ml-auto text-2xl font-extrabold bg-red-600 hover:bg-green-500 rounded-md hover:text-white active:opacity-80 cursor-pointer" onClick={onClose}>
            <IoMdClose />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadProduct;
