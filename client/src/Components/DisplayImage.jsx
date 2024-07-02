import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

function DisplayImage({ image, onClose }) {
  return (
    <div className="z-index-500 inset-0 flex justify-center items-center p-6 bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded max-w-4xl mx-auto max-h-2xl p-2  m-5 md:m-10">
        <div className="w-fit ml-auto text-xl hover:text-red-600 hover:bg-white bg-red-600 rounded-lg text-white cursor-pointer">
          <IoCloseCircleOutline onClick={onClose} />
        </div>
        <div>
          <img
            src={image}
            alt="Uploaded Image"
            className="max-w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayImage;
